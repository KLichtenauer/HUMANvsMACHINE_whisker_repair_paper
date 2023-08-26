const Test = require('./test-runner/test');
const TestRunner = require('./test-runner/test-runner');
const WhiskerUtil = require('./test/whisker-util');
const TAP13Listener = require('./test-runner/tap13-listener');
const TAP13Formatter = require('./test-runner/tap13-formatter');
const {Coverage, CoverageGenerator} = require('./coverage/coverage');
const Util = require('./vm/util');
const Search = require("./whisker/Search");
const ModelTester = require("./whisker/model/ModelTester");
const {RepairAlgorithmBuilder} = require("./repair/utils/RepairAlgorithmBuilder");
const {metrics, newSuspiciousnessMap} = require("./repair/SuspiciousnessMetric");
const {Assembler} = require("./assembler/Assembler");
const {Container} = require("./whisker/utils/Container");

module.exports = {
    Test,
    TestRunner,
    TAP13Listener,
    TAP13Formatter,
    Search,
    WhiskerUtil,
    Coverage,
    CoverageGenerator,
    Util,
    ModelTester,
    RepairAlgorithmBuilder,
    metrics,
    susiciousnessPerBlock: newSuspiciousnessMap,
    Assembler,
    Container,
};
