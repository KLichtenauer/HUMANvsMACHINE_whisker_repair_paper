const fs = require("fs");
const path = require("path");
const {EOL} = require("os");
const {withTmpDir, getProjectsInPath, getProjectJsonFromSb3, writeSb3} = require("./common");
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

const projectBasename = path.basename(scratchPath, ".sb3");
const solutionOutPath = path.join(outDir, projectBasename + "-repaired.sb3");
const configOutPath = path.join(outDir, path.basename(configPath));
const testOutPath = path.join(outDir, path.basename(testPath));
const scratchOutPath = path.join(outDir, path.basename(scratchPath));

let variantCounter = 0;
let reduceLogSpam = true;

/**
 * Evaluates the project variant described by the given `projectJson` by running the Whisker tests on the test path
 * against it. Also sets the `cancel()` function of the given `cancelToken`, such that the evaluation can be aborted
 * early.
 *
 * @param openNewPage callback that opens a new Whisker page to which the project and tests can be uploaded
 * @param projectJson the JSON describing the project to be evaluated
 * @param timeoutPerTest {number} the timeout in ms per test; use 0 for no timeout
 * @param cancelToken {{cancel: () => Promise<void>, timeout: number}} a cancel token to abort the evaluation
 * @return {Promise<TestExecutionTrace[]>}
 */
async function evaluate(openNewPage, projectJson, timeoutPerTest, cancelToken) {

    /**
     * Uploads the Scratch project and Whisker tests to Whisker Web.
     * @return {Promise<void>}
     */
    async function uploadProjectAndTests() {
        await (await page.$('#fileselect-project')).uploadFile(projectPath);
        await (await page.$('#fileselect-tests')).uploadFile(testPath);
        // Give Whisker some time to load the project and the tests. 250 ms seems to be enough in most cases.
        // If you get "Error: Evaluation failed: TypeError: tests is not iterable", consider increasing the value.
        await page.evaluate(async () => await new Promise((resolve) => setTimeout(resolve, 250)));
    }

    async function runTestsForRepair() {
        try {
            page = await openNewPage({reduceLogSpam});
            cancelToken.cancel = async () => {
                await page.evaluate(() => window.Whisker.abortTestRun());
                await new Promise((resolve) => setTimeout(resolve, 50));
                await page.close();
            };

            await uploadProjectAndTests();
            return await page.evaluate(async (timeoutPerTest) =>
                await window.Whisker.runTestsForRepair(timeoutPerTest), timeoutPerTest);
        } finally {
            if (page) {
                await page.close();
            }
        }
    }

    let projectPath = null;
    let page = null;

    const traces = await withTmpDir(async (tmpDir) => {
        projectPath = path.join(tmpDir, path.basename(scratchPath));
        await writeSb3(projectJson, projectPath);
        return await runTestsForRepair();
    }, `variant-${variantCounter}-`);

    variantCounter++;

    if (config.subsumeNegativeTestResults) {
        for (const trace of traces) {
            trace.passedAssertions.push(...trace.passedAssumptions);
        }
    }

    return traces;
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

async function repair(openNewPage) {
    validateConfig();
    fs.copyFileSync(configPath, configOutPath);
    fs.copyFileSync(scratchPath, scratchOutPath);
    fs.copyFileSync(testPath, testOutPath);
    reduceLogSpam = config.logs.reduceSpam;

    const projectJSON = await getProjectJsonFromSb3(scratchPath);
    console.time("Test execution original variant");
    const traces = await evaluate(openNewPage, projectJSON, 0, {});
    console.timeEnd("Test execution original variant");
    sanityCheck(traces);

    const evaluator = (projectJSON, cancelToken) => evaluate(openNewPage, projectJSON, 0, cancelToken);
    const fixSpace = await buildFixSpace();
    const testProperties = analyzeTests();
    assert(traces.length === testProperties.size, "Sanity check failed: ambiguous number of tests detected");

    const builder = new RepairAlgorithmBuilder(config, traces, projectJSON, fixSpace, evaluator, numberOfJobs, seed,
        testProperties, acceleration);

    if (keepIntermediate) {
        if (!fs.existsSync(variantsDir)) {
            fs.mkdirSync(variantsDir);
        }

        builder.on("variant built", (hashCode, json) => writeProjectJSON(hashCode, json));
    }

    const algorithm = builder.buildSearchAlgorithm();

    if (csvFile) {
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
