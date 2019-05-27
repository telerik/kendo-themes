"use strict";

const { command, opts } = require("./lib/utils/args-parser")(); // eslint-disable-line no-unused-vars
const { tasks } = require("./gulpfile.js");

function kendotheme() {

    switch (command) {
        case "assets":
            tasks.sass.assets();
            break;
        case "lint":
            tasks.sass.lint();
            break;
        case "build": {
            if (opts.file) {
                tasks.sass.buildFile(opts.file);
            } else if (opts.swatches) {
                tasks.sass.swatches();
            } else {
                tasks.sass.theme();
            }
            break;
        }
        case "api":
            tasks.sass.api();
            break;
        default:
            throw new Error("Unknown command");
    }
}

module.exports = kendotheme;
