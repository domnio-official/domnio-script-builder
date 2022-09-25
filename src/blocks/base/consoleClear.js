import * as Blockly from "blockly/core";

Blockly.Blocks['console_clear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Clear the console");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(170);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['console_clear'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'console.clear();\n';
    return code;
  };