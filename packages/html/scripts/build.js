const esbuild = require('esbuild');
const { globSync } = require('glob');

const components = globSync('./src/**/*.tsx', { dotRelative: true });
components.push('./src/index.ts');

esbuild.buildSync({
    logLevel: 'error',
    format: 'esm',
    target: 'esnext',
    entryPoints: components,
    outdir: './dist',
    jsx: 'automatic',
    bundle: true,
    minify: false,
    sourcemap: false,
    external: [ 'react', 'react-dom' ]
});
