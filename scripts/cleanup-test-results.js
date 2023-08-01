const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const reThemes = /default|classic|bootstrap|material|fluent|nouvelle/;

const tests = globSync('tests/**/*.html').map(test => path.join( path.dirname(test), path.basename(test, '.html')));
const results = globSync('tests/_output/**/*.png');

results.forEach(result => {
    let name = path.join( path.dirname(result), path.basename(result, '.png') ).replace('_output', '').replace(reThemes, '');

    name = path.normalize( name );

    if (tests.indexOf(name) === -1) {
        fs.unlinkSync(result);
    }
});
