import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
    "type": "watch_dir_path_var",
    "message0": String(translate("watch-var-path", await localforage.getItem("language"))),
    "output": null,
    "colour": 75,
    "tooltip": "",
    "helpUrl": ""
  };

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['watch_dir_path_var'] = function(block) {
    var code = 'path';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

})();