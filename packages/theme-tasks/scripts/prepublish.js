const path = require('path');
const fse = require('fs-extra');

const files = [
    '../../scripts/sass-build.js',
    '../../scripts/sass-flatten.js',
    '../../scripts/sass-importer.js',
    '../../scripts/utils.js'
];

fse.emptyDirSync('./src');

files.forEach( file => {
    let src = path.resolve( file );
    let dest = path.resolve( './src', path.basename( file ) );

    fse.copyFileSync( src, dest );
});
