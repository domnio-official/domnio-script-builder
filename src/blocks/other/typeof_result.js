// Block URL: 

import * as Blockly from "blockly/core";

Blockly.Blocks['typeof_result'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["Number","number"], ["String / Text","string"], ["Boolean","boolean"], ["Undefined","undefined"]]), "result_typeof");
      this.setOutput(true, null);
      this.setColour("#982880");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['typeof_result'] = function(block) {
    var dropdown_result_typeof = block.getFieldValue('result_typeof');
    var code = `'${dropdown_result_typeof}'`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };