import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockName = "return_no_value";

const blockData = {
    "message0": String(translate("return", await localforage.getItem("language"))),
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

})();
