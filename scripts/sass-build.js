const fs = require('fs');
const path = require('path');

const glob = require('glob');
const postcss = require('postcss');
const colors = require('ansi-colors');
const nodeSass = require("node-sass");

const sassImporterFactory = require('./sass-importer');
const utils = require('./utils');
const logger = utils.logger;

colors.theme(utils.colorTheme);

const defaults = {
    cwd: process.cwd(),

    dest: './',
    destFile: '[name].css',

    dryRun: false,

    // sass options
    compiler: nodeSass,
    importer: sassImporterFactory( { cache: true } ),
    functions: [],
    indentType: 'space',
    indentWidth: 4,
    linefeed: 'lf',
    outputStyle: 'expanded',
    precision: 10,

    // postcss plugins
    postcssPlugins: []
};

function sassCompile( options ) {

    let sassOptions = options;
    const compiler = options.compiler;

    delete sassOptions.compiler;

    try {
        return compiler.renderSync(sassOptions).css.toString('utf-8');
    } catch (error) {
        logger.error(`Error: ${colors.error(error.formatted)}`);
        logger.info(`File: ${error.file}:${error.line}:${error.column}`);

        throw new Error( error.message, error.file, error.line );
    }

}

function parsePathData( options ) {

    let outFile;
    let { root, file, dest, template } = options;
    let meta = {};

    if ( typeof template === 'string' ) {
        outFile = template.replace('[name]', path.basename( file, path.extname( file ) ) );
    }

    meta.file = path.resolve( root, file );
    meta.outFile = path.resolve( root, dest, outFile );

    return meta;
}

function build( options ) {

    let opts = Object.assign( {}, defaults, options );
    let { cwd, file, dir, dest, destFile, dryRun, postcssPlugins } = opts;
    let files = [];

    delete opts.cwd;
    delete opts.file;
    delete opts.dir;
    delete opts.dest;
    delete opts.destFile;
    delete opts.dryRun;
    delete opts.postcssPlugins;

    if ( typeof file === 'string' ) {
        files = glob.sync( file, { cwd: cwd } );
    } else if ( typeof dir === 'string' ) {
        files = glob.sync( `${dir}/**/!(_)*.scss`, { cwd: cwd } );
    }

    if ( files.length === 0 ) {
        logger.info( 'Provide a Sass file to render' );
        return;
    }

    const importer = opts.importer;
    importer.setCwd( cwd );

    files.forEach(file => {
        importer.clearImported();

        let fileMeta = parsePathData( { root: cwd, file, dest, template: destFile } );

        logger.info(`Compiling ${colors.info(fileMeta.file)} to ${colors.info(fileMeta.outFile)}`);

        let result = sassCompile({ file: fileMeta.file, ...opts });

        if ( postcssPlugins.length > 0 ) {
            result = postcss( postcssPlugins ).process( result ).css;
        }

        if ( dryRun === false ) {
            utils.ensureDirSync( path.dirname( fileMeta.outFile ) );
            fs.writeFileSync( fileMeta.outFile, result );
        }

    });
}

module.exports = {
    build
};
