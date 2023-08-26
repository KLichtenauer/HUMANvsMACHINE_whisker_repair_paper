const fs = require("fs");
const path = require("path");
const {EOL} = require("os");
const logger = require("./logger");
const {openNewBrowser, configureWhiskerWeb} = require("./whisker-web");
const {getProjectsInPath, getProjectJsonFromSb3, writeSb3, switchToProjectTab} = require("./common");
const espree = require("espree");
const assert = require("assert");
const {RepairAlgorithmBuilder} = require("whisker-main/dist/node/whisker").Whisker;
const {
    scratchPath,
    testPath,
    outDir,
    keepIntermediate,
    numberOfJobs,
    configPath,
    csvFile,
    fixSpacePath,
    seed,
    acceleration,
} = require("./cli").opts;
const config = require(configPath);
const {TimeoutError} = require("puppeteer");
const os = require("os");

const projectBasename = path.basename(scratchPath, ".sb3");
const solutionOutPath = path.join(outDir, projectBasename + "-repaired.sb3");
const configOutPath = path.join(outDir, path.basename(configPath));
const testOutPath = path.join(outDir, path.basename(testPath));
const scratchOutPath = path.join(outDir, path.basename(scratchPath));

let reduceLogSpam = true;

/**
 * @typedef {{name: string, status: TestExecutionStatus, error: AssertionError | null, coveredBlocks: BlockID[], passedAssertions: string[], passedAssumptions: string[]}} TestExecutionTrace
 */

/**
 * Evaluates the given project by running it against the Whisker tests, and returns the test execution traces.
 *
 * @param projectJson the project to evaluate
 * @returns {Promise<TestExecutionTrace[]>} the test execution traces
 */
async function evaluate(projectJson) {
    // The Browser and Page of Puppeteer where we open Whisker Web to run the Whisker tests against the Scratch project.
    let browser = null;
    let page = null;

    // Path to the Scratch project (*.sb3) we want to test. Will be copied to the tmpDir before uploading.
    let projectPath = null;
    let tmpDir = null;

    // NodeJS timers that will close the browser when they elapse:
    // - The evaluationTimeLimit limits the evaluation time of a project to 5 minutes.
    // - The keepaliveWatchdog closes the browser after 5 seconds if the page freezes.
    let evaluationTimeLimit = null;
    let keepaliveWatchdog = null;

    /**
     * Closes the browser and clears all timers.
     * @returns {Promise<void>}
     */
    async function closeBrowser() {
        if (evaluationTimeLimit !== null) {
            clearTimeout(evaluationTimeLimit);
        }

        if (keepaliveWatchdog !== null) {
            clearTimeout(keepaliveWatchdog);
        }

        if (browser !== null) {
            await browser.close();
            browser = null;
        }
    }

    /**
     * Exposes a __keepalive__ function that must be invoked periodically by the page, otherwise the browser closes.
     * @returns {Promise<void>}
     */
    async function installKeepaliveWatchdog() {
        await page.exposeFunction("__whisker_keepalive__", () => {
            /*
             * If the keepaliveWatchdog is not refreshed within less than 5 seconds the browser closes. The intention is
             * to detect page hangs, deadlocks, and other errors that make the whole page unresponsive. For example,
             * when this bug [1] in the Scratch VM happens the entire page freezes and can no longer be closed. The only
             * reliable escape hook is to close the entire browser.
             * [1] https://github.com/scratchfoundation/scratch-vm/issues/2282
             */
            keepaliveWatchdog = keepaliveWatchdog !== null ? keepaliveWatchdog.refresh() : setTimeout(async () => {
                logger.warn("Browser closed due to unresponsive page");
                await closeBrowser();
            }, 5000);
        });
    }

    async function configureVM() {
        await page.evaluate(() => {
            window.Whisker.scratch.vm.setInterrogativeDebuggerSupported(false);
            window.Whisker.scratch.vm.deactivateDebugTracing();
        })
    }

    /**
     * Uploads the Scratch project and Whisker tests to Whisker Web.
     * @returns {Promise<void>}
     */
    async function uploadProjectAndTests() {
        const now = Date.now()

        // We only have the project.json of the test subject. But we have to upload an sb3 file that also contains
        // the assets (images, sounds) of the project. Luckily, we can patch the sb3 of the repair subject by
        // replacing its project.json with our project.json. To this, we must create a temporary working copy.
        const tmpDirPrefix = path.join(fs.realpathSync(os.tmpdir()), "whisker-");
        tmpDir = fs.mkdtempSync(tmpDirPrefix);
        projectPath = path.join(tmpDir, path.basename(scratchPath));
        await writeSb3(projectJson, projectPath);

        await (await page.$('#fileselect-project')).uploadFile(projectPath);
        await (await page.$('#fileselect-tests')).uploadFile(testPath);

        // Sometimes it takes some time until the project and tests are fully loaded.
        await waitUntilReady();

        logger.info("Project and tests uploaded after", Date.now() - now, "ms");
    }

    /**
     * Waits until the Scratch project and Whisker tests are initialized. To be called after uploading. Throws after
     * 1 second if still not finished.
     *
     * @returns {Promise<void>}
     */
    async function waitUntilReady() {
        for (let i = 0; i < 20; i++) {
            await new Promise(resolve => setTimeout(resolve, 50));
            const loaded = await page.evaluate(() => !!window.Whisker.tests && !!window.Whisker.scratch.project);
            if (loaded) {
                return;
            }
        }

        throw new TimeoutError("Unable to load the Scratch Project or Whisker tests in time");
    }

    try {
        // Closes the browser window automatically after 5 minutes.
        evaluationTimeLimit = setTimeout(async () => {
            logger.warn("Browser closed due to evaluation time limit");
            await closeBrowser();
        }, config.fitnessFunction.timeout);

        // Opens a new browser and installs a keepalive watchdog timer in the browser tab. The tab must periodically
        // notify the servant that it is still alive, otherwise the browser is closed.
        browser = await openNewBrowser();
        page = (await browser.pages())[0];
        await installKeepaliveWatchdog();

        // Visits Whisker Web, and uploads the Scratch project and Whisker tests.
        await configureWhiskerWeb(page, {reduceLogSpam, waitUntil: "load"});
        await configureVM();
        await uploadProjectAndTests();

        // VERY IMPORTANT: The "My Project" tab must be selected before running the tests. Otherwise, wrong results
        // might be reported. See commit 63b21e58.
        await switchToProjectTab(page, false);

        // Also important: Start the keepalive watchdog timer to detect page freezes. The timer expires after 5 seconds
        // and will close the browser unless the page resets it periodically, which we do in 1 second intervals.
        await page.evaluate(() => {
            window.__whisker_keepalive__();
            setInterval(() => window.__whisker_keepalive__(), 1000)
        });

        // Finally, evaluate the project...
        const now = Date.now();
        const traces = await page.evaluate(async () => await window.Whisker.runTestsForRepair());
        logger.info("Tests finished after", Date.now() - now, "ms");

        if (config.subsumeNegativeTestResults) {
            for (const trace of traces) {
                trace.passedAssertions.push(...trace.passedAssumptions);
            }
        }

        return traces;
    } catch (e) {
        logger.error(e);
        return []; // empty traces
    } finally {
        await closeBrowser();

        if (tmpDir !== null) {
            fs.rmSync(tmpDir, {recursive: true});
        }
    }
}

const variantsDir = path.join(outDir, "variants");

function writeProjectJSON(hashCode, projectJsonString) {
    const jsonPath = path.join(variantsDir, `${projectBasename}-${hashCode}.json`);
    fs.writeFileSync(jsonPath, projectJsonString, (err) => {
        if (err) {
            console.error(`Error writing JSON file for ${hashCode}`);
        }
    });
}

let logStream = null;
if (csvFile) {
    logStream = fs.createWriteStream(csvFile, {flags: 'a'});
}

let headerWritten = false;

function appendCSV(data) {
    if (!headerWritten) {
        const header = Object.keys(data[0]).join(';') + EOL;
        logStream.write(header);
        headerWritten = true;
    }

    for (const item of data) {
        item["passing"] = [...item["passing"]].map((name) => `"${name}"`).join(',');
        item["failing"] = [...item["failing"]].map((name) => `"${name}"`).join(',');
        const values = Object.values(item).join(';') + EOL;
        logStream.write(values);
    }
}

function validateConfig() {
    const ajv = new (require("ajv"))();
    /* eslint-disable node/no-unpublished-require */
    const schema = require("../config/repair/repair-config-schema.json");
    const validateConfig = ajv.compile(schema);
    if (!validateConfig(config)) {
        console.error(`Invalid config file "${configPath}". Errors:`);
        validateConfig.errors.forEach((error) => console.error(error));
        process.exit(1);
    }
}

function sanityCheck(traces) {
    const passingTests = new Set();
    const failingTests = new Set();

    for (const {name, status} of traces) {
        if (status === "pass") {
            passingTests.add(name);
        } else if (status === "fail" || config.subsumeNegativeTestResults) {
            failingTests.add(name);
        }
    }

    console.log('Passing tests:', passingTests);
    console.log('Failing tests:', failingTests);

    if (failingTests.size === 0) {
        console.error('Require at least one failing test');
        process.exit(1);
    }
}

function analyzeTests() {
    const testCode = fs.readFileSync(testPath, {encoding: 'utf-8'});
    const testNames = require(testPath).map(({test}) => test.name);

    const options = {
        loc: true,
        ecmaVersion: 'latest',
        sourceType: 'commonjs'
    };

    const ast = espree.parse(testCode, options);

    // Tells for every test (identified by its name) the start and end line, and the number of assertions in the test.
    const testProperties = new Map();

    function recordStartEnd({id: {name}, loc: {start, end}}) {
        if (testNames.includes(name)) {
            testProperties.set(name, {start: start.line, end: end.line});
        }
    }

    // Gather start and end line.
    for (const construct of ast.body) {
        switch (construct.type) {
            // Test declared via `const test = async function () { /* ... */ }`
            case "VariableDeclaration":
                for (const varDecl of construct.declarations) {
                    recordStartEnd(varDecl);
                }
                break;

            // Test declared via `async function test() { /* ... */ }`
            case "FunctionDeclaration":
                recordStartEnd(construct);
                break;
        }
    }

    assert(testNames.length === testProperties.size, "Sanity check failed: ambiguous number of tests detected");

    // Split the test code into individual lines of code.
    const lines = testCode.split(/\r?\n/);

    // Count the number of assertions per test. We assume at most one assertion per line, no commented out code, and
    // assertions are not factored out into helper functions.
    for (const [test, {start, end}] of testProperties) {
        const testLines = lines.slice(start - 1, end);

        const assertions = testLines.reduce((sum, line) => {
            if (line.includes("t.assert")) {
                return sum + 1;
            }

            if (config.subsumeNegativeTestResults && line.includes("t.assume")) {
                return sum + 1;
            }

            return sum;
        }, 0);

        testProperties.get(test).assertions = assertions;
    }

    return testProperties;
}

async function buildFixSpace() {
    // If --fix-space-path is not set explicitly, simply use the project given on the --scratch-path implicitly.
    const projectPaths = getProjectsInPath(fixSpacePath ?? {path: scratchPath, isDirectory: false});
    console.log('fix space:', projectPaths);
    return await Promise.all(projectPaths.map((p) => getProjectJsonFromSb3(p)));
}

async function appendFitnessInitialVariant(c, ff, time, now) {
    const fitness = await c.getFitness(ff);

    // The object structure must be the same as defined in CSVSchema.ts!
    const data = {
        iteration: Number.NaN, // initial variant
        fitness: fitness,
        hashCode: c.hashCode,
        viable: c.viable,
        numPass: c.statistics.totalPassed,
        numFail: c.statistics.totalFailed,
        passing: c.statistics.passingTests,
        failing: c.statistics.failingTests,
        time: time,
        now: now,
    };

    appendCSV([data]);
}

async function repair() {
    validateConfig();
    fs.copyFileSync(configPath, configOutPath);
    fs.copyFileSync(scratchPath, scratchOutPath);
    fs.copyFileSync(testPath, testOutPath);
    reduceLogSpam = config.logs.reduceSpam;

    const projectJSON = await getProjectJsonFromSb3(scratchPath);
    const fixSpace = await buildFixSpace();
    const testProperties = analyzeTests();

    const start = Date.now();
    const traces = await evaluate(projectJSON);
    const end = Date.now();
    console.log(`Test execution initial variant: ${end - start} ms`);

    sanityCheck(traces);
    assert(traces.length === testProperties.size, "Sanity check failed: ambiguous number of tests detected");

    const builder = new RepairAlgorithmBuilder(config, traces, projectJSON, fixSpace, evaluate, numberOfJobs, seed,
        testProperties, acceleration);

    if (keepIntermediate) {
        if (!fs.existsSync(variantsDir)) {
            fs.mkdirSync(variantsDir);
        }

        builder.on("variant built", (hashCode, json) => writeProjectJSON(hashCode, json));
    }

    const {algorithm, fitnessFunction, initialVariant} = builder.buildSearchAlgorithm();

    if (csvFile) {
        await appendFitnessInitialVariant(initialVariant, fitnessFunction, end - start, end);
        algorithm.on("evaluation", (data) => appendCSV(data));
    }

    await algorithm.findSolution();
    const [solution] = algorithm.getCurrentSolution();

    await writeSb3(solution.getProjectJSON(), solutionOutPath);
    const stats = solution.statistics;
    console.log('Passing tests:', stats.passingTests);
    console.log('Failing tests:', stats.failingTests);
}

module.exports = repair;
