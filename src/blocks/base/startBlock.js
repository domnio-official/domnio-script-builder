import * as Blockly from "blockly/core";

Blockly.Blocks['start'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Start");
      this.appendStatementInput("start")
          .setCheck(null);
      this.setColour(66);
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