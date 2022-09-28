// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#3nm4yo

import * as Blockly from "blockly/core";

Blockly.Blocks['obj_has_key'] = {
    init: function() {
      this.appendValueInput("obj")
          .setCheck(null)
          .appendField("Object");
      this.appendValueInput("key")
          .setCheck(null)
          .appendField("has the key");
      this.appendDummyInput()
          .appendField("?");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['obj_has_key'] = function(block) {
    var value_obj = Blockly.JavaScript.valueToCode(block, 'obj', Blockly.JavaScript.ORDER_ATOMIC);
    var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_key} in ${value_obj}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };