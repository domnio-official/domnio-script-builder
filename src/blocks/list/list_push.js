import Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";
var language = await localforage.getItem("language");

const blockName = "list_push";

const blockData = {
    "message0": `${String(translate("in_list", language))} %1 ${String(translate("push", language))} %2`,
    "args0": [
        {
            "type": "input_value",
            "name": "LIST",
            "check":"Array"
        },
        {
            "type": "input_value",
            "name": "PUSH"
        },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.setStyle('list_blocks');
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const list = Blockly.JavaScript.valueToCode(block, "LIST", Blockly.JavaScript.ORDER_ATOMIC);
    const push = Blockly.JavaScript.valueToCode(block, "PUSH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${list}.push(${push});\n`
    return code;
};