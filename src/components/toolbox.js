function list(){
    var toolbox_content = `<xml>
    <category name="Logic" colour="%{BKY_LOGIC_HUE}">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
    </category>
    <category name="Loops" colour="%{BKY_LOOPS_HUE}">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
    </category>
    <category name="Math" colour="%{BKY_MATH_HUE}">
      <block type="math_number">
        <field name="NUM">123</field>
      </block>
      <block type="math_arithmetic"></block>
      <block type="math_single"></block>
    </category>
    <category name="Text" colour="%{BKY_TEXTS_HUE}">
      <block type="text"></block>
      <block type="text_length"></block>
    </category>
    <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
    </category>
    <sep />
  <category name="Other" colour="#a300a3">
  <block type="delay" id="pTlBRAT#Pj_#5he!oYB=">
  <field name="type_time">seconds</field>
  <value name="time">
    <block type="math_number" id="z:(0k8Nwa?ca8{C0fXrY">
      <field name="NUM">5</field>
    </block>
  </value>
</block>
  </category>
    <sep />
    <category name="Base" colour="#7f6065">
    <block type="console_log" id="\`*0]s27uH,H;]FGmu(%O">
    <value name="text">
      <block type="text" id="L8cJ^z2UIK(V1~dnT4CW">
        <field name="TEXT">hello world</field>
      </block>
    </value>
  </block>
  <block type="console_clear"></block>
    </category>
  </xml>`.replace(/{{\s([A-z]{3,})\s}}/g);

  return toolbox_content;
}

export {list}