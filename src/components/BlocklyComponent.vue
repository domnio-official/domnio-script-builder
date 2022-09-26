<script setup>
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Blockly Vue Component.
 * @author dcoodien@gmail.com (Dylan Coodien)
 */

import { onMounted, ref, shallowRef } from "vue";
import Blockly from "blockly";
import {Backpack} from '@blockly/workspace-backpack';
import Load from "./backpack-save-load.js";
// import * as It from 'blockly/msg/it';

const props = defineProps(["options"]);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();

defineExpose({ workspace });

onMounted(() => {
//  Blockly.setLocale(It);
  const options = props.options || {};
  if (!options.toolbox) {
    options.toolbox = blocklyToolbox.value;
  }

  /* Blockly.Events = function(event) {
    console.log(event.toString());
    if (event.type == "delete") {
      event.type.ids.forEach(element => {
        if(workspace-value.getBlockById(element.blockId) == 'start') {
          var parentBlock = workspace.value.newBlock('start');
          parentBlock.initSvg();
          parentBlock.render();
        }
      });
    }
  } */

  workspace.value = Blockly.inject(blocklyDiv.value, options);
  workspace.value.addChangeListener(Blockly.Events.disableOrphans);
  workspace.value.addChangeListener(checkOneStart);

  var parentBlock = workspace.value.newBlock('start');
  parentBlock.initSvg();
  parentBlock.render();

  workspace.value.addChangeListener(checkOneStart);

  setInterval(checkStart, 500);
  function checkStart() {
    if (!String(workspace.value.getAllBlocks()).includes(String('Start'))) {
      console.log("%cStart block has been removed, adding it again...", "color:red;")
      parentBlock = workspace.value.newBlock('start');
      parentBlock.initSvg();
      parentBlock.render();
      console.log("%cAdded Start Block", "color:green;")
    }
  }

function checkOneStart(event) {
  if (event.type == Blockly.Events.BLOCK_CREATE) {
    event.ids.forEach(element => {
    if ((String(workspace.value.getBlockById(element))).includes("Start ?")) {
      var starts = workspace.value.getAllBlocks();
      var strval = 0;
      starts.forEach(blockk => {
        if ((String(workspace.value.getBlockById(blockk.id))).includes("Start ?")) {
          strval = strval + 1;
        }
        if (strval > 1) {
          console.log("%cFrom Events.Block_Create:", "color:yellow");
          console.log("%cThere are 2 start blocks!", "color:red;");
          workspace.value.getBlockById(element).dispose(true);
          console.log("%cRemoved 1 start block", "color:green;");
        }
      });
    }
});
  }
  else if (event.type == Blockly.Events.MOVE) {
    if (String((workspace.value.getBlockById(event.blockId)).type) == "start") {
      var starts = workspace.value.getAllBlocks();
      var strval = 0;
      starts.forEach(blockk => {
        if (String((workspace.value.getBlockById(blockk.id)).type) == "start") {
          strval = strval + 1;
        }
        if (strval > 1) {
          console.log("%cFrom Events.Move:", "color:yellow");
          console.log("%cThere are 2 start blocks!", "color:red;");
          workspace.value.getBlockById(event.blockId).dispose(true);
          console.log("%cRemoved 1 start block", "color:green;");
        }
      });
    }
  }
}


  const backpackOptions = {
  allowEmptyBackpackOpen: false,
  useFilledBackpackImage: true,
  contextMenu: {
    emptyBackpack: true,
    removeFromBackpack: true,
    copyToBackpack: true,
  },
};
  const backpack = new Backpack(workspace.value, backpackOptions);
  backpack.init();
  Load(backpack);

  console.log("%cOh, un utente!", "color:blue; font-size:100px");
  console.log("%cASPETTA! NON CHIUDERE LA CONSOLE! Se utilizzi come codice \"\" ottieni 50 Domnio Coins! Mi raccomando però, non dirlo a nessuno!", "color:orange; font-size:50px");
});

</script>

<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv"></div>
    <xml ref="blocklyToolbox" style="display: none">
      <slot></slot>
    </xml>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
