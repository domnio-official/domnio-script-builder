import * as Blockly from "blockly/core";

Blockly.Blocks['http_stream_save'] = {
    init: function() {
      this.appendValueInput("variable")
          .setCheck(null)
          .appendField("From");
      this.appendValueInput("filename")
          .setCheck(null)
          .appendField("Save downloadable response as");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['http_stream_save'] = function(block) {
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `${value_variable}.data.pipe(fs.createWriteStream(String(${value_filename})));\n`;
    return code;
  };