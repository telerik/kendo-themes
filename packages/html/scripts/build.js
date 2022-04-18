const esbuild = require('esbuild');
const glob = require('glob');

const components = glob.sync('./src/**/*.tsx');
components.push('./src/index.ts');

esbuild.buildSync({
    logLevel: 'error',
    entryPoints: components,
    outdir: './dist',
    bundle: true,
    minify: false,
    sourcemap: true,
    external: [ 'react', 'react-dom' ]
});
