const {PromisePool} = require("@supercharge/promise-pool");
const {getProjectsInScratchPath} = require("./common");
const logger = require("./logger");
const path = require("path");
const {metrics, testPath, csvFile, numberOfJobs, susiciousnessPerBlock, Container, subsumeNegativeResults} = (function () {
    // eslint-disable-next-line node/no-extraneous-require
    const {Whisker} = require("whisker-main/dist/node/whisker");
    const opts = require("./cli").opts;
    const {testPath, numberOfJobs, csvFile, subsumeNegativeResults} = opts;
    const metrics = opts.metrics.map((metric) => Whisker.metrics[metric]);
    return {metrics, testPath, csvFile, numberOfJobs, subsumeNegativeResults,
        susiciousnessPerBlock: Whisker.susiciousnessPerBlock, Container: Whisker.Container};
})();

Container.subsumeNegativeTestResults = subsumeNegativeResults;

async function faultLocalization(openNewPage) {
    async function configureWhiskerWebInstance(page, projectPath) {
        await (await page.$('#fileselect-project')).uploadFile(projectPath);
        await (await page.$('#fileselect-tests')).uploadFile(testPath);
        // Give Whisker some time to load the project and the tests.
        await page.evaluate(async () => await new Promise((resolve) => setTimeout(resolve, 1000)));
    }

    async function runTestsForRepair(projectPath) {
        let page = null;
        try {
            page = await openNewPage();
            await configureWhiskerWebInstance(page, projectPath);

            // This is not a recursive call. It calls a different function that runs in the Puppeteer context.
            const testTrace = await page.evaluate(async () => await Whisker.runTestsForRepair());

            return {
                projectPath,
                testTrace,
            };
        } finally {
            if (page) {
                await page.close();
            }
        }
    }

    async function runTestSuiteOnProjectsInParallel() {
        const {results, errors} = await PromisePool
            .for(getProjectsInScratchPath())
            .withConcurrency(numberOfJobs)
            .process(async (projectPath) => await runTestsForRepair(projectPath));
        return {
            results: results.map(({projectPath, testTrace}) => ({project: scratchProjectName(projectPath), testTrace})),
            errors,
        };
    }

    function computeSuspiciousness({project, testTrace}) {
        const suspiciousness = [];
        for (const metric of metrics) {
            for (const [susp, blockID] of susiciousnessPerBlock(testTrace, metric)) {
                suspiciousness.push({project, metric: metric.name, blockID, suspiciousness: susp});
            }
        }
        return suspiciousness;
    }

    function scratchProjectName(projectPath) {
        return path.basename(projectPath, path.extname(projectPath));
    }

    function outputSuspiciousness() {
        // Block IDs may contain commas -> sanitization necessary before writing to CSV file.
        suspiciousnessPerProject.forEach((o) => o['blockID'] = `"${o['blockID']}"`);

        if (!csvFile) {
            console.table(suspiciousnessPerProject);
            return;
        }

        logger.info("Writing results to", csvFile);

        const fs = require("fs");
        const {EOL} = require('os');

        const header = ["project", "metric", "blockID", "suspiciousness"];
        const rows = [header.join(), ...suspiciousnessPerProject.map((row) => Object.values(row).join())];
        const data = rows.join(EOL) + EOL;

        fs.writeFile(csvFile, data, 'utf8', (error) => {
            if (error) {
                logger.error(error.message);
            }
        });
    }

    function printErrors() {
        errors.forEach(({item, stack}) => {
            logger.error(`Could not run tests against project ${item}\n Reason: ${stack}`);
        });

        const testsWithErrors = results.flatMap(({project, testTrace}) =>
            testTrace.flatMap(({status, name}) => status === "error" ? [{project, name}] : []));

        if (testsWithErrors.length > 0) {
            logger.error("The following Whisker tests had errors during execution:");
            console.table(testsWithErrors);
        }
    }

    const {results, errors} = await runTestSuiteOnProjectsInParallel();

    printErrors();

    const suspiciousnessPerProject = results.flatMap((result) => computeSuspiciousness(result));

    if (suspiciousnessPerProject.length === 0) {
        logger.error("Some or all tests failed to execute, or did not produce any coverage information.");
        return;
    }

    outputSuspiciousness();
}

module.exports = faultLocalization;
