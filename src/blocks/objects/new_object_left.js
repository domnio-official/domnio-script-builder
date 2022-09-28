// URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j4x2im

import * as Blockly from "blockly/core";

Blockly.Blocks['create_object_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create a new object");
      this.appendStatementInput("object_keys")
          .setCheck("add_keys");
      this.setOutput(true, "object");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['create_object_left'] = function(block) {
    var statements_object_keys = Blockly.JavaScript.statementToCode(block, 'object_keys');
    // TODO: Assemble JavaScript into code variable.
    var code = `{
${statements_object_keys}}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };