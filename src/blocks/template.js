/* template for creating blocks, copy and paste!

-------------------------------------------------------- */


// Block URL: 

import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {
    var language = await localforage.getItem("language");


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

String(translate("key", language))

`${String(translate("key", language))}`

// Charter: `