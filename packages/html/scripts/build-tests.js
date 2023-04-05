const esbuild = require('esbuild');
const { globSync } = require('glob');

const tests = globSync('./src/**/tests/**/*.tsx', { dotRelative: true });

esbuild.buildSync({
    logLevel: 'error',
    entryPoints: tests,
    outdir: './dist',
    bundle: true,
    minify: false,
    sourcemap: false
});
