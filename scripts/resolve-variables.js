#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const dartSass = require('sass');

const themeDir = process.cwd();
const srcFile = path.resolve( themeDir, 'scss', 'all.scss' );
const variablesJson = path.resolve( themeDir, `dist/meta/variables.json` );
const variablesScss = path.resolve( themeDir, `dist/meta/_variables.scss` );
const output = { path: path.resolve( themeDir, 'dist' ), filename: 'all.scss' };
const nodeModules = path.resolve( themeDir, '../../node_modules' );
const metaDir = path.resolve( themeDir, 'dist/meta/' );

// #region helpers
/**
 * Round floating-point artifacts in serialized Sass values.
 * Matches numbers like 248.23000000000002 or 50.14999999999999
 * and rounds them to a reasonable number of decimal places.
 * @param {string} str
 * @returns {string}
 */
function roundSassString(str) {
    return str.replace(/\b(\d+\.\d*?)([09])\2{4,}\d*/g, (match) =>
        parseFloat(parseFloat(match).toPrecision(12)).toString()
    );
}

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
        return roundSassString(sassValue.assertString().text);
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

    return roundSassString(sassValue.toString());
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
    return roundSassString(sassList.toString());
}

/**
 * @param {dartSass.SassNumber} sassNumber
 */
function prettifySassNumber(sassNumber) {
    if (sassNumber.hasUnits) {
        return roundSassString(sassNumber.toString());
    }

    return sassNumber.value;
}
// #endregion

if (fs.existsSync( srcFile )) {

    fs.writeFileSync( path.resolve( output.path, output.filename), '@forward "../scss/all.scss";');

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
                const _val = roundSassString(rawValue.toString());
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
