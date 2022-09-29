// Block URL: import * as Blockly from "blockly/core";

import * as Blockly from "blockly/core";

Blockly.Blocks['easy_typeof'] = {
    init: function() {
      this.appendValueInput("input")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("is a")
          .appendField(new Blockly.FieldDropdown([["Number","number"], ["String / Text","string"], ["Boolean","boolean"], ["Undefined","undefined"]]), "result_typeof");
      this.setOutput(true, "Boolean");
      this.setColour("#982880");
   this.setTooltip("Given an input, it returns \"boolean\", \"string\", \"number\" or \"undefined\" based on the input type");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['easy_typeof'] = function(block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_result_typeof = block.getFieldValue('result_typeof');
    // TODO: Assemble JavaScript into code variable.
    var code = `typeof ${value_input} == '${dropdown_result_typeof}'`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };