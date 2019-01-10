const path = require("path");

const EMPTY_IMPORT = {
    file: "",
    contents: ""
};

const imported = new Set();

function packageImporterFactory(options = { cache: false }) {
    return function packageImporter(url) {
        if (!url.startsWith("~")) {
            return null;
        }

        let file = path.resolve( path.join(
            process.cwd(),
            "node_modules/",
            url.slice(1)
        ) );

        if (options.cache && imported.has(file)) {
            return EMPTY_IMPORT;
        }

        imported.add(file);

        return { file };
    };
}


module.exports = packageImporterFactory;
