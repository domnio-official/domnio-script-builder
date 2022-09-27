import Blockly from "blockly/core";

Blockly.Blocks['text_count'] = {
    init: function() {
      this.appendValueInput("count")
          .setCheck(null)
          .appendField("Count");
      this.appendValueInput("in")
          .setCheck(null)
          .appendField("in");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("#5ba58b");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['text_count'] = function(block) {
    var value_count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
    var value_in = Blockly.JavaScript.valueToCode(block, 'in', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `textCount(${value_count}, ${value_in})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };