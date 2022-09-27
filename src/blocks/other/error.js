import * as Blockly from "blockly/core";

Blockly.Blocks['error'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Error");
      this.setOutput(true, null);
      this.setColour("#982880");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['error'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'err';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };