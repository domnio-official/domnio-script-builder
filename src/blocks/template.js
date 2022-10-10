/* template for creating blocks, copy and paste!

-------------------------------------------------------- */


// Block URL: 

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


const blockData = {};

Blockly.Blocks[blockData.type] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

// Block Javascript here

})();


// -------------------------------------------------------

// translate template:

String(translate("key", await localforage.getItem("language")))

`${String(translate("key", await localforage.getItem("language")))}`

// Charter: `