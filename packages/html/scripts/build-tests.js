const esbuild = require('esbuild');
const glob = require('glob');

const tests = glob.sync('./src/**/tests/**/*.tsx');

esbuild.buildSync({
    logLevel: 'error',
    entryPoints: tests,
    outdir: './dist',
    bundle: true,
    minify: false,
    sourcemap: false
});
