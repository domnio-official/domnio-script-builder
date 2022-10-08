// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#js3zs2

import * as Blockly from "blockly/core";

Blockly.Blocks['get_obj_key'] = {
    init: function() {
      this.appendValueInput("obj_name")
          .setCheck(null)
          .appendField("In object");
      this.appendValueInput("key_name")
          .setCheck(null)
          .appendField("get key value");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['get_obj_key'] = function(block) {
    var value_obj_name = Blockly.JavaScript.valueToCode(block, 'obj_name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_key_name = Blockly.JavaScript.valueToCode(block, 'key_name', Blockly.JavaScript.ORDER_ATOMIC);
    if (value_key_name.startsWith("'")) {
      value_key_name = value_key_name.slice(0, -1);
      value_key_name = value_key_name.replace('\'', '');
      var code = `${value_obj_name}.${value_key_name}`;
    }
    else {
      var code = `${value_obj_name}[String(${value_key_name})]`;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
  };