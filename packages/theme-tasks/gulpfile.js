"use strict";

const {
    sasslint, jslint
} = require("./lib/tasks/lint");
const sassTasks = require("./lib/tasks/sass");


// Export related tasks as a group
exports.tasks = {
    sass: {
        lint: sasslint,
        buildFile: sassTasks.buildFile,
        theme: sassTasks.theme,
        swatches: sassTasks.swatches,
        api: sassTasks.api,
        assets: sassTasks.assets
    }
};

// Export only lint as a local task
exports.lint = jslint;
