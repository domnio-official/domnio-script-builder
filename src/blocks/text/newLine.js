import Blockly from "blockly/core";

const blockName = "newline";

const blockData = {
    "message0": "new line",
    "output": "String",
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [ '\'\\n\'', Blockly.JavaScript.ORDER_ATOMIC ];
};