// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#62rtw5

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
    "type": "watch_file_create",
    "message0": `${String(translate("watch-f_create-1", await localforage.getItem("language")))} %1 %2 ${String(translate("watch-f_create-2", await localforage.getItem("language")))} %3 %4 ${String(translate("watch-f_create-3", await localforage.getItem("language")))} %5`,
    "args0": [
      {
        "type": "field_input",
        "name": "wtch",
        "text": "watcher"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "File add",
            "add"
          ],
          [
            "File change",
            "change"
          ],
          [
            "File remove",
            "unlink"
          ],
          [
            "Directory added",
            "addDir"
          ],
          [
            "Directory removed",
            "unlinkDir"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "then"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 75,
    "tooltip": "",
    "helpUrl": ""
  };

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['watch_file_create'] = function(block) {
    var text_wtch = block.getFieldValue('wtch');
    var dropdown_type = block.getFieldValue('type');
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    var code = 
`${text_wtch}.on('${dropdown_type}', path => {
    ${statements_then}
});
`;
    return code;
  };

})();