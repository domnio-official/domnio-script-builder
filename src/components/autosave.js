import localforage from "localforage";
import * as Blockly from "blockly";

/* async function AutoSaveStart(workspace) {
    console.log("Autosave has been started");
    SaveWorkSpace(workspace);
} */

export async function GetAutoSave(){
    return localforage.getItem("autosave");
}

export async function SyncWorkSpace(workspace){
        console.log('Saving workspace...');
        await localforage.setItem("autosave", Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace))).then(console.log('Workspace saved successfully'));
}
