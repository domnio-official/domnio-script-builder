// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#eunpzh

import * as Blockly from "blockly/core";

Blockly.Blocks['axios_get_simple'] = {
    init: function() {
      this.appendValueInput("url")
          .setCheck(null)
          .appendField("Make a simple http GET request to URL");
      this.appendValueInput("variable")
          .setCheck(null)
          .appendField("and save response into the variable");
      this.appendStatementInput("then")
          .setCheck(null)
          .appendField("Then");
      this.appendStatementInput("error")
          .setCheck(null)
          .appendField("On error");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['axios_get_simple'] = function(block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    var statements_error = Blockly.JavaScript.statementToCode(block, 'error');
    // TODO: Assemble JavaScript into code variable.
    var code = `axios.get(${value_url})
    .then(function (${value_variable}) {
        ${value_variable} = (${value_variable}.data);
        ${statements_then}}).catch(function (err) {
${statements_error}});
`;
    return code;
  };