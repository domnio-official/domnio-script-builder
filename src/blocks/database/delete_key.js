import * as Blockly from "blockly/core";

Blockly.Blocks['db_delete'] = {
    init: function() {
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("Delete key");
      this.appendValueInput("db")
          .setCheck(null)
          .appendField("from database");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['db_delete'] = function(block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_db = Blockly.JavaScript.valueToCode(block, 'db', Blockly.JavaScript.ORDER_ATOMIC);
    value_db = value_db.slice(0, -1);
    value_db = value_db.replace('\'', '');
    var code = `${value_db}.delete(${value_key});\n`;
    return code;
  };