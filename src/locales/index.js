/*
          HOW TO USE INTO BLOCKS

          1. Import

            import { translate } from  "/src/locales";
            import localforage from "localforage";

          2. use it

          String(translate("value", await localforage.getItem("language")))

        Note that you can also use language code intead of localforage, example:
            String(translate("value", "en"))

        -------------------------------

        await function causing errors:

        for json blocks there is no problem

        for javascript block in the second line put an "async" behing "function()"
        like:

        Blockly.Blocks['start'] = {
            init: async function() {...}
        }
*/


import * as en from "./en";
import * as it from "./it";
import localforage from "localforage";
import "./simpleTexts"


var objlang;
var lang;
var item;
var langs = ["it", "en"];

(async () => {

if (await localforage.getItem("language") == null || await localforage.getItem("language") == "") {
    localforage.setItem("language", "en");
}

})();


export function translate(item, lang) {
    if (lang == "it") {
        objlang = it.getLangs();
        return returnTranslate(langs, lang, item, objlang);
    }
    else if (lang == "en") {
        objlang = en.getLangs();
        return returnTranslate(langs, lang, item, objlang);
    }
    else if (String(lang) == "[object Promise]") {
        lang.then(function(result) {
            console.log(result);
         if (String(result) == "it") {
             objlang = it.getLangs();
             console.log(objlang)
             console.log(result)
             return returnTranslate(langs, String(result), item, objlang);
         }
         else if (String(result) == "en") {
            objlang = en.getLangs();
            return returnTranslate(langs, String(result), item, objlang);
         }
        });
    }

    // ----------------------------------------------

}

var langg;
var objlangg;

function returnTranslate(langss, langg, item, objlangg){
    if (langss.includes(String(langg))) {
        if (item in objlangg) {
            return objlangg[String(item)];
        }
        else {
            if (item in en.getLangs()) {
                objlangg = en.getLangs();
                console.log(`%cTranslation for ${item} not found, using the eng language`, "color:red;");
                return objlangg[String(item)];
            }
            else {
                throw "No translation for " + item + " in " + langg;
            }
        }
    }
    else {
        throw "The language " + langg + " does not exist!"
    }
}