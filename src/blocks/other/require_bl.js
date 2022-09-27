import * as Blockly from "blockly/core";

Blockly.Blocks['require_block'] = {
    init: function() {
      this.appendValueInput("path")
          .setCheck(null)
          .appendField("Run a javascript file");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#982880");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['require_block'] = function(block) {
    var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `require((String(${value_path}).startsWith("./") ? String(${value_path}) : "./" + String(${value_path})));\n`;
    return code;
  };