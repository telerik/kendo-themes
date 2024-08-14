#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { sassFlatten } = require('../scripts/sass-flatten');
const dartSass = require('sass');

const themeDir = process.cwd();
const srcFile = path.resolve( themeDir, 'scss', 'all.scss' );
const variablesJson = path.resolve( themeDir, `dist/meta/variables.json` );
const variablesScss = path.resolve( themeDir, `dist/meta/variables.scss` );
const output = { path: path.resolve( themeDir, 'dist' ), filename: 'all.scss' };
const nodeModules = path.resolve( themeDir, '../../node_modules' );
const metaDir = path.resolve( themeDir, 'dist/meta/' );

// #region helpers
function _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * @param {dartSass.Value} sassValue
 */
function prettifySassValue(sassValue) {

    if (sassValue instanceof dartSass.SassMap) {
        return prettifySassMap(sassValue.assertMap());
    }

    if (sassValue instanceof dartSass.SassList) {
        return prettifySassList(sassValue);
    }

    if (sassValue instanceof dartSass.SassString) {
        return sassValue.assertString().text;
    }

    if (sassValue instanceof dartSass.SassNumber) {
        return prettifySassNumber(sassValue.assertNumber());
    }

    if (sassValue instanceof dartSass.SassBoolean) {
        return sassValue.isTruthy;
    }

    if (sassValue === dartSass.sassNull) {
        return null;
    }

    return sassValue.toString();
}

/**
 * @param {dartSass.SassMap} sassMap
 * @returns {Record<string, string>}
 */
function prettifySassMap(sassMap) {
    const result = {};

    sassMap.contents.forEach((value, key) => {
        const _key = key instanceof dartSass.SassString ? key.assertString().text : key.toString();
        result[_key] = prettifySassValue(value);
    });

    return result;
}

/**
 * @param {dartSass.SassList} sassList
 * @returns {string}
 */
function prettifySassList(sassList) {
    return sassList.toString();
}

/**
 * @param {dartSass.SassNumber} sassNumber
 */
function prettifySassNumber(sassNumber) {
    if (sassNumber.hasUnits) {
        return sassNumber.toString();
    }

    return sassNumber.value;
}
// #endregion

if (fs.existsSync( srcFile )) {

    if (path.basename( themeDir ) === 'fluent') {
        fs.writeFileSync( path.resolve( output.path, output.filename), '@forward "../scss/all.scss";');
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
            'k-resolve-var($key, $type, $value)': ([ rawKey, rawType, rawValue ]) => {
                const _key = rawKey.toString();
                const _type = rawType.toString();
                const _val = rawValue.toString();
                const prettyValue = prettifySassValue(rawValue);

                content[_key] = {
                    type: _capitalize( _type ),
                    value: _val
                };
                _type === "map" && (content[_key].prettyValue = prettyValue);

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
