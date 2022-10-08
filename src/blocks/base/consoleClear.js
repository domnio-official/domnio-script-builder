import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
  "type": "console_clear",
  "message0": String(translate("console_clear", await localforage.getItem("language"))),
  "previousStatement": null,
  "nextStatement": null,
  "colour": 170,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['console_clear'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.clear();\n';
  return code;
};

})();
