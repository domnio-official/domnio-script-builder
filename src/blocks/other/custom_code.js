import * as Blockly from "blockly/core";


Blockly.Blocks['inject_code'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Inject custom code")
          .appendField(new Blockly.FieldTextInput(""), "code");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(315);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['inject_code'] = function(block) {
    var text_code = block.getFieldValue('code');
    // TODO: Assemble JavaScript into code variable.
    var code = `${text_code}\n`;
    return code;
  };