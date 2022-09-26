import * as Blockly from "blockly/core";

Blockly.Blocks['run_console_cmd'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Run console command");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#982880");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['run_console_cmd'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `exec(${value_name});\n`;
    return code;
  };