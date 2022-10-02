import * as Blockly from "blockly/core";

Blockly.Blocks['convert_to_number'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck(null)
          .appendField("Convert");
      this.appendDummyInput()
          .appendField("into number");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("Convert something into a number, returns  NaN if the value is not possible to convert");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['convert_to_number'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `Number(${value_value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };