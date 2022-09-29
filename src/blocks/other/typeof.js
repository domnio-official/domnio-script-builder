// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ussue6

import * as Blockly from "blockly/core";

Blockly.Blocks['typeof'] = {
    init: function() {
      this.appendValueInput("input")
          .setCheck(null)
          .appendField("Type of");
      this.setOutput(true, null);
      this.setColour("#982880");
   this.setTooltip("Given an input, it returns \"boolean\", \"string\", \"number\" or \"undefined\" based on the input type");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['typeof'] = function(block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `typeof ${value_input}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };