// Block Url: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#yfwe6v

import * as Blockly from "blockly/core";

Blockly.Blocks['get_all_keys'] = {
    init: function() {
      this.appendValueInput("obj_name")
          .setCheck(null)
          .appendField("Get all keys as list in object");
      this.setOutput(true, "Array");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['get_all_keys'] = function(block) {
    var value_obj_name = Blockly.JavaScript.valueToCode(block, 'obj_name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `Object.keys(${value_obj_name})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };