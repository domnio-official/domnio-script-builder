// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wkvu84

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
    "type": "simple_dir_watch",
    "message0": `${String(translate("watch_simple_create-1", await localforage.getItem("language")))} %1 %2 ${String(translate("watch_create-2", await localforage.getItem("language")))} %3 ${String(translate("watch_create-4", await localforage.getItem("language")))} %4`,
    "args0": [
      {
        "type": "field_input",
        "name": "w_name",
        "text": "watcher"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "fd"
      },
      {
        "type": "input_statement",
        "name": "then"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 79,
    "tooltip": "",
    "helpUrl": "https://github.com/paulmillr/chokidar"
  };

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

  Blockly.JavaScript['simple_dir_watch'] = function(block) {
    var text_w_name = block.getFieldValue('w_name');
    var value_fd = Blockly.JavaScript.valueToCode(block, 'fd', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    // TODO: Assemble JavaScript into code variable.
    var code = 
`
const ${text_w_name} = chokidar.watch(${value_fd});
${statements_then}`;
    return code;
  };
})();