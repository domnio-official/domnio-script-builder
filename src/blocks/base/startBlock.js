import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

Blockly.Blocks['start'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Start");
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
    var code = `${statements_start}`;
    return code;
  };