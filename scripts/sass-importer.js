const path = require("path");

const EMPTY_IMPORT = {};

function packageImporterFactory(options = { cache: false, cwd: null }) {

    const imported = new Set();
    let cwd = options.cwd || process.cwd();

    function clearImported() {
        imported.clear();
    }

    function setCwd( newCwd ) {
        cwd = newCwd;
    }

    function packageImporter(url, prev) {
        let file;

        if (url.startsWith("~")) {
            file = path.resolve(path.join(
                cwd,
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
    }

    packageImporter.clearImported = clearImported;
    packageImporter.setCwd = setCwd;

    return packageImporter;
}

module.exports = packageImporterFactory;
