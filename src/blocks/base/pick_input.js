// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mzpu56

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";


const blockData = {
  "type": "pick_input",
  "message0": `${String(translate("console_ask", await localforage.getItem("language")))} %1 ${String(translate("console_save_value", await localforage.getItem("language")))} %2`,
  "args0": [
    {
      "type": "input_value",
      "name": "ask input",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "save input"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

  Blockly.JavaScript['pick_input'] = function(block) {
    var value_ask_input = Blockly.JavaScript.valueToCode(block, 'ask input', Blockly.JavaScript.ORDER_ATOMIC);
    var value_save_input = Blockly.JavaScript.valueToCode(block, 'save input', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `${value_save_input} = prompt(${value_ask_input});\n`;
    return code;
  };



  // Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#e2at2v

  const blockData2 = {
    "type": "ask_input_left",
    "message0": `${String(translate("console_ask", await localforage.getItem("language")))} %1`,
    "args0": [
      {
        "type": "input_value",
        "name": "ask input",
        "check": "String"
      }
    ],
    "output": null,
    "colour": 165,
    "tooltip": "",
    "helpUrl": ""
  };
  
  Blockly.Blocks[blockData2.type] = {
      init: function () {
          this.jsonInit(blockData2);
      }
  };

  Blockly.JavaScript['ask_input_left'] = function(block) {
    var value_ask_input = Blockly.JavaScript.valueToCode(block, 'ask input', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `prompt(${value_ask_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };