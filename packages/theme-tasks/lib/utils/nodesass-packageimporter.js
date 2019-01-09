const path = require("path");

const EMPTY_IMPORT = {
    file: "",
    contents: ""
};

const imported = new Set();

function fastPackageImporter(url) {

    if (!url.startsWith("~")) {
        return null;
    }

    let file;

    file = path.resolve( path.join(
        process.cwd(),
        "node_modules/",
        url.slice(1)
    ) );

    if (imported.has(file)) {
        return EMPTY_IMPORT;
    }

    imported.add(file);

    return {
        file: file
    };

}

function slowPackageImporter(url) {

    if (!url.startsWith("~")) {
        return null;
    }

    let file;

    file = path.resolve( path.join(
        process.cwd(),
        "node_modules/",
        url.slice(1)
    ) );

    return {
        file: file
    };

}


module.exports = {
    slowPackageImporter,
    fastPackageImporter
};
