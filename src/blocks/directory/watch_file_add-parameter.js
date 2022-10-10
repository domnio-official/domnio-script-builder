// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6gs3vq

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
    "type": "watch_add_parameter",
    "message0": "Add parameter of type %1 %2 With value %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "sel_par",
        "options": [
          [
            "Persistent?",
            "persistent"
          ],
          [
            "Ignored extensions",
            "ignored"
          ],
          [
            "Ignore Initial?",
            "ignoreInitial"
          ],
          [
            "Follow Symlinks?",
            "followSymlinks"
          ],
          [
            "Cwd",
            "cwd"
          ],
          [
            "Disable Globbing?",
            "disableGlobbing"
          ],
          [
            "Use Polling",
            "usePolling"
          ],
          [
            "Interval",
            "interval"
          ],
          [
            "Binary Interval",
            "binaryInterval"
          ],
          [
            "Always Stat",
            "alwaysStat"
          ],
          [
            "Depth",
            "depth"
          ],
          [
            "Ignore permission errors?",
            "ignorePermissionErrors"
          ],
          [
            "Atomic?",
            "atomic"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "value"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 78,
    "tooltip": "",
    "helpUrl": "https://github.com/paulmillr/chokidar"
  };

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['watch_add_parameter'] = function(block) {
    var dropdown_sel_par = block.getFieldValue('sel_par');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `${dropdown_sel_par}: ${value_value},\n`;
    return code;
  };

})();