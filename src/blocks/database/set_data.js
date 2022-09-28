import * as Blockly from "blockly/core";

Blockly.Blocks['db_set_data'] = {
    init: function() {
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("Add/Set key");
      this.appendValueInput("value")
          .setCheck(null)
          .appendField("to value");
      this.appendValueInput("db")
          .setCheck(null)
          .appendField("in database");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['db_set_data'] = function(block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var value_db = Blockly.JavaScript.valueToCode(block, 'db', Blockly.JavaScript.ORDER_ATOMIC);
    value_db = value_db.slice(0, -1);
    value_db = value_db.replace('\'', '');
    var code = `${value_db}.set(${value_key}, ${value_value});\n`;
    return code;
  };