const path = require('path');
const fse = require('fs-extra');

const files = [
    '../../scripts/sass-build.js',
    '../../scripts/sass-flatten.js',
    '../../scripts/sass-importer.js',
    '../../scripts/utils.js'
];

// Lerna executes this script with the wrong cwd
if (process.cwd() === __dirname) {
    process.chdir('../');
}

fse.emptyDirSync('./src');

files.forEach( file => {
    let src = path.resolve( file );
    let dest = path.resolve( './src', path.basename( file ) );

    fse.copyFileSync( src, dest );
});
