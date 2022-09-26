import { ref } from "vue";
import BlocklyComponent from "./BlocklyComponent.vue";
import '../blocks/importBlocks';
import Theme from '@blockly/theme-dark';
import Swal from "sweetalert2";
import JSZip from "jszip";
import beautify from "js-beautify";
import localforage from "localforage";
import Blockly from "blockly";
import BlocklyJS from "blockly/javascript";
import * as workspacee from "../App.vue";


function saveas() {
    const zip = new JSZip();
    const xmlContent = Blockly.Xml.domToPrettyText(
      Blockly.Xml.workspaceToDom(workspacee.value.workspace)
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
    };

    function askForFile(){
        (document.querySelector("#load-code").click()).then(load());
    };
    function load(){
        workspacee.value.clear();
        const file = document.getElementById("load-code").files[0];
        const documentName = file.name.split(".").slice(0, file.name.split(".").length-1);
        const reader = new FileReader();
        reader.onload = (e) => {
            JSZip.loadAsync(e.target.result)
                .then((data) => {
                if (data.file("blocks.xml")) {
                    return data.file("blocks.xml").async("string")
                }
            })
            .then((text) => {
                const xml = Blockly.Xml.textToDom(text);
                Blockly.Xml.domToWorkspace(xml, workspacee.value.workspace);
                reader.close();
            }).catch(() => {
                Swal.fire({
                    title: "Error!",
                    icon: 'error',
                    html: "Something went wrong!",
                    confirmButtonText: "OK"
                  });
            });
        };
        if (file) {
            reader.readAsArrayBuffer(file);
            document.getElementById("load-code").setAttribute("value", "");
        }
    }

export {saveas, askForFile, load};