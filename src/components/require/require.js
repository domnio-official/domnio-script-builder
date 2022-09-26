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
        requires.push("const { exec } = require(\"child_process\")");
    }


    // ---- RETURN ------
    return requires.join('\n') + "\n";
}

export { getRequires }