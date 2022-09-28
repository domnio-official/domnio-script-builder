// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#p4uf7z

import * as Blockly from "blockly/core";

Blockly.Blocks['add_keys'] = {
  init: function() {
    this.appendValueInput("KEY")
        .setCheck("String")
        .appendField("Add a key");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("and set value value to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

  Blockly.JavaScript['add_keys'] = function(block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `${value_key}: ${value_value},\n`;
    return code;
  };