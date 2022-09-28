// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#g63wd7

import * as Blockly from "blockly/core";

Blockly.Blocks['db_has_key'] = {
    init: function() {
      this.appendValueInput("db")
          .setCheck(null)
          .appendField("Database");
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("has key");
      this.appendDummyInput()
          .appendField("?");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['db_has_key'] = function(block) {
    var value_db = Blockly.JavaScript.valueToCode(block, 'db', Blockly.JavaScript.ORDER_ATOMIC);
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    value_db = value_db.slice(0, -1);
    value_db = value_db.replace('\'', '');
    var code = `${value_db}.has(${value_key})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };