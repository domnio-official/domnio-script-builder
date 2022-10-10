import * as Blockly from "blockly/core";
import { translate } from  "/src/locales";
import localforage from "localforage";

(async () => {


  const blockName = "eval";

  const blockData = {
    "type": "eval",
    "message0": `${String(translate("eval", await localforage.getItem("language")))} %1`,
    "args0": [
      {
        "type": "input_value",
        "name": "comd"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#982880",
    "tooltip": "",
    "helpUrl": ""
  }

  Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

  Blockly.JavaScript['eval'] = function(block) {
    var value_comd = Blockly.JavaScript.valueToCode(block, 'comd', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `eval(${value_comd});\n`;
    return code;
  };

  Blockly.Blocks['eval_left'] = {
    init: async function() {
      this.appendValueInput("comd")
          .setCheck(null)
          .appendField(String(translate("eval", await localforage.getItem("language"))));
      this.setOutput(true, null);
      this.setColour("#982880");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['eval_left'] = function(block) {
    var value_comd = Blockly.JavaScript.valueToCode(block, 'comd', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `eval(${value_comd})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

})();