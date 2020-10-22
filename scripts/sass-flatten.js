const baka = require('@joneff/baka');

const defaults = {
    nodeModules: './node_modules'
};

function flatten(file, outFile, options) {
    options = Object.assign( {}, defaults, options ); // eslint-disable-line no-param-reassign

    baka.compile(
        file,
        outFile,
        options
    );
}

module.exports = {
    flatten
};
