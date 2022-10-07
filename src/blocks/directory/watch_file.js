import * as Blockly from "blockly/core";

Blockly.Blocks['dir_watch'] = {
    init: function() {
      this.appendValueInput("file")
          .setCheck(null)
          .appendField("Watch file");
      this.appendDummyInput()
          .appendField("On change detected");
      this.appendStatementInput("file_changed")
          .setCheck(null);
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(68);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['dir_watch'] = function(block) {
    var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_file_changed = Blockly.JavaScript.statementToCode(block, 'file_changed');
    var code = 
`fs.watch(${value_file}, (event, filename) => {
    ${statements_file_changed}
});
`;
    return code;
  };