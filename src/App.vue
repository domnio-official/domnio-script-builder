<script setup>
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Main Vue component that includes the Blockly component.
 * @author dcoodien@google.com (Dylan Coodien)
 */

import { ref } from "vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import './components/importBlocks';
import Theme from '@blockly/theme-dark';
import Swal from "sweetalert2";
import JSZip from "jszip";
import * as toolbox from './components/toolbox';
import beautify from "js-beautify";
import localforage from "localforage";
import Blockly from "blockly";
import BlocklyJS from "blockly/javascript";

const foo = ref();
const code = ref();
const options = {
  media: "./media/",
  grid: {
    spacing: 25,
    length: 3,
    colour: "#ccc",
    snap: true,
  },
  zoom:{
  controls: true,
  wheel: false,
  startScale: 1.0,
  maxScale: 3,
  minScale: 0.3,
  scaleSpeed: 1.2,
  pinch: true
},
move: {
  scrollbars: {
    horizontal: true,
    vertical: true
  },
  drag: true,
  wheel: true
},
  trashcan: true,
  renderer: "zelos",
  theme: Theme,
  toolbox: toolbox.list()
};

const showCode = () => (code.value = BlocklyJS.workspaceToCode(foo.value.workspace));

function copy() {
  var copyText = document.getElementById("codeee").innerText;
    navigator.clipboard.writeText(copyText)
}

function credits() {
  Swal.fire({
    title: "Credits",
    icon: 'info',
    html: "Leader: Farfa<br>Developer: Farfa<br><br>Domnio Script Builder is based on <a href=\"https://developers.google.com/blockly\" target=\"_blank\">Google's Blockly</a>",
    confirmButtonText: "OK 👍"
  });
}

function saveas() {
      const zip = new JSZip();
      const xmlContent = Blockly.Xml.domToPrettyText(
        Blockly.Xml.workspaceToDom(foo.value.workspace)
      );
      const fileName = `projct.domscript`;
      zip.file("blocks.xml", xmlContent);
      zip.generateAsync({
          type: "blob",
        })
        .then((blob) => {
          const a = document.createElement("a");
          a.style = "display: none";
          document.body.appendChild(a);
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          // changesAreUnsaved = false
          // workspaceContent = xmlContent
        });
      }
</script>

<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(22, 23, 25);">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://domnio.tk">
      <img src="./assets/logo.png" alt="Logo" width="30" draggable="false" class="d-inline-block align-text-top">
      <b> Domnio Script Maker</b>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button type="button" style="margin-top: 5px;" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#codeModal" v-on:click="showCode()">Export to Javascript</button>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="https://dsc.gg/domnio" target="_blank" style="margin-top: 5px;">Discord server</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" style="margin-top: 5px;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            File
          </a>
          <ul class="dropdown-menu bg-white">
            <li><a class="dropdown-item" href="#" v-on:click="saveas()">Save</a></li>
            <li><a class="dropdown-item" href="#" v-on:click="this.load()">Load</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" v-on:click="credits()">Credits</a></li>
          </ul>
        </li>
        <div id="AD">
        <a href="https://domnio.tk/#team" target="_blank"><img src="./assets/defaultBanner.png" height="50" draggable="false" class="d-inline-block align-text-top"></a>
        </div>
      </ul>
      </div>
  </div>
</nav>
<div class="modal fade modal-xl modal-dialog-scrollable" id="codeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-white" id="exampleModalLabel">Code</h5>
        <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg-dark">
        <pre v-html="code" class="text-white" id="codeee"></pre>
      </div>
      <div class="modal-footer bg-dark">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="copy()" data-bs-dismiss="modal" id="liveToastBtn">Copy</button>
      </div>
    </div>
  </div>
</div>
    <BlocklyComponent id="workspace" :options="options" ref="foo"></BlocklyComponent>
    <p id="code">
    </p>
  </div>
</template>

<style>

@font-face {
  font-family: "Ubuntu";
  src: url(./fonts/Ubuntu.ttf);
}

a {
  font-family: "Ubuntu", sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

#app {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: black;
}

#workspace {
  position: absolute;
    width: 100%;
    height: calc(100% - 70px);
}

#AD {
  margin-left: 100px;
}


@media only screen and (max-device-width: 992px) {
  #AD {
  margin-left: 0px;
}
}

/* .navbar-expand-lg {
  border: 5px solid #FFFF00;
  padding: 50px 0;
} */
</style>
