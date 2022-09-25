import * as Blockly from "blockly/core";

Blockly.Blocks['delay'] = {
    init: function() {
      this.appendValueInput("time")
          .setCheck("Number")
          .appendField("Wait");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["Seconds","seconds"], ["Milliseconds","milliseconds"]]), "type_time");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['delay'] = function(block) {
    var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    var time_seconds = value_time * 1000;
    var dropdown_type_time = block.getFieldValue('type_time');
    var code;
    // TODO: Assemble JavaScript into code variable.
    if (dropdown_type_time == 'seconds') {
        code = `await delay(${time_seconds});\n`;
    }
    else {
        code = `await delay(${value_time});\n`;
    }
    return code;
  };