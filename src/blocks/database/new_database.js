// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#zokxy2

import * as Blockly from "blockly/core";


Blockly.Blocks['new_database'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Create a new database with name");
      this.appendValueInput("PATH")
          .setCheck(null)
          .appendField("And path");
      this.appendDummyInput()
          .appendField(".json");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['new_database'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_path = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ATOMIC);
    value_name = value_name.slice(0, -1);
    value_name = value_name.replace('\'', '');
    value_path = value_path.slice(0, -1);
    if (!((value_path).endsWith('.json'))) {
        value_path = String(value_path).concat(".json'");
    }
    var code = `const ${value_name} = new JSONdb(${value_path});\n`;
    return code;
  };