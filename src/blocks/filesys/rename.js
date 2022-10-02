// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#zupz35

import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_rename'] = {
    init: function() {
      this.appendValueInput("old_name")
          .setCheck(null)
          .appendField("Rename file");
      this.appendValueInput("new_name")
          .setCheck(null)
          .appendField("into");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['filesys_rename'] = function(block) {
    var value_old_name = Blockly.JavaScript.valueToCode(block, 'old_name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_new_name = Blockly.JavaScript.valueToCode(block, 'new_name', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `await fss.rename(${value_old_name}, ${value_new_name});\n`;
    return code;
  };