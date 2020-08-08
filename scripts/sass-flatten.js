const path = require('path');

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

function flattenAll( src, dest, options ) {

    options.cwds.forEach( theme => {
        const file = path.resolve( theme, src );
        const outFile = path.resolve( theme, dest, './all.scss' );
        const nodeModules = path.resolve( theme, './node_modules' );

        flatten( file, outFile, { nodeModules: nodeModules } );
    });
}

module.exports = {
    flatten,
    flattenAll
};
