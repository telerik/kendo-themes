const fs = require('fs');
const path = require('path');
const glob = require('glob');

const testsMeta = JSON.parse( fs.readFileSync( '.cache/tests-meta.json', 'utf8' ) );
const testCases = Object.keys( testsMeta.files );
const distHtml = glob.sync('tests/**/*.html');
const distPng = glob.sync('tests/_output/**/*.png');

// Remove obsolete test pages
distHtml.forEach( htmlFile => {
    const fileName = path.basename( htmlFile, '.html' );

    if ( testCases.indexOf( fileName ) === -1 ) {
        // eslint-disable-next-line no-console
        console.log( 'Removing', htmlFile );
        fs.rmSync( htmlFile );
    }
});

// Remove obsolete screenshots
distPng.forEach( pngFile => {
    const fileName = path.basename( pngFile, '.png' );

    if ( testCases.indexOf( fileName ) === -1 ) {
        // eslint-disable-next-line no-console
        console.log( 'Removing', pngFile );
        fs.rmSync( pngFile );
    }
});
