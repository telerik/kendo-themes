const fs = require('fs');
const path = require('path');
const glob = require('glob');

const reThemes = /default|classic|bootstrap|material|nouvelle/;

const tests = glob.sync('tests/**/*.html').map(test => path.join( path.dirname(test), path.basename(test, '.html')));
const results = glob.sync('tests/_output/**/*.png');

results.forEach(result => {
    let name = path.join( path.dirname(result), path.basename(result, '.png') ).replace('_output', '').replace(reThemes, '');

    name = path.normalize( name );

    if (tests.indexOf(name) === -1) {
        fs.unlinkSync(result);
    }
});
