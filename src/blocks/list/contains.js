// Block URL = https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#w2ahno

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
    "type": "list_contains",
    "message0": `${String(translate("list", await localforage.getItem("language")))} %1 ${String(translate("contains", await localforage.getItem("language")))} %2`,
    "args0": [
      {
        "type": "input_value",
        "name": "list",
        "check": "Array"
      },
      {
        "type": "input_value",
        "name": "contains"
      }
    ],
    "inputsInline": true,
    "output": "Boolean",
    "colour": 255,
    "tooltip": "",
    "helpUrl": ""
  };

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['list_contains'] = function(block) {
    var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
    var value_contains = Blockly.JavaScript.valueToCode(block, 'contains', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_list}.includes(${value_contains})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

})();