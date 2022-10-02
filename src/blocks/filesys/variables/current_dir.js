import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_variable_cdir'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Current Directory");
      this.setOutput(true, "String");
      this.setColour(48);
   this.setTooltip("Returns the current directory");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['filesys_variable_cdir'] = function() {
    // TODO: Assemble JavaScript into code variable.
    var code = '__dirname';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };