const fs = require('fs');
const path = require('path');
const glob = require('glob');

const reThemes = /default|classic|bootstrap|material|nouvelle/;

const tests = glob.sync('tests/visual/src/**/*.html').map(test => path.join( path.dirname(test), path.basename(test, '.html')));
const results = glob.sync('tests/visual/output/**/*.png');

results.forEach(result => {
    let name = path.join( path.dirname(result), path.basename(result, '.png') ).replace('output', 'src').replace(reThemes, '');

    name = path.normalize( name );

    if (tests.indexOf(name) === -1) {
        fs.unlinkSync(result);
    }
});
