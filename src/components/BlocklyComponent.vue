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

const props = defineProps(["options"]);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();

defineExpose({ workspace });

onMounted(() => {
  const options = props.options || {};
  if (!options.toolbox) {
    options.toolbox = blocklyToolbox.value;
  }
  workspace.value = Blockly.inject(blocklyDiv.value, options);

  const backpackOptions = {
  allowEmptyBackpackOpen: false,
  useFilledBackpackImage: true,
  contextMenu: {
    emptyBackpack: true,
    removeFromBackpack: true,
    copyToBackpack: false,
  },
};
  const backpack = new Backpack(workspace.value, backpackOptions);
  backpack.init();
  
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
