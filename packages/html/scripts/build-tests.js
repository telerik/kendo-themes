const esbuild = require('esbuild');
const glob = require('glob');

function getArg(key, argsArr) {
    const args = argsArr || process.argv;
    const index = args.indexOf(key);
    const next = args[index + 1];

    return (index < 0) ? null : (!next || next[0] === '-') ? true : next; // eslint-disable-line no-nested-ternary
}

const watch = getArg( 'watch' );
const tests = glob.sync('./src/**/tests/**/*.tsx');

esbuild.buildSync({
    logLevel: watch ? 'info' : 'error',
    entryPoints: tests,
    outdir: './dist',
    bundle: true,
    minify: false,
    sourcemap: false,
    watch: watch || false,
});
