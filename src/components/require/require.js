function getRequires(code) {
    var requires = [];

    // ------ CHECKS --------
    if (code.includes("prompt(")) {
        requires.push("const prompt = require('prompt-sync')({sigint: true});");
    }
    if (code.includes("await delay(")) {
        requires.push("const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));");
    }
    if (code.includes("exec(")) {
        requires.push("const { exec } = require(\"child_process\");");
    }
    if (code.includes("new JSONdb(")) {
        requires.push("const JSONdb = require('simple-json-db');");
    }
    if (code.includes("axios.get(")) {
        requires.push("const axios = require('axios');");
    }


    // ---- RETURN ------
    return requires.join('\n') + "\n" + "\n";
}

export { getRequires }