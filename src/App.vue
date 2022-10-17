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

    import { translate } from  "/src/locales";
    import { readme } from "/src/locales/simpleTexts.js"
    import localforage from "localforage";
    import { ref, onMounted } from "vue";
    import BlocklyComponent from "./components/BlocklyComponent.vue";
    import './blocks/importBlocks';
    import Theme from '@blockly/theme-dark';
    import Swal from "sweetalert2";
    import JSZip from "jszip";
    import * as toolbox from './components/toolbox';
    // import * as functions from './components/functions/simplefunctions';
    // import * as autosave from './components/autosave';
    import * as require from './components/require/require';
    // import * as save from './components/save-load';
    import Blockly from "blockly";
    import BlocklyJS from "blockly/javascript";
    var lang;

    var cModalState = 1;  // 1 = Javascript | 2 = package.json | 3 = ZIP

    function updateBtn(type) {
    if (type == 'js') {
      document.getElementById("modal-js-btn").setAttribute("class", "btn btn-primary");
      document.getElementById("modal-package-btn").setAttribute("class", "btn btn-outline-danger");
      document.getElementById("modal-zip-btn").setAttribute("class", "btn btn-outline-secondary");
      document.getElementById("packagetxt").style.display= "none";
      document.getElementById("codeee").style.display= "block";
      document.getElementById("packageDataa").style.display= "none";
      document.getElementById("down_zip").style.display= "none";
      document.getElementById("copyBtn").style.display= "block";
      cModalState = 1;
    }
    else if (type == 'package') {
      document.getElementById("modal-package-btn").setAttribute("class", "btn btn-danger");
      document.getElementById("modal-js-btn").setAttribute("class", "btn btn-outline-primary");
      document.getElementById("modal-zip-btn").setAttribute("class", "btn btn-outline-secondary");
      document.getElementById("packagetxt").style.display= "block";
      document.getElementById("packageDataa").style.display= "block";
      document.getElementById("codeee").style.display= "none";
      document.getElementById("down_zip").style.display= "none";
      document.getElementById("copyBtn").style.display= "block";
      cModalState = 2;
      generatePackage()
    }
    else if (type == 'zip') {
      document.getElementById("modal-zip-btn").setAttribute("class", "btn btn-secondary");
      document.getElementById("modal-js-btn").setAttribute("class", "btn btn-outline-primary");
      document.getElementById("modal-package-btn").setAttribute("class", "btn btn-outline-danger");
      document.getElementById("packagetxt").style.display= "none";
      document.getElementById("codeee").style.display= "none";
      document.getElementById("packageDataa").style.display= "none";
      document.getElementById("down_zip").style.display= "block";
      document.getElementById("copyBtn").style.display= "none";
      cModalState = 3;
    }
    else {
      throw "Unknown type '" + type + "' in updateBtn function"
    }
  }

    (async () => {


if (await localforage.getItem("language") == null || await localforage.getItem("language") == "") {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  await delay(1000);
    window.location.reload();
}
else {
  updateBtn('js')
  document.getElementById("devv").style.display = "none";
  if (!await localforage.getItem("autosave") == null || !await localforage.getItem("autosave") == "") {
    Swal.fire({
  title: 'Autosave',
  text: "There is an autosave available, do you want to restore it?",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#30a444',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Import autosave'
}).then((result) => {
  if (result.isConfirmed) {
    getAutoSave()
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 1300
    });
    
      Toast.fire({
        icon: 'success',
        title: 'Autosave imported'
      })
  }
})
  }
  document.getElementById("package_description").value = "A super duper fantastic script!"
  document.getElementById("package_name").value = "Awesome script"
  document.getElementById("package_version").value = "1.0.0"

  await localforage.getItem("language").then(function (lang) {
    if(String(lang) == "it") {
      lang = "it";
  }
  else {
    lang = "en"
  }
      document.getElementById('js_export_btn').textContent = String(translate("export_btn", lang));
      document.getElementById('ds').textContent = String(translate("ds", lang));
      document.getElementById('settings').textContent = String(translate("settings", lang));
      document.getElementById('save').innerHTML = String(translate("save", lang));
      document.getElementById('load').textContent = String(translate("load", lang));
      document.getElementById('l_autosave').textContent = String(translate("l_autosave", lang));
      document.getElementById('credits').textContent = String(translate("credits", lang));
      document.getElementById('liveToastBtn').textContent = String(translate("copy", lang));
      document.getElementById('close').textContent = String(translate("close", lang));
  })
  
}

if (!await localforage.getItem("autosave") == null) {
  foo.value.workspace.clear();
        await localforage.getItem("autosave").then(function(result) {
          Blockly.Xml.domToWorkspace(String(result), foo.value.workspace).then(console.log("Autosave has been imported"));
        });
}

})();
    const foo = ref();
    const code = ref();
    const packagejson = ref();
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

    onMounted(() => {
      
    });
    // document.getElementById("devv").style.display = "none";

    var keys = [];
    var isDev = false;

    document.addEventListener('keydown', key => {
      keys.push(String(key.key));
      if (isDev == false) {
        if (keys.includes("Control") && keys.includes("Shift") && keys.includes("Alt") && keys.includes("D") || keys.includes("d")) {
        keys = [];
        isDev = true;
        alert("Developer options activated");
        document.getElementById("devv").style.display = "block"; 
      }
      }
    });

    document.addEventListener('keyup', key => {
      keys.splice(keys.indexOf(key.key), 1);
      keys = [];
    });

    async function getAutoSave(){
      localforage.setItem("importing", true);
        foo.value.workspace.clear();
        await localforage.getItem("autosave").then(function(result) {
          result = Blockly.Xml.textToDom(result);
          workspaceClear();
          try {
            Blockly.Xml.domToWorkspace(result, foo.value.workspace);
            console.log("Autosave has been imported");
            localforage.setItem("importing", false);
          }
          catch (e) {
            localforage.setItem("importing", false);
            throw "Error while importing autosave: " + e.message;
          }
        });
        await localforage.getItem("other").then(function(values) {
          document.getElementById("package_author").value = String(values.package_author);
          document.getElementById("package_description").value = values.package_description;
          document.getElementById("package_name").value = values.package_name;
          document.getElementById("package_version").value = values.package_version;
        });
    }

    const showCode = () =>  { code.value = BlocklyJS.workspaceToCode(foo.value.workspace); code.value = "(async () => {\n" + require.getRequires(String(code.value)) + code.value + "})();\n\n// Made with the Domnio Script Builder | https://scriptbuild.domnio.tk" };
    
    function copy(type) {
      if (type == null) {
        if (cModalState == 1) {
        var copyText = document.getElementById("codeee").innerText;
        navigator.clipboard.writeText(copyText)
      }
      else if (cModalState == 2) {
        var copyText = document.getElementById("packagetxt").innerText;
        navigator.clipboard.writeText(copyText)
      }
      else {
        navigator.clipboard.writeText("Error")
      }
      }
      else {
        if (type == "workspace") {
          navigator.clipboard.writeText(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(foo.value.workspace)));
          alert("Done");
        }
      }
    }


    function generatePackage(save) {
      if (save == "return") {
      var p_author = document.getElementById("package_author").value;
      var p_name = document.getElementById("package_name").value;
      var p_version = document.getElementById("package_version").value;
      var p_description = document.getElementById("package_description").value;
      return String(require.getRequires(BlocklyJS.workspaceToCode(foo.value.workspace), true, p_name, p_version, p_description, p_author));
      }
      else {
      var p_author = document.getElementById("package_author").value;
      var p_name = document.getElementById("package_name").value;
      var p_version = document.getElementById("package_version").value;
      var p_description = document.getElementById("package_description").value;
      packagejson.value =  String(require.getRequires(BlocklyJS.workspaceToCode(foo.value.workspace), true, p_name, p_version, p_description, p_author));
      if (save == true) {
        localforage.setItem("other", {
        "package_name": p_name,
        "package_author": p_author,
        "package_description": p_description,
        "package_version": p_version
      });
      }
      }
    }

    function workspaceClear(displaywarn) {
        if (displaywarn == false || displaywarn == null) {
            foo.value.workspace.clear();
        }
        else {
            const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        html: "The workspace will be cleared. <strong>NOTE THAT YOU CAN'T UNDO THIS!</strong>",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            foo.value.workspace.clear();
            const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 1300
                      });
    
                      Toast.fire({
                        icon: 'success',
                        title: 'Workspace cleared'
                      })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {}
      })
}
    }


    
    function credits() {
      Swal.fire({
        title: "Credits",
        icon: 'info',
        html: "Leader: Farfa<br>Developer: Farfa<br><br>Domnio Script Builder is based on <a href=\"https://developers.google.com/blockly\" target=\"_blank\">Google's Blockly</a><br>© Copyright Domnio 2022",
        confirmButtonText: "OK 👍"
      });
    }
    function undo() {
        Blockly.mainWorkspace.undo(false);
        console.log("undo");
    }
    function redo() {
        Blockly.mainWorkspace.undo(true);
        console.log("redo");
    }

    function download() {
      var zip = new JSZip();
      zip.file("index.js", "(async () => {\n" + require.getRequires(String(BlocklyJS.workspaceToCode(foo.value.workspace))) + BlocklyJS.workspaceToCode(foo.value.workspace) + "})();\n\n// Made with the Domnio Script Builder | https://scriptbuild.domnio.tk");
      zip.file("package.json", generatePackage("return"));
      zip.file(".replit", 'run = "node index.js"');
      zip.file("README.txt", String(readme()));
      zip.generateAsync({type:"blob"}).then(function (content) {
      const a = document.createElement("a");
      a.style = "display: none";
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(content);
      a.href = url;
      a.download = "project.zip";
      a.click();
      });
    }
    
    
       function saveas() {
        const xmlContent = Blockly.Xml.domToPrettyText(
            Blockly.Xml.workspaceToDom(foo.value.workspace)
          );
          var config = {
            "code": String(xmlContent),
            "package_name": String(document.getElementById("package_name").value),
            "package_author": String(document.getElementById("package_author").value),
            "package_version": String(document.getElementById("package_version").value),
            "package_description": String(document.getElementById("package_description").value)
          }
          const zip = new JSZip();
          const fileName = `projct.domscript`;
          zip.file("config.json", new Blob([JSON.stringify(config, undefined, 2)]));
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
              (document.body.removeChild(a)).then(
              Swal.fire({
                        title: "Success!",
                        icon: 'success',
                        html: "File generated!",
                        timer: 2000,
                        timerProgressBar: true
                      }));
              // changesAreUnsaved = false
              // workspaceContent = xmlContent
            });
          };
    
          // ---------------- LOAD -----------------------
          function askForFile(){
                document.querySelector("#load-code").click();
            };
            function load(){
              Swal.fire({
                title: 'Are you sure?',
                text: "The entire workspace will be replaced with the imported Domnio Script!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, import the script!'
              }).then((result) => {
                if (result.isConfirmed) {
                    workspaceClear();
                const file = document.getElementById("load-code").files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    JSZip.loadAsync(e.target.result)
                        .then((data) => {
                        if (data.file("config.json")) {
                            return data.file("config.json").async("string")
                        }
                    })
                    .then((text) => {
                        var values = JSON.parse(text);
                        document.getElementById("package_author").value = String(values.package_author);
                        document.getElementById("package_description").value = values.package_description;
                        document.getElementById("package_name").value = values.package_name;
                        document.getElementById("package_version").value = values.package_version;
                        const xml = Blockly.Xml.textToDom(values.code);
                        Blockly.Xml.domToWorkspace(xml, foo.value.workspace);
                        reader.close();
                        Swal.fire({
                        title: "Success!",
                        icon: 'success',
                        html: "Project imported!",
                        confirmButtonText: "OK"
                      });
                    }).catch(() => {
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timerProgressBar: true,
                        timer: 1300
                      });
    
                      Toast.fire({
                        icon: 'success',
                        title: 'Project imported'
                      })
                    });
                };
                if (file) {
                    reader.readAsArrayBuffer(file);
                    document.getElementById("load-code").setAttribute("value", "");
                }
            }
    
              })
            }
      async function setLang(lang) {
        try {
        localforage.setItem("language", lang);
          Swal.fire({
            title: "Success!",
            icon: 'success',
            html: "<b>Reload the page to take effect!</b>",
            confirmButtonText: "Reload now",
            cancelButtonText: 'OK',
            showCancelButton: true
          }).then((result) => {
            if (result.isConfirmed) {
              const a = document.createElement("a");
              a.style = "display: none";
              document.body.appendChild(a);
              a.href = "";
              a.click();
            }
        });
      }
        catch (err) {
          Swal.fire({
            title: "Error!",
            icon: 'error',
            html: "Error: " + String(err),
            confirmButtonText: "OK"
          });
        }

      }
    </script>
    
    <template>
    
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
              <button type="button" style="margin-top: 5px;" class="btn btn-secondary" data-bs-toggle="modal" id="js_export_btn" data-bs-target="#codeModal" @click="updateBtn('js'); showCode();">Export</button>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="https://dsc.gg/domnio" id="ds" target="_blank" style="margin-top: 5px;">Discord server</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="" data-bs-toggle="offcanvas" id="settings" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style="margin-top: 5px;">Settings</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" style="margin-top: 5px;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                File
              </a>
              <ul class="dropdown-menu bg-white">
                <li><a class="dropdown-item" id="save" v-on:click="saveas()">Save</a></li>
                <input hidden @change="load()" id="load-code" type="file" accept=".domscript,.zip,.xml"/>            
                <li><a class="dropdown-item" id="load" @click="askForFile">Load</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" id="l_autosave" @click="getAutoSave()">Load AutoSave</a></li>
                <li><a class="dropdown-item" id="clr_workspace" @click="workspaceClear(true)">Clear Workspace</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" id="credits" v-on:click="credits()">Credits</a></li>
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
    <div class="modal fade modal-xl modal-dialog-scrollable text-dark" id="codeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <button type="button" v-on:click="updateBtn('js')" id="modal-js-btn" style="margin-right: 12px;" class="btn btn-outline-primary">Javascript</button>
            <button type="button" v-on:click="updateBtn('package')" id="modal-package-btn" style="margin-right: 12px;" class="btn btn-outline-danger">package.json</button>
            <button type="button" v-on:click="updateBtn('zip')" id="modal-zip-btn" class="btn btn-outline-secondary">ZIP</button>
            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body bg-dark"> <!-- INIZIO -->
            <div class="down_zip" id="down_zip">
            <p class="text-white">The ZIP file contains all the files needed to run the script.</p>
            <button type="button" id="btn_down_zip" class="btn btn-primary btn-lg" @click="download()">Download ZIP</button>
            </div>
            <pre v-html="code" class="text-white" id="codeee"></pre>
            <div class="packageData" id="packageDataa" style="margin-bottom: 12px;">
              <div class="row">
                <div class="col-sm">
                  <p class="text-white">Author</p>
                  <input type="text" class="form-control" id="package_author" placeholder="Author" @change="generatePackage(true)">
                </div>
                <div class="col-sm">
                  <p class="text-white">Name</p>
                  <input type="text" class="form-control" id="package_name" placeholder="Name" @change="generatePackage(true)">
                  </div>
                <div class="col-sm">
                  <p class="text-white">Version</p>
                  <input type="text" class="form-control" id="package_version" placeholder="Version" @change="generatePackage(true)">
                </div>
                <div class="col-sm">
                  <p class="text-white">Description</p>
                  <input type="text" class="form-control" id="package_description" placeholder="Description" @change="generatePackage(true)">
                </div>
              </div>
            </div>
            <pre v-html="packagejson" class="text-white" id="packagetxt"></pre>
            <!-- FINE -->
          </div>
          <div class="modal-footer bg-dark">
            <button type="button" class="btn btn-secondary" id="close" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="copy()" data-bs-dismiss="modal" id="copyBtn">Copy</button>
          </div>
        </div>
      </div>
    </div>
    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <a class="navbar-brand">
          <img src="./assets/logo.png" alt="Logo" width="30" draggable="false" class="d-inline-block align-text-top">
          <b class="text-white"> Domnio Script Builder [BETA]</b>
        </a>
    <button type="button" class="btn-close text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Language
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#" v-on:click="setLang('en')">English</a></li>
        <li><a class="dropdown-item" href="#" v-on:click="setLang('it')">Italiano</a></li>
      </ul>
    </div>
    <div class="dev" id="devv">
      <h4> DSB Developer Options </h4>
      <div class="btn-group">
        <a href="#" class="btn btn-secondary" @click="copy('workspace')">Copy workspace xml</a>
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

    h4 {
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

    input[type="text"]{
      font-family: "Nunito", "Ubuntu", sans-serif;
    }

    .down_zip {
      text-align: center;
    }

    .dev {
      margin-top: 10%;
      color: white;
    }
    .offcanvas-body {
      text-align: center;
      overflow:hidden;
      width:auto;
      display:inline;
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
    