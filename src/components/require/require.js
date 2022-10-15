function getRequires(code, listPackage, name, version, desc, author) {
    var requires = [];
    var packages = [];

    // ------ CHECKS --------
    if (code.includes("prompt(")) {
        requires.push("const prompt = require('prompt-sync')({sigint: true});");
        packages.push('"prompt-sync": "^4.2.0",');
    }
    if (code.includes("await delay(")) {
        requires.push("const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));");
    }
    if (code.includes("exec(")) {
        requires.push("const { exec } = require(\"child_process\");");
    }
    if (code.includes("JSONdb(")) {
        requires.push("const JSONdb = require('simple-json-db');");
        packages.push('"simple-json-db": "^2.0.0",');
    }
    if (code.includes("axios.get(") || code.includes("axios.post(") || code.includes("axios(")) {
        requires.push("const axios = require('axios');");
        packages.push('"axios": "^0.27.2",');
    }
    if (code.includes("fs.")) {
        requires.push("const fs = require('fs');");
    }
    if (code.includes("fss.")) {
        requires.push("const fss = require('fs/promises');");
    }
    if (code.includes("chokidar.")) {
        requires.push("const chokidar = require('chokidar');");
        packages.push('"chokidar": "^3.5.3",');
    }


    // ---- RETURN ------
    if (listPackage == true) {
        packages.forEach(item => {
            packages[packages.indexOf(item)] = String('        ' + item);
        });
        packages = String(packages.join('\n'));
        packages = String(packages).slice(0, -1)
        return String(
`{
    "author": "${author}",
    "name": "${name}",
    "version": "${version}",
    "description": "${desc}",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon"
    },
    "dependencies": {
${String(packages)}
    }
}`);
    }
    else {
        return requires.join('\n') + "\n" + "\n";
    }
}

export { getRequires }