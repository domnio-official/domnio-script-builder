import * as Blockly from "blockly/core";

Blockly.Blocks['remove_key_f_obj'] = {
    init: function() {
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("Remove key");
      this.appendValueInput("obj_name")
          .setCheck(null)
          .appendField("from object");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['remove_key_f_obj'] = function(block) {
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var value_obj_name = Blockly.JavaScript.valueToCode(block, 'obj_name', Blockly.JavaScript.ORDER_ATOMIC);
    value_key = value_key.slice(0, -1);
    value_key = value_key.replace('\'', '');
    // TODO: Assemble JavaScript into code variable.
    var code = `delete ${value_obj_name}.${value_key}\n`;
    return code;
  };