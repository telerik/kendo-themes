const path = require('path');
const baka = require( '@joneff/baka' );
const merge = require( 'lodash.merge' );

const defaults = {
    output: {
        filename: '[name][ext]',
        path: path.resolve( process.cwd(), 'dist' )
    },
    nodeModules: path.resolve( process.cwd(), 'node_modules' )
};

const REGEXP = /\[([\w]+)\]/gi;

function parsePath( filePath ) {
    const pathData = {};

    pathData.file = filePath.startsWith('./') ? filePath.slice(2) : filePath;
    pathData.ext = path.extname( pathData.file );
    pathData.base = path.basename( pathData.file );
    pathData.name = pathData.base.slice( 0, pathData.base.length - pathData.ext.length );
    pathData.path = pathData.file.slice( 0, pathData.file.length - pathData.base.length );

    return pathData;
}

function replacer(value, allowEmpty) {

    function fn(match, input) {

        if (typeof value === 'function') {
            value = value(); // eslint-disable-line no-param-reassign
        }

        if (value === null || value === undefined) {
            if (!allowEmpty) {
                throw new Error(
                    `Variable ${match} not implemented in this context: ${input}`
                );
            }
            return '';
        }

        return `${value}`;
    }

    return fn;
}

function replacePathVariables( template, filePath ) {

    /** @type {Map<string, Function>} */
    const replacements = new Map();

    let result = template;
    let pathData = filePath;

    if (filePath) {

        if (typeof filePath === 'string') {
            pathData = parsePath(filePath);
        }

        replacements.set('file', replacer(pathData.file));
        replacements.set('path', replacer(pathData.path, true));
        replacements.set('base', replacer(pathData.base));
        replacements.set('name', replacer(pathData.name));
        replacements.set('ext', replacer(pathData.ext, true));
    }

    if (typeof template === 'function') {
        result = result(filePath);
    }

    result = result.replace( REGEXP, ( match, content ) => {
        const replacer = replacements.get( content );

        if (replacer !== undefined) {
            return replacer( content, result );
        }

        return match;
    });

    return result;
}

function sassFlatten( options ) {
    const { file, output, ...opts } = merge( {}, defaults, options );

    const outFile = path.resolve(
        output.path,
        replacePathVariables( output.filename, file )
    );

    baka.build( file, outFile, opts );
}

module.exports.sassFlatten = sassFlatten;
