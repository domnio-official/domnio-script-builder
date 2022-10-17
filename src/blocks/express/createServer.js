// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#n2nkd9

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";
var language = await localforage.getItem("language");

(async () => {

const blockData = {
  "type": "express_createsrv",
  "message0": String(translate("express_create", language)),
  "args0": [
    {
      "type": "field_input",
      "name": "nameSrv",
      "text": "app"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "port",
      "check": "Number"
    },
    {
      "type": "input_statement",
      "name": "on_finish"
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


  Blockly.JavaScript['express_createsrv'] = function(block) {
    var text_namesrv = block.getFieldValue('nameSrv');
    var value_port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_on_finish = Blockly.JavaScript.statementToCode(block, 'on_finish');
    var code = 
`// const ${text_namesrv} = express();

${text_namesrv}.listen(${value_port}, () => {
    ${statements_on_finish}});\n`
    return code;
  };

})();