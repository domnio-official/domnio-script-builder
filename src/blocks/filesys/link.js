// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#dqpto6

import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_link'] = {
    init: function() {
      this.appendValueInput("from_path")
          .setCheck(null)
          .appendField("Create a link to target");
      this.appendValueInput("to_path")
          .setCheck(null)
          .appendField("at path");
      this.appendValueInput("name")
          .setCheck(null)
          .appendField("with name");
      this.appendDummyInput()
          .appendField("with type")
          .appendField(new Blockly.FieldDropdown([["File","file"], ["Folder","dir"], ["Junction","junction"]]), "type");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

    Blockly.JavaScript['filesys_link'] = function(block) {
        var value_from_path = Blockly.JavaScript.valueToCode(block, 'from_path', Blockly.JavaScript.ORDER_ATOMIC);
        var value_to_path = Blockly.JavaScript.valueToCode(block, 'to_path', Blockly.JavaScript.ORDER_ATOMIC);
        var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
        var dropdown_type = block.getFieldValue('type');
        // TODO: Assemble JavaScript into code variable.
        if (value_to_path.startsWith("'") && value_name.startsWith("'")) {
            value_to_path = value_to_path.slice(0, -1);
            value_name = value_name.replace('\'', '');
            var code = `await fss.symlink(${value_from_path}, ${value_to_path}/${value_name}, '${dropdown_type}');\n`;
        }
        else {
            var code = `await fss.symlink(${value_from_path}, ${value_to_path}/${value_name}, '${dropdown_type}');\n`;
        }
        return code;
      };