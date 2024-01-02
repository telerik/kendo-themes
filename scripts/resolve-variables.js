#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { sassFlatten } = require('@progress/kendo-theme-tasks/src/build/sass-flatten');
const dartSass = require('sass');

const themeDir = process.cwd();
const srcFile = path.resolve( themeDir, 'scss', 'all.scss' );
const variablesJson = path.resolve( themeDir, `dist/meta/variables.json` );
const variablesScss = path.resolve( themeDir, `dist/meta/variables.scss` );
const output = { path: path.resolve( themeDir, 'dist' ), filename: 'all.scss' };
const nodeModules = path.resolve( themeDir, '../../node_modules' );
const metaDir = path.resolve( themeDir, 'dist/meta/' );

function _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

if (fs.existsSync( srcFile )) {

    if (path.basename( themeDir ) === 'fluent') {
        fs.writeFileSync( path.resolve( output.path, output.filename), '@use "../scss/all.scss";');
    } else {
        sassFlatten({ file: srcFile, output, nodeModules });
    }

    let content = {};

    if (!fs.existsSync(metaDir)) {
        fs.mkdirSync(metaDir);
    }

    fs.copyFileSync( path.resolve( __dirname, '../lib/variables.scss' ), variablesScss );

    dartSass.compile(variablesScss, {
        functions: {
            'k-resolve-var($key, $type, $value)': (args) => {
                const _key = args[0].toString();
                const _type = args[1].toString();
                const _val = args[2].toString();

                content[_key] = {
                    type: _capitalize( _type ),
                    value: _val
                };

                return new dartSass.SassString('');
            }
        },
        logger: dartSass.Logger.silent,
        loadPaths: [
            nodeModules
        ]
    });

    fs.writeFileSync( variablesJson, JSON.stringify( content, null, 4 ) );

}
