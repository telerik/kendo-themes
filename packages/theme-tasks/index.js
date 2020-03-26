"use strict";

const { command, opts } = require("./lib/utils/args-parser")(); // eslint-disable-line no-unused-vars
const registry = require("./gulpfile.js").taskHelper.registry;

function kendotheme() {
    let tasks = {};

    Object.entries( registry.tasks() ).forEach(function(taskEntry) {

        let taskName = taskEntry[0];
        let taskBody = taskEntry[1].unwrap();

        tasks[taskName] = taskBody;

    });

    switch (command) {
        case "sass": {
            tasks["sass"]();
            break;
        }
        case "dart": {
            tasks["dart"]();
            break;
        }
        case "sass:swatches": {
            tasks["sass:swatches"]();
            break;
        }
        case "dart:swatches": {
            tasks["sass:swatches"]();
            break;
        }
        default:
            throw new Error("Unknown command");
    }
}

module.exports = kendotheme;
