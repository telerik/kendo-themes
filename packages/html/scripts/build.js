const esbuild = require('esbuild');

let components = [
    './src/index.ts'
];

esbuild.build({
    logLevel: 'error',
    entryPoints: components,
    outdir: './dist',
    globalName: 'kendo.Html',
    jsxFactory: 'kendo.Html.jsx',
    jsxFragment: 'kendo.Html.Fragment',
    bundle: true,
    minify: false,
    sourcemap: true,
    external: [ 'react', 'react-dom' ],
});
