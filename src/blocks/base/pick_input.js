// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mzpu56

import * as Blockly from "blockly/core";


Blockly.Blocks['ask_input'] = {
    init: function() {
      this.appendValueInput("ask input")
          .setCheck("String")
          .appendField("Ask an input to the console with question");
      this.appendValueInput("save input")
          .setCheck(null)
          .appendField("and save value into variable");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(165);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['ask_input'] = function(block) {
    var value_ask_input = Blockly.JavaScript.valueToCode(block, 'ask input', Blockly.JavaScript.ORDER_ATOMIC);
    var value_save_input = Blockly.JavaScript.valueToCode(block, 'save input', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_save_input} = prompt(${value_ask_input});\n`;
    return code;
  };



  // Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#e2at2v

  Blockly.Blocks['ask_input_left'] = {
    init: function() {
      this.appendValueInput("ask input")
          .setCheck("String")
          .appendField("Ask an input to the console with question");
      this.setOutput(true, null);
      this.setColour(165);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['ask_input_left'] = function(block) {
    var value_ask_input = Blockly.JavaScript.valueToCode(block, 'ask input', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `prompt(${value_ask_input})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };