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
    compiler: nodeSass,
    sass: {
        precision: 10,
        outputStyle: "expanded",
        importer: sassImporterFactory({ cache: true })
    },
    postcssPlugins: []
};

function build(fileGlob, dest, options) {

    options = Object.assign( {}, defaults, options ); // eslint-disable-line no-param-reassign

    let cwd = options.cwd;
    let destCwd = options.destCwd || cwd;
    let files = glob.sync( fileGlob, { cwd: cwd } );
    let result;
    let outFile;

    const importer = options.sass.importer;
    const compiler = options.compiler;

    files.forEach(file => {
        importer.clearImported();
        importer.setCwd( options.cwd );

        file = path.resolve( cwd, file ); // eslint-disable-line no-param-reassign
        dest = path.resolve( destCwd, dest ); // eslint-disable-line no-param-reassign

        logger.info(`Compiling ${colors.info(file)} to ${colors.info(dest)}`);

        try {
            result = compiler.renderSync({
                file,
                ...options.sass
            }).css.toString('utf-8');
        } catch (error) {
            logger.error(`Error: ${colors.error(error.formatted)}`);
            logger.info(`File: ${error.file}:${error.line}:${error.column}`);

            throw new Error( error.message, error.file, error.line );
        }

        if (options.postcssPlugins.length > 0) {
            result = postcss( options.postcssPlugins ).process( result ).css;
        }

        outFile = path.resolve(
            dest,
            path.basename(file, ".scss") + ".css"
        );

        utils.ensureDirSync(dest);
        fs.writeFileSync(outFile, result);

    });
}

function buildAll( fileGlob, dest, options ) {
    options.cwds.forEach( cwd => {
        let opts = { cwd: cwd, compiler: options.compiler, postcssPlugins: options.postcssPlugins };

        build( fileGlob, dest, opts );
    });
}

module.exports = {
    build,
    buildAll
};
