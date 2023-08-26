const {scratchPath} = require("./cli").opts;
const {Assembler} = require("whisker-main/dist/node/whisker").Whisker;
const {getProjectJsonFromSb3, writeSb3} = require("./common");

module.exports = async function () {
    const json = await getProjectJsonFromSb3(scratchPath.path);
    const newJSON = new Assembler(json).toJSON()
    await writeSb3(newJSON, scratchPath.path);
};
