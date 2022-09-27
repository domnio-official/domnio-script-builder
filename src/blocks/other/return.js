import * as Blockly from "blockly/core";
import * as eng from "/src/locales/en";

const en = eng.getLangs();

const blockName = "return_no_value";

const blockData = {
    "message0": `${en.return}`,
    "args0": [
    ],
    "colour": "#D14081",
    "previousStatement": null,
    "tooltip": "",
    "helpUrl": "",
    "colour": "#982880"
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function () {
    return `return\n`;
};