import localforage from "localforage";
import * as Blockly from "blockly";

/* async function AutoSaveStart(workspace) {
    console.log("Autosave has been started");
    SaveWorkSpace(workspace);
} */

export async function GetAutoSave(){
    return await localforage.getItem("autosave");
}

export async function SyncWorkSpace(workspace){
    console.log('Saving workspace...');
    var content = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
    localforage.setItem("autosave", content).then(console.log('Workspace saved successfully'));
}
