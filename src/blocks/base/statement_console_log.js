import * as Blockly from "blockly/core";

Blockly.Blocks['statement_console_log'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Log to the console");
      this.appendStatementInput("log")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(165);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['statement_console_log'] = function(block) {
    var statements_log = Blockly.JavaScript.statementToCode(block, 'log');
    // TODO: Assemble JavaScript into code variable.
    var code = `console.log(${statements_log})\n`;
    return code;
  };