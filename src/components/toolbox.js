function list(){
    var toolbox_content = `<xml>
    <category name="Logic" colour="%{BKY_LOGIC_HUE}">
    <block type="controls_if" />
    <block type="logic_compare">
        <field name="OP">EQ</field>
    </block>
    <block type="logic_operation">
        <field name="OP">AND</field>
    </block>
    <block type="logic_negate" />
    <block type="logic_boolean">
        <field name="BOOL">TRUE</field>
    </block>
    <block type="logic_null" />
    <block type="logic_ternary" />
    </category>
    <category name="Loops" colour="%{BKY_LOOPS_HUE}">
    <block type="controls_repeat_ext">
    <value name="TIMES">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="controls_whileUntil">
    <field name="MODE">WHILE</field>
</block>
<block type="controls_for">
    <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
    <value name="FROM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="BY">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
<block type="controls_forEach">
    <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
</block>
<block type="controls_flow_statements">
    <field name="FLOW">BREAK</field>
</block>
    </category>
    <category name="Math" colour="%{BKY_MATH_HUE}">
    <block type="math_number">
    <field name="NUM">0</field>
</block>
<block type="math_arithmetic">
    <field name="OP">ADD</field>
    <value name="A">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="B">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
<block type="math_single">
    <field name="OP">ROOT</field>
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">9</field>
        </shadow>
    </value>
</block>
<block type="math_trig">
    <field name="OP">SIN</field>
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">45</field>
        </shadow>
    </value>
</block>
<block type="math_constant">
    <field name="CONSTANT">PI</field>
</block>
<block type="math_number_property">
    <mutation divisor_input="false" />
    <field name="PROPERTY">EVEN</field>
    <value name="NUMBER_TO_CHECK">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="convert_to_number"/>
<block type="math_round">
    <field name="OP">ROUND</field>
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">3.1</field>
        </shadow>
    </value>
</block>
<block type="math_on_list">
    <mutation op="SUM" />
    <field name="OP">SUM</field>
</block>
<block type="math_modulo">
    <value name="DIVIDEND">
        <shadow type="math_number">
            <field name="NUM">64</field>
        </shadow>
    </value>
    <value name="DIVISOR">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="math_constrain">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="LOW">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="HIGH">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block type="math_random_int">
    <value name="FROM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block type="math_random_float" />
    </category>
    <category name="Text" colour="#5ba58c">
    <block type="text">
    <field name="TEXT" />
</block>
<block type="convert_to_string"></block>
<block type="text_join">
    <mutation items="2" />
</block>
<block type="replace">
<value name="TEXT">
    <shadow type="text">
        <field name="TEXT">abc</field>
    </shadow>
</value>
<value name="REPLACE">
    <shadow type="text">
        <field name="TEXT">a</field>
    </shadow>
</value>
<value name="WITH">
    <shadow type="text">
        <field name="TEXT">b</field>
    </shadow>
</value>                
</block>
<block type="newline"></block>
<block type="includes">
<value name="TEXT">
    <shadow type="text">
        <field name="TEXT">Domnio</field>
    </shadow>
</value>
<value name="INCLUDES">
    <shadow type="text">
        <field name="TEXT">Dom</field>
    </shadow>
</value>
</block>
<block type="starts_with">
<value name="STRING">
    <shadow type="text">
        <field name="TEXT">domnio</field>
    </shadow>
</value>
<value name="SUBSTRING">
    <shadow type="text">
        <field name="TEXT">d</field>
    </shadow>
</value>
</block>
<block type="ends_with">
<value name="STRING">
    <shadow type="text">
        <field name="TEXT">domnio</field>
    </shadow>
</value>
<value name="SUBSTRING">
    <shadow type="text">
        <field name="TEXT">o</field>
    </shadow>
</value>
</block>
<block type="text_append">
    <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT" />
        </shadow>
    </value>
</block>
<block type="text_length">
    <value name="VALUE">
        <shadow type="text">
            <field name="TEXT">abc</field>
        </shadow>
    </value>
</block>
<block type="text_isEmpty">
    <value name="VALUE">
        <shadow type="text">
            <field name="TEXT" />
        </shadow>
    </value>
</block>
<block type="text_indexOf">
    <field name="END">FIRST</field>
    <value name="VALUE">
        <block type="variables_get">
            <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
        </block>
    </value>
    <value name="FIND">
        <shadow type="text">
            <field name="TEXT">abc</field>
        </shadow>
    </value>
</block>
<block type="text_charAt">
    <mutation at="true" />
    <field name="WHERE">FROM_START</field>
    <value name="VALUE">
        <block type="variables_get">
            <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
        </block>
    </value>
</block>
<block type="text_getSubstring">
    <mutation at1="true" at2="true" />
    <field name="WHERE1">FROM_START</field>
    <field name="WHERE2">FROM_START</field>
    <value name="STRING">
        <block type="variables_get">
            <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
        </block>
    </value>
</block>
<block type="text_changeCase">
    <field name="CASE">UPPERCASE</field>
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">abc</field>
        </shadow>
    </value>
</block>
<block type="text_trim">
    <field name="MODE">BOTH</field>
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">abc</field>
        </shadow>
    </value>
</block>
<block type="text_count"></block>
</category>
<category name="Lists" colour="#745ba5">
<block type="lists_create_with">
    <mutation items="0" />
</block>
<block type="lists_create_with">
    <mutation items="3" />
</block>
<block type="lists_repeat">
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
    </value>
</block>
<block type="lists_length" />
<block type="lists_isEmpty" />
<block type="list_contains">
<value name="list">
<block type="variables_get">
    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
</block>
</value>
<value name="contains">
<shadow type="text">
    <field name="TEXT">domnio</field>
</shadow>
</value>
</block>
<block type="lists_indexOf">
    <field name="END">FIRST</field>
    <value name="VALUE">
        <block type="variables_get">
            <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
        </block>
    </value>
</block>
<block type="lists_getIndex">
    <mutation statement="false" at="true" />
    <field name="MODE">GET</field>
    <field name="WHERE">FROM_START</field>
    <value name="VALUE">
        <block type="variables_get">
            <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
        </block>
    </value>
</block>
<block type="lists_setIndex">
    <mutation at="true" />
    <field name="MODE">SET</field>
    <field name="WHERE">FROM_START</field>
    <value name="LIST">
        <block type="variables_get">
            <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
        </block>
    </value>
</block>
<block type="list_push">
<value name="LIST">
<block type="variables_get">
    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
</block>
</value>
</block>
<block type="lists_getSublist">
    <mutation at1="true" at2="true" />
    <field name="WHERE1">FROM_START</field>
    <field name="WHERE2">FROM_START</field>
    <value name="LIST">
        <block type="variables_get">
            <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
        </block>
    </value>
</block>
<block type="lists_split">
    <mutation mode="SPLIT" />
    <field name="MODE">SPLIT</field>
    <value name="DELIM">
        <shadow type="text">
            <field name="TEXT">,</field>
        </shadow>
    </value>
</block>
<block type="lists_sort">
    <field name="TYPE">NUMERIC</field>
    <field name="DIRECTION">1</field>
</block>
</category>
<category name="Colors" colour="#a5745b">
<block type="colour_picker">
    <field name="COLOUR">#ff0000</field>
</block>
<block type="colour_random" />
<block type="colour_rgb">
    <value name="RED">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
    <value name="GREEN">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="BLUE">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="colour_blend">
    <value name="COLOUR1">
        <shadow type="colour_picker">
            <field name="COLOUR">#ff0000</field>
        </shadow>
    </value>
    <value name="COLOUR2">
        <shadow type="colour_picker">
            <field name="COLOUR">#3333ff</field>
        </shadow>
    </value>
    <value name="RATIO">
        <shadow type="math_number">
            <field name="NUM">0.5</field>
        </shadow>
    </value>
</block>
    </category>
    <sep />
    <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}" />
    <category name="Functions" colour="#995ba5" custom="PROCEDURE" />
    <category name="Objects" colour="#5D3FD3">
    <label text="------ Create an object ------"></label>
        <block type="empty_obj"/>
    <label text="⚠️ NOTE: Only use these 2 blocks together!"></label>
        <block type="create_object_left"/>
        <block type="add_keys">
        <value name="KEY">
            <shadow type="text">
                <field name="TEXT">objKey</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="text">
                <field name="TEXT">Hello World!</field>
            </shadow>
        </value>
        </block>
        <label text="------------ KEYS ------------"/>
        <block type="get_obj_key">
        <value name="key_name">
            <shadow type="text">
                <field name="TEXT">objKey</field>
            </shadow>
        </value>
        <value name="obj_name">
            <block type="variables_get">
                <field name="VAR">object</field>
            </block>
        </value>
        </block>
        <block type="add_key_to_obj">
        <value name="key_name">
            <shadow type="text">
                <field name="TEXT">objKey</field>
            </shadow>
        </value>
        <value name="val_name">
            <shadow type="text">
                <field name="TEXT">Hello world!</field>
            </shadow>
        </value>
        <value name="obj_name">
            <block type="variables_get">
                <field name="VAR">object</field>
            </block>
        </value>
        </block>
        <block type="obj_has_key">
            <value name="obj">
                <block type="variables_get">
                    <field name="VAR">object</field>
                </block>
            </value>
            <value name="key">
            <shadow type="text">
                <field name="TEXT">objKey</field>
            </shadow>
            </value>
        </block>
        <block type="remove_key_f_obj">
        <value name="key">
        <shadow type="text">
            <field name="TEXT">objKey</field>
        </shadow>
        </value>
        <value name="obj_name">
            <block type="variables_get">
                <field name="VAR">object</field>
            </block>
        </value>
        </block>
        <block type="get_all_keys">
        <value name="obj_name">
            <block type="variables_get">
                <field name="VAR">object</field>
            </block>
        </value>
        </block>
        <label text="------------ JSON ------------"/>
        <block type="json_to_obj">
        <value name="text">
        <shadow type="text">
            <field name="TEXT">{"objKey": "Hello world"}</field>
        </shadow>
        </value>
        </block>
        <block type="obj_to_json_str">
        <value name="obj_value">
            <block type="variables_get">
                <field name="VAR">object</field>
            </block>
        </value>
        </block>
    </category>
  <category name="Other" colour="#a300a3">
  <block type="delay">
  <field name="type_time">seconds</field>
  <value name="time">
    <block type="math_number" id="z:(0k8Nwa?ca8{C0fXrY">
      <field name="NUM">5</field>
    </block>
  </value>
</block>
<block type="inject_code"/>
<block type="require_block"/>
<block type="run_console_cmd"/>
<block type="eval"/>
<block type="eval_left"/>
<block type="typeof"/>
<!-- <block type="typeof_result"/> -->
<block type="easy_typeof"/>
<block type="return_no_value"/>
<block type="try_catch">
<statement name="catch">
  <block type="console_log">
    <value name="text">
      <shadow type="text">
        <field name="TEXT">Hello World!</field>
      </shadow>
      <block type="error"></block>
    </value>
  </block>
</statement>
</block>
<block type="throw"/>
<block type="error"/>
  </category>
    <sep />
    <category name="Console" colour="#7f6065">
    <label text='Console Blocks' />
    <block type="console_log">
    <value name="text">
    <shadow type="text">
        <field name="TEXT">Hello World!</field>
    </shadow>
</value>
  </block>
  <block type="console_clear"></block>
  <label text='Asks an input to the console and saves the result in the "value" block' />
  <block type="pick_input">
  <value name="ask input">
    <block type="text">
      <field name="TEXT">Hello!</field>
    </block>
  </value>
  <value name="save input">
    <block type="variables_get">
      <field name="VAR">reply</field>
    </block>
  </value>
</block>
  <block type="ask_input_left"></block>
    </category>
    <sep />
    <category name="Database" colour="#C70039">
        <category name="JSON" colour="#50C878">
        <label text='Database Blocks' />
        <block type="new_database">
        <value name="NAME">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        <value name="PATH">
            <shadow type="text">
                <field name="TEXT">database</field>
            </shadow>
        </value>
        </block>
        <block type="db_set_data">
        <value name="key">
            <shadow type="text">
                <field name="TEXT">myKey</field>
            </shadow>
        </value>
        <value name="value">
            <shadow type="text">
                <field name="TEXT">Helo</field>
            </shadow>
        </value>
        <value name="db">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        </block>
        <block type="db_delete">
        <value name="key">
            <shadow type="text">
                <field name="TEXT">myKey</field>
            </shadow>
        </value>
        <value name="db">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        <value name="db">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        </block>
        <block type="get_data">
        <value name="key">
            <shadow type="text">
                <field name="TEXT">myKey</field>
            </shadow>
        </value>
        <value name="db">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        </block>
        <block type="db_has_key">
        <value name="key">
            <shadow type="text">
                <field name="TEXT">myKey</field>
            </shadow>
        </value>
        <value name="db">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        </block>
        <!-- <block type="db_delete">
        <value name="key">
            <shadow type="text">
                <field name="TEXT">myKey</field>
            </shadow>
        </value>
        <value name="db">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        </block>
        <block type="replace_db">
        <value name="db">
            <shadow type="text">
                <field name="TEXT">myDB</field>
            </shadow>
        </value>
        </block> -->
        </category>
    </category>
    <sep />
    <category name="Web Requests" colour="#765a9a">
        <category name="Simple Requests" colour="#9160cf">
        <label text="GET Request"></label>
        <block type="axios_get_simple">
        <value name="variable">
        <block type="variables_get">
          <field name="VAR">response</field>
        </block>
      </value>
            <statement name="error">
            <block type="console_log">
            <value name="text">
                <shadow type="text">
                <field name="TEXT">Hello World!</field>
                </shadow>
                <block type="error"></block>
                </value>
            </block>
            </statement>
        </block>
        <label text="POST Request"></label>
        <block type="axios_post_simple">
        <value name="variable">
        <block type="variables_get">
          <field name="VAR">response</field>
        </block>
      </value>
            <statement name="error">
            <block type="console_log">
            <value name="text">
                <shadow type="text">
                <field name="TEXT">Hello World!</field>
                </shadow>
                <block type="error"></block>
                </value>
            </block>
            </statement>
        </block>
        </category>
        <category name="Advanced Requests" colour="#9160cf">
        <label text="GET Request"></label>
        <block type="avdanced_http_request">
        <field name="method">get</field>
        <field name="resptype">json</field>
        <value name="url">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
        <value name="timeout">
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
        <value name="variable">
          <block type="variables_get">
            <field name="VAR">response</field>
          </block>
        </value>
        <value name="headers">
          <shadow type="empty_obj"></shadow>
        </value>
        <statement name="error">
          <block type="console_log">
            <value name="text">
              <shadow type="text">
                <field name="TEXT">Hello World!</field>
              </shadow>
              <block type="error"></block>
            </value>
          </block>
        </statement>
      </block>
      <block type="http_stream_save">
      <value name="variable">
        <block type="variables_get">
          <field name="VAR">response</field>
        </block>
      </value>
      <value name="filename">
        <shadow type="text">
          <field name="TEXT">domnio.png</field>
        </shadow>
      </value>
    </block>
            <block type="add_data_section" />
        </category>
    </category>
    <sep/>
    <category name="Files" colour="#a3971e">
    <label text='Variables'/>
    <block type="filesys_variable_cdir"/>
    <label text="Manage file"/>
    <block type="filesys_write">
    <value name="name">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    <value name="data">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
    </block>
    <block type="filesys_rename">
    <value name="old_name">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    <value name="new_name">
        <shadow type="text">
            <field name="TEXT">heloo.txt</field>
        </shadow>
    </value>
    </block>
    <block type="filesys_move">
    <value name="from_path">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    <value name="to_path">
        <shadow type="text">
            <field name="TEXT">domnio</field>
        </shadow>
    </value>
    </block>
    <block type="filesys_copy">
    <value name="from_path">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    <value name="to_path">
        <shadow type="text">
            <field name="TEXT">domnio</field>
        </shadow>
    </value>
    </block>
    <block type="filesys_delete">
    <value name="file">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    </block>
    <label text='Read a file | (use the "Convert To String" block if needed)'/>
    <block type="filesys_read">
    <value name="path">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    </block>
    <block type="convert_to_string">
    <value name="value">
    <block type="filesys_read">
    <value name="path">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    </block>
    </value>
    </block>
    <label text='Advanced (optional)'/>
    <block type="filesys_perms">
    <value name="file">
        <shadow type="text">
            <field name="TEXT">hello.txt</field>
        </shadow>
    </value>
    </block>
    <block type="filesys_link">
    <value name="from_path">
        <shadow type="text">
            <field name="TEXT">../hello.txt</field>
        </shadow>
    </value>
    <value name="to_path">
        <shadow type="text">
            <field name="TEXT">domnio</field>
        </shadow>
    </value>
    <value name="name">
        <shadow type="text">
            <field name="TEXT">hello</field>
        </shadow>
    </value>
    </block>
    </category>
    <category name="Watch" colour="#a0a45c">
    <label text="Watch a file or a directory"/>
        <block type="dir_watch">
            <value name="file">
                <shadow type="text">
                    <field name="TEXT">hello.txt</field>
                </shadow>
            </value>
        </block>
    <label text="Variables"/>
        <block type="filesys_variable_cdir"/>
        <block type="filesys_event"/>
        <block type="filesys_fname"/>
    </category>
    <sep />
    <category name="Website" colour="#6F8FAF">
        <block type="express_createsrv">
            <value name="port">
                <block type="math_number">
                    <field name="NUM">8080</field>
                </block>
            </value>
        </block>
    </category>
  </xml>`.replace(/{{\s([A-z]{3,})\s}}/g);

  return toolbox_content;
}

export {list}