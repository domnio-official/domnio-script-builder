// Block URL: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5y4aib

import * as Blockly from "blockly/core";

Blockly.Blocks['filesys_copy'] = {
    init: function() {
      this.appendValueInput("from_path")
          .setCheck(null)
          .appendField("Copy file from");
      this.appendValueInput("to_path")
          .setCheck(null)
          .appendField("to");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['filesys_copy'] = function(block) {
    var value_from_path = Blockly.JavaScript.valueToCode(block, 'from_path', Blockly.JavaScript.ORDER_ATOMIC);
    var value_to_path = Blockly.JavaScript.valueToCode(block, 'to_path', Blockly.JavaScript.ORDER_ATOMIC);
    var back_value_from;
    if (value_to_path.startsWith("'") && value_from_path.startsWith("'")) {
        if (!value_to_path.includes('/')) {
            value_to_path = value_to_path.slice(0, -1);
            value_to_path = value_to_path.replace('\'', '');
            value_to_path = "'" + "./".concat(String(value_to_path)) + "'";
        }
    
        if (!value_to_path.endsWith(value_from_path)) {
            value_to_path = value_to_path.slice(0, -1);
            back_value_from = value_from_path;
            back_value_from = back_value_from.slice(0, -1);
            back_value_from = back_value_from.replace('\'', '');
            if (back_value_from.startsWith("./")) {
                back_value_from = back_value_from.replace('./', '');
            }
            if (back_value_from.startsWith("/")) {
                back_value_from = back_value_from.replace('/', '');
            }
    
            if (value_to_path.endsWith("/")) { // if value to path ends with a slash
                if (back_value_from.startsWith("/") || back_value_from.startsWith("./")) { // if value from path starts with a slash
                    back_value_from.replace('/', '');
                    back_value_from.replace('./', '');
                    value_to_path += back_value_from + "'";
                }
                else {
                    value_to_path += back_value_from + "'";
                }
    
                if (!value_to_path.startsWith("'./")) {
                    if (!value_to_path.startsWith("'/")) {
                        value_to_path = value_to_path.replace('\'', '');
                        value_to_path = "'./" + value_to_path;
                    }
                }
    
            }
            else { // if value to path does not end with a slash
                if (back_value_from.startsWith("/") || back_value_from.startsWith("./")) { // if value from path starts with a slash
                    back_value_from.replace('/', '');
                    back_value_from.replace('./', '');
                    value_to_path += "/" + back_value_from + "'";
                }
                else {
                    value_to_path += "/" + back_value_from + "'";
                }
            }
        }
    
    
        if (!value_from_path.includes('/')) {
            value_from_path = value_from_path.slice(0, -1);
            value_from_path = value_from_path.replace('\'', '');
            value_from_path = "'" + "./".concat(String(value_from_path)) + "'"
        }
    }
        var code = `await fss.copyFile(${value_from_path}, ${value_to_path});\n`;
        return code;
  };