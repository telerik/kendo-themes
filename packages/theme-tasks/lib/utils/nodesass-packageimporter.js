const path = require("path");

const EMPTY_IMPORT = {
    file: "",
    contents: ""
};

const imported = new Set();

function packageImporterFactory(options = { cache: false }) {
    return function packageImporter(url, prev) {
        let file;

        if (url.startsWith("~")) {
            file = path.resolve(path.join(
                process.cwd(),
                "node_modules/",
                url.slice(1)
            ));
        } else {
            file = path.resolve(path.join(
                path.dirname(prev),
                url
            ));
        }

        if (options.cache && imported.has(file)) {
            return EMPTY_IMPORT;
        }

        imported.add(file);

        return { file };
    };
}


module.exports = packageImporterFactory;
