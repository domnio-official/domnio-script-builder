import * as Blockly from "blockly/core";

Blockly.Blocks['eval'] = {
    init: function() {
      this.appendValueInput("comd")
          .setCheck(null)
          .appendField("Eval");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#982880");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['eval'] = function(block) {
    var value_comd = Blockly.JavaScript.valueToCode(block, 'comd', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `eval(${value_comd});\n`;
    return code;
  };

  Blockly.Blocks['eval_left'] = {
    init: function() {
      this.appendValueInput("comd")
          .setCheck(null)
          .appendField("Eval");
      this.setOutput(true, null);
      this.setColour("#982880");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['eval_left'] = function(block) {
    var value_comd = Blockly.JavaScript.valueToCode(block, 'comd', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `eval(${value_comd})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };