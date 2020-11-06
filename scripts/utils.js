const fs = require('fs');
const path = require('path');

const colors = require('ansi-colors');
const gulplogger = require('gulplog');

const colorTheme = {
    error: colors.red,
    info: colors.magentaBright
};

function ensureDirSync(dir) {
    let resolvedPath = path.resolve( dir );

    if (fs.existsSync(resolvedPath) === false ) {
        try {
            fs.mkdirSync(resolvedPath, { recursive: true });
        } catch (err) {
            console.log('Failed to create dir:', err); // eslint-disable-line no-console
        }
    }
}

const logger = {
    info: ( message, ...args ) => {
        gulplogger.info( colors.gray(message), ...args ); // eslint-disable-line no-console
    },
    error: ( message, ...args ) => {
        gulplogger.error( message, ...args ); // eslint-disable-line no-console
    }
};

function getArg(key) {
    let index = process.argv.indexOf(key);
    let next = process.argv[index + 1];

    return (index < 0) ? null : (!next || next[0] === "-") ? true : next; // eslint-disable-line no-nested-ternary
}

function getEnvArg(key) {
    let name = `npm_config_${key}`;
    let arg = process.env[name];

    return arg;
}

module.exports = {
    getArg,
    colorTheme,
    logger,
    ensureDirSync,
    getEnvArg
};
