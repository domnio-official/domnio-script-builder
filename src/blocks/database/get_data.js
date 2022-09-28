// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jcog4c

import * as Blockly from "blockly/core";

Blockly.Blocks['get_data'] = {
    init: function() {
      this.appendValueInput("key")
          .setCheck("String")
          .appendField("Get key");
      this.appendValueInput("db")
          .setCheck("String")
          .appendField("from database");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['get_data'] = function(block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_db = Blockly.JavaScript.valueToCode(block, 'db', Blockly.JavaScript.ORDER_ATOMIC);
    value_db = value_db.slice(0, -1);
    value_db = value_db.replace('\'', '');
    var code = `${value_db}.get(${value_key})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };