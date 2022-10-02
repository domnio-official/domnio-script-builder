// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ax9qet

import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_read'] = {
    init: function() {
      this.appendValueInput("path")
          .setCheck(null)
          .appendField("Read file");
      this.setOutput(true, null);
      this.setColour(45);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['filesys_read'] = function(block) {
    var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `await fss.readFile(${value_path})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };