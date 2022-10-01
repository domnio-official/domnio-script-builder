import * as Blockly from "blockly/core";

Blockly.Blocks['add_data_section'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Add a data section with name")
          .appendField(new Blockly.FieldTextInput("body"), "name");
      this.appendValueInput("data")
          .setCheck(null)
          .appendField("And data");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['add_data_section'] = function(block) {
    var text_name = block.getFieldValue('name');
    var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `${text_name}: ${value_data},\n`;
    return code;
  };