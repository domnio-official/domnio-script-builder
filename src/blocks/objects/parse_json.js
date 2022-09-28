// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5r3ojx

import * as Blockly from "blockly/core";

Blockly.Blocks['json_to_obj'] = {
    init: function() {
      this.appendValueInput("text")
          .setCheck(null)
          .appendField("Parse JSON string");
      this.appendDummyInput()
          .appendField("into object");
      this.setOutput(true, "object");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['json_to_obj'] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `JSON.parse(${value_text})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };