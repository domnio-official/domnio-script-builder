import * as Blockly from "blockly/core";

Blockly.Blocks['obj_to_json_str'] = {
    init: function() {
      this.appendValueInput("obj_value")
          .setCheck(null)
          .appendField("Convert object");
      this.appendDummyInput()
          .appendField("Into JSON string");
      this.setOutput(true, "String");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['obj_to_json_str'] = function(block) {
    var value_obj_value = Blockly.JavaScript.valueToCode(block, 'obj_value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `JSON.stringify(${value_obj_value})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };