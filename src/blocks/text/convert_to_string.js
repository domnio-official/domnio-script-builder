import Blockly from "blockly/core";

Blockly.Blocks['convert_to_string'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck(null)
          .appendField("Convert to string");
      this.setOutput(true, null);
      this.setColour("#5ba58b");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['convert_to_string'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `String(${value_value})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };