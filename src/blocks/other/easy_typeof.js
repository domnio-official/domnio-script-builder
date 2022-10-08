  import * as Blockly from "blockly/core";
  import { translate } from  "/src/locales";
  import localforage from "localforage";
  
  
  const blockData = {
  "type": "easy_typeof",
  "message0": `%1 ${String(translate("is", await localforage.getItem("language")))} %2`,
  "args0": [
    {
      "type": "input_value",
      "name": "input"
    },
    {
      "type": "field_dropdown",
      "name": "result_typeof",
      "options": [
        [
          String(translate("number", await localforage.getItem("language"))),
          "number"
        ],
        [
          String(translate("tof_string", await localforage.getItem("language"))),
          "string"
        ],
        [
          String(translate("boolean", await localforage.getItem("language"))),
          "boolean"
        ],
        [
          String(translate("undefined", await localforage.getItem("language"))),
          "undefined"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": "#982880",
  "tooltip": "",
  "helpUrl": ""
};

  const blockName = blockData.type;
  
  Blockly.Blocks[blockName] = {
      init: function () {
          this.jsonInit(blockData);
      }
  };
  
  Blockly.JavaScript['easy_typeof'] = function(block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_result_typeof = block.getFieldValue('result_typeof');
    var code = `typeof ${value_input} == '${dropdown_result_typeof}'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };