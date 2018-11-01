"use strict";

const argv = require("minimist")(process.argv.slice(2));

/**
 * Return an argument object populated with command name and options from args
 *
 * @return command Command name
 * @return opts Options object
 */
module.exports = function parseArguments() {
    let params = argv._,
        opts = argv;

    // Zero params?
    if (params.length === 0) {
        throw new Error("No command passed!");
    }

    // More than one param
    if (params.length > 1) {
        throw new Error("Too many commands passed!");
    }

    let command = params[0];
    delete opts._;

    return { command, opts };
};
