import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
    "type": "filesys_fname",
    "message0": `${String(translate("fname", await localforage.getItem("language")))}`,
    "output": null,
    "colour": 70,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};
  

Blockly.JavaScript['filesys_fname'] = function() {
    var code = 'filename';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

})();