#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

const cwd = process.cwd();
const version = process.env.npm_package_version;

function updateSwatchesVersion( cwd, version ) {
    const swatches = glob.sync('lib/swatches/*.json', { cwd: cwd });

    swatches.forEach(swatch => {
        let swatchJson = JSON.parse( fs.readFileSync(swatch, 'utf-8') );
        swatchJson.version = version;

        fs.writeFileSync( swatch, JSON.stringify( swatchJson, null, 4 ) );
        fs.appendFileSync( swatch, '\n' );
    });
}

updateSwatchesVersion( cwd, version );
