import * as Blockly from "blockly/core";

Blockly.Blocks['throw'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("Throw error");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#982880");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

  Blockly.JavaScript['throw'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `throw (${value_value});\n`;
    return code;
  };