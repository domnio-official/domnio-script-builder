// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#srii7g

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
  "type": "dir_watch",
  "message0": `${String(translate("watch_create-2", await localforage.getItem("language")))} %1 ${String(translate("then_fsys", await localforage.getItem("language")))} %2 %3`,
  "args0": [
    {
      "type": "input_value",
      "name": "file"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['dir_watch'] = function(block) {
  var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
  var code = 
`fs.watch(${value_file}, (event, filename) => {
  ${statements_then}
});
`;
  return code;
};

})();