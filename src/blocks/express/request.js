// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dykp47

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";
var language = await localforage.getItem("language");

(async () => {


const blockData = {
  "type": "express_onreq",
  "message0": String(translate("on_request", language)),
  "args0": [
    {
      "type": "field_input",
      "name": "app",
      "text": "app"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "request",
      "options": [
        [
          "All",
          "all"
        ],
        [
          "GET",
          "get"
        ],
        [
          "POST",
          "post"
        ],
        [
          "PUT",
          "put"
        ],
        [
          "PATCH",
          "patch"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "path"
    },
    {
      "type": "input_statement",
      "name": "do"
    }
  ],
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['express_onreq'] = function(block) {
  var text_app = block.getFieldValue('app');
  var dropdown_request = block.getFieldValue('request');
  var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 
`${text_app}.${dropdown_request}(${value_path}, (req, res) => {
  ${statements_do}
});\n`;
  return code;
};

})();