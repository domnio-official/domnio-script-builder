// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pyh8n8

import * as Blockly from "blockly/core";

Blockly.Blocks['avdanced_http_request'] = {
    init: function() {
      this.appendValueInput("url")
          .setCheck(null)
          .appendField("Make an advanced HTTP request to URL");
      this.appendDummyInput()
          .appendField("With method")
          .appendField(new Blockly.FieldDropdown([["GET","get"], ["POST","post"], ["PUT","put"], ["PATCH","patch"], ["DELETE","delete"], ["HEAD","head"], ["OPTIONS","options"]]), "method");
      this.appendDummyInput()
          .appendField("Set Response type to")
          .appendField(new Blockly.FieldDropdown([["JSON","json"], ["Array Buffer","arraybuffer"], ["Document","document"], ["Text","text"], ["Stream (Downloadable response)","stream"]]), "resptype");
      this.appendValueInput("timeout")
          .setCheck("Number")
          .appendField("Set timeout to (0 = ∞)");
      this.appendValueInput("variable")
          .setCheck(null)
          .appendField("Save response into variable");
      this.appendValueInput("headers")
          .setCheck(null)
          .appendField("With headers");
      this.appendStatementInput("data_sections")
          .setCheck(null)
          .appendField("Data sections");
      this.appendStatementInput("then")
          .setCheck(null)
          .appendField("Then");
      this.appendStatementInput("error")
          .setCheck(null)
          .appendField("On error");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("https://axios-http.com/docs/req_config");
    }
  };

  Blockly.JavaScript['avdanced_http_request'] = function(block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_method = block.getFieldValue('method');
    var dropdown_resptype = block.getFieldValue('resptype');
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    var value_headers = Blockly.JavaScript.valueToCode(block, 'headers', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_data_sections = Blockly.JavaScript.statementToCode(block, 'data_sections');
    var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
    var statements_error = Blockly.JavaScript.statementToCode(block, 'error');
    var value_timeout = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `axios({
        url: ${value_url},
        method: '${dropdown_method}',
        responseType: '${dropdown_resptype}',
        timeout: ${value_timeout},
        headers: ${value_headers},
${statements_data_sections}
    })\n.then(async (${value_variable}) => {\n${statements_then}})\n.catch(async (err) => {\n${statements_error}});`;
    return code;
  };