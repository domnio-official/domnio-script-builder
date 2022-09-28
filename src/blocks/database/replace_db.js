// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wpvf78

import * as Blockly from "blockly/core";

Blockly.Blocks['replace_db'] = {
    init: function() {
      this.appendValueInput("db")
          .setCheck(null)
          .appendField("Replace database");
      this.appendValueInput("obj")
          .setCheck(null)
          .appendField("With object");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['replace_db'] = function(block) {
    var value_db = Blockly.JavaScript.valueToCode(block, 'db', Blockly.JavaScript.ORDER_ATOMIC);
    var value_obj = Blockly.JavaScript.valueToCode(block, 'obj', Blockly.JavaScript.ORDER_ATOMIC);
    value_db = value_db.slice(0, -1);
    value_db = value_db.replace('\'', '');
    var code = `${value_db}.JSON(${value_obj});\n`;
    return code;
  };