// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#o7vshm

import * as Blockly from "blockly/core";

Blockly.Blocks['axios_post_simple'] = {
    init: function() {
      this.appendValueInput("url")
          .setCheck(null)
          .appendField("Make a simple http POST request to URL");
      this.appendValueInput("parameters")
          .setCheck(null)
          .appendField("with parameters (not obligatory)");
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

  Blockly.JavaScript['axios_post_simple'] = function(block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var value_parameters = Blockly.JavaScript.valueToCode(block, 'parameters', Blockly.JavaScript.ORDER_ATOMIC);
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    var statements_error = Blockly.JavaScript.statementToCode(block, 'error');
    var code;
    if (value_parameters == "") {
    code = `axios.post(${value_url}) 
    .then(function (${value_variable}) {
        ${value_variable} = (${value_variable}.data);
        ${statements_then}}).catch(function (err) {
${statements_error}});
`;
    }
    else {
        code = `axios.post(${value_url}, ${value_parameters}) 
        .then(function (${value_variable}) {
            ${value_variable} = (${value_variable}.data);
            ${statements_then}}).catch(function (err) {
    ${statements_error}});
    `;
    }
    return code;
  };