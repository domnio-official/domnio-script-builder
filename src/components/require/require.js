function getRequires(code) {
    var requires = [];

    // ------ CHECKS --------
    if (code.includes("prompt(")) {
        requires.push("const prompt = require('prompt-sync')({sigint: true});");
    }


    // ---- RETURN ------
    return requires.join('\n') + "\n";
}

export { getRequires }