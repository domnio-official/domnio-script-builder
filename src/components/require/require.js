function getRequires(code) {
    var requires = [];

    // ------ CHECKS --------
    if (code.includes("")) {
        requires.push("");
    }


    // ---- RETURN ------
    return requires.join('\n') + "\n";
}

export { getRequires }