// Block URL: 

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";
var language = await localforage.getItem("language");

(async () => {


const blockData = {
    "type": "express_res",
    "message0": String(translate("express_res", language)),
    "args0": [
      {
        "type": "input_value",
        "name": "with"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  };

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['express_res'] = function(block) {
    var value_with = Blockly.JavaScript.valueToCode(block, 'with', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 
`res.send(${value_with});\n`;
    return code;
  };

})();