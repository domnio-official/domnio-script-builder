
import * as en from "./en";
import * as it from "./it";
import localforage from "localforage";

var data;
var exportt;
var itt = it.getLangs();
var enn = {
    "return": "End script",
    "eval": "Eval",
    "start": "Start"
}
var objLang;

function getLangs() {
    localforage.getItem("language").then(data => {
        if (String(data) == null) {
            objLang = en.getLangs();
            console.log("object promise");
            return objLang;
        }
        else {
            if (data == "it") {
                console.log("lang it")
                // exportt = it.getLangs();
                return itt;
            }
            else if (data == "en") {
                console.log("lang en")
                // exportt = en.getLangs();
                return enn;
            }
            else {
                objLang = en.getLangs();
                return enn;
                throw "Error! Set the languate to EN";
            }
        }
     })
}

export { getLangs };
