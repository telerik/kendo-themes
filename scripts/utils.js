const fs = require('fs');
const path = require('path');

const colors = require('ansi-colors');
const gulplogger = require('gulplog');

const colorTheme = {
    error: colors.red,
    info: colors.magentaBright
};

function ensureDirSync(dir) {
    let resolvedPath = path.normalize(dir);

    resolvedPath.split(path.sep).reduce((acc, curr) => {
        let dirPath = path.join(acc, curr);

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        return dirPath;
    });
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

module.exports = {
    getArg,
    colorTheme,
    logger,
    ensureDirSync
};
