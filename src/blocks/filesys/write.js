// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#m2zzic

import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_write'] = {
  init: function() {
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("Create or edit file");
    this.appendValueInput("data")
        .setCheck(null)
        .appendField("With data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


  Blockly.JavaScript['filesys_write'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `await fss.writeFile(${value_name}, ${value_data});\n`;
    return code;
  };