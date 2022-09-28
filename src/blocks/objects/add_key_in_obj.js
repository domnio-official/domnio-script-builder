// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tv78ph

import * as Blockly from "blockly/core";

Blockly.Blocks['add_key_to_obj'] = {
    init: function() {
      this.appendValueInput("key_name")
          .setCheck(null)
          .appendField("Add/set key");
      this.appendValueInput("val_name")
          .setCheck(null)
          .appendField("with value");
      this.appendValueInput("obj_name")
          .setCheck(null)
          .appendField("in object");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['add_key_to_obj'] = function(block) {
    var value_key_name = Blockly.JavaScript.valueToCode(block, 'key_name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_val_name = Blockly.JavaScript.valueToCode(block, 'val_name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_obj_name = Blockly.JavaScript.valueToCode(block, 'obj_name', Blockly.JavaScript.ORDER_ATOMIC);
    value_key_name = value_key_name.slice(0, -1);
    value_key_name = value_key_name.replace('\'', '');
    // TODO: Assemble JavaScript into code variable.
    var code = `${value_obj_name}.${value_key_name} = ${value_val_name};\n`;
    return code;
  };