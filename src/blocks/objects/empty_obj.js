import * as Blockly from "blockly/core";

Blockly.Blocks['empty_obj'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create an empty object");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['empty_obj'] = function() {
    // TODO: Assemble JavaScript into code variable.
    var code = '{}';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };