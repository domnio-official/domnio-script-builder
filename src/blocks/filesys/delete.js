// Block URL: not needed too ez block

import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_delete'] = {
    init: function() {
      this.appendValueInput("file")
          .setCheck(null)
          .appendField("Delete file");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['filesys_delete'] = function(block) {
    var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `await fss.unlink(${value_file});\n`;
    return code;
  };