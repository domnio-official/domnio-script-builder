<script>
    import { ref, onMounted } from "vue";
    import BlocklyComponent from "../BlocklyComponent.vue";
    import '/src/blocks/importBlocks';
    import Theme from '@blockly/theme-dark';
    import Swal from "sweetalert2";
    import JSZip from "jszip";
    import * as toolbox from '../toolbox';
    import * as functions from '../functions/simplefunctions';
    import * as autosave from '../autosave';
    import * as require from '../require/require';
    // import * as save from './components/save-load';
    import Blockly from "blockly";
    import BlocklyJS from "blockly/javascript";
    import * as app from "/src/App.vue";
</script>

<template>
<div id="all">
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(22, 23, 25);">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://domnio.tk">
        <img src="./assets/logo.png" alt="Logo" width="30" draggable="false" class="d-inline-block align-text-top">
        <b> Domnio Script Builder [BETA]</b>
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
              <li><a class="dropdown-item" v-on:click="app.saveas()">Save</a></li>
              <input hidden @change="load()" id="load-code" type="file" accept=".domscript,.zip,.xml"/>            
              <li><a class="dropdown-item" @click="askForFile">Load</a></li>
              <li><hr class="dropdown-divider"></li>
              <!--<li><a class="dropdown-item" @click="getAutoSave()">Load AutoSave</a></li> -->
              <li><a class="dropdown-item" @click="workspaceClear(true)">Clear Workspace</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" v-on:click="credits()">Credits</a></li>
            </ul>
          </li>
          <div id="AD">
          <a href="https://domnio.tk/#team" target="_blank"><img src="./assets/defaultBanner.png" height="50" draggable="false" class="d-inline-block align-text-top"></a>
          </div>
          <div id="controls">
              <img src="./assets/undo.png" title="Undo (Ctrl + Z)" v-on:click="undo()" height="30" draggable="false" class="d-inline-block align-text-top">
              <img src="./assets/redo.png" title="Redo (Ctrl + Y)" v-on:click="redo()" style="margin-left: 12px;" height="30" draggable="false" class="d-inline-block align-text-top">
          </div>
        </ul>
        </div>
    </div>
  </nav>
  <div class="modal fade modal-xl modal-dialog-scrollable" id="codeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
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
</div>
  </template>
  
  <style>
  
  @font-face {
    font-family: "Nunito";
    src: url(./fonts/Nunito.ttf);
  }
  
  @font-face {
    font-family: "Ubuntu";
    src: url(./fonts/Ubuntu.ttf);
  }
  
  a {
    font-family: "Nunito", "Ubuntu", sans-serif;
  }
  
  button[type=button] {
    font-family: "Nunito", "Ubuntu", sans-serif;
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

  #controls {
      margin-top: 9px;
      margin-left: 100px;
      display: flex;
      justify-content: space-between;
  }
  
  
  @media only screen and (max-device-width: 992px) {
    #AD {
    margin-left: 0px;
  }
  #controls {
      margin-top: 12px;
      margin-left: 0px;
      display: inline;
  }
  }
  
  /* .navbar-expand-lg {
    border: 5px solid #FFFF00;
    padding: 50px 0;
  } */
  </style>