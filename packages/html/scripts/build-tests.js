const esbuild = require("esbuild");
const { globSync } = require('glob');
const config = require('./config');

// const tests = globSync('./src/**/tests/**/*.tsx', { dotRelative: true });
const tests = globSync('./src/**/tests/**/*.tsx', { dotRelative: true });

(async() => {
    await esbuild.build(config(tests));
})();
