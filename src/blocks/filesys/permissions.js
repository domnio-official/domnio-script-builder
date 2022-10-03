// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bqwjv7

import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_perms'] = {
    init: function() {
      this.appendValueInput("file")
          .setCheck(null)
          .appendField("To the file");
      this.appendDummyInput()
          .appendField("Set to the OWNER the permission to")
          .appendField(new Blockly.FieldDropdown([["Read, Write, Execute [7]","7"], ["Read, Write [6]","6"], ["Read, Execute [5]","5"], ["Read only [4]","4"], ["Write, Execute [3]","3"], ["Write only [2]","2"], ["Execute only [1]","1"], ["No permission [0]","0"]]), "perm_owner");
      this.appendDummyInput()
          .appendField("Set to the GROUP the permission to")
          .appendField(new Blockly.FieldDropdown([["Read, Write, Execute [7]","7"], ["Read, Write [6]","6"], ["Read, Execute [5]","5"], ["Read only [4]","4"], ["Write, Execute [3]","3"], ["Write only [2]","2"], ["Execute only [1]","1"], ["No permission [0]","0"]]), "perm_group");
      this.appendDummyInput()
          .appendField("Set to the OTHERS the permission to")
          .appendField(new Blockly.FieldDropdown([["Read, Write, Execute [7]","7"], ["Read, Write [6]","6"], ["Read, Execute [5]","5"], ["Read only [4]","4"], ["Write, Execute [3]","3"], ["Write only [2]","2"], ["Execute only [1]","1"], ["No permission [0]","0"]]), "perm_other");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(50);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['filesys_perms'] = function(block) {
    var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_perm_owner = block.getFieldValue('perm_owner');
    var dropdown_perm_group = block.getFieldValue('perm_group');
    var dropdown_perm_other = block.getFieldValue('perm_other');
    // TODO: Assemble JavaScript into code variable.
    var code = `await fss.chmod(${value_file}, 0${dropdown_perm_owner}${dropdown_perm_group}${dropdown_perm_other});\n`;
    return code;
  };