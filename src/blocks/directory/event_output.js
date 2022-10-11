import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {
    "type": "filesys_event",
    "message0": `${String(translate("event", await localforage.getItem("language")))}`,
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
  

Blockly.JavaScript['filesys_event'] = function() {
    var code = 'event';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

})();