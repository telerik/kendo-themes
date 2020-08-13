const path = require('path');
const fse = require('fs-extra');

const files = [
    '../../scripts/sass-build.js',
    '../../scripts/sass-flatten.js',
    '../../scripts/sass-importer.js',
    '../../scripts/utils.js'
];

// Lerna executes this script with the wrong cwd
if ( process.cwd() !== path.resolve( __dirname, '../' ) ) {
    console.log('Fixing process.cwd()'); // eslint-disable-line no-console
    process.chdir( path.resolve( __dirname, '../' ) );
}

fse.emptyDirSync('./src');

files.forEach( file => {
    let src = path.resolve( file );
    let dest = path.resolve( './src', path.basename( file ) );

    fse.copyFileSync( src, dest );
});
