import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

Blockly.Blocks['start'] = {
    init: async function() {
      this.appendDummyInput()
          .appendField(String(translate("start", await localforage.getItem("language"))));
      this.appendStatementInput("start")
          .setCheck(null);
      this.setColour(66);
      this.setDeletable(false);
   this.setTooltip("Start from here");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['start'] = function(block) {
    var statements_start = Blockly.JavaScript.statementToCode(block, 'start');
    // TODO: Assemble JavaScript into code variable.
    var code = `${statements_start}`;
    return code;
  };