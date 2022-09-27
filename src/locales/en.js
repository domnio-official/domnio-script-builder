/* 

To import into a project do:

-------------------------------------------------------------------

import * as eng from "/src/locales/en";

const en = eng.getLangs();

-------------------------------------------------------------------

To use the object use the ` charter.

like: 

const example = `${en.return}`    ( example == End Script )

*/


function getLangs() {
    const en = {
        "return": "End script",
        "eval": "Eval"
    }
    return en;
}

export { getLangs }