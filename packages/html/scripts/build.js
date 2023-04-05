const esbuild = require('esbuild');
const { globSync } = require('glob');

const components = globSync('./src/**/*.tsx', { dotRelative: true });
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
