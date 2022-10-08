import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

const blockData = {
  "type": "console_log",
  "message0": `${String(translate("console_log", await localforage.getItem("language")))} %1`,
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "",
  "helpUrl": ""
};

const blockName = blockData.type;

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['console_log'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `console.log(${value_text});\n`;
  return code;
};