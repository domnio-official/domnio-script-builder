import * as Blockly from "blockly/core";

Blockly.Blocks['console_log'] = {
    init: function() {
      this.appendValueInput("text")
          .setCheck()
          .appendField("Log to the console");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(165);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['console_log'] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `console.log(${value_text});\n`;
    return code;
  };