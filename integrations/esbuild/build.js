const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const path = require('path');

const themes = ['default', 'bootstrap', 'material', 'fluent', 'classic'];

async function build() {
  const buildPromises = themes.map(theme => esbuild.build({
    entryPoints: [`./styles/${theme}.scss`],
    bundle: true,
    outdir: './dist',
    outExtension: { '.js': `.${theme}.js` },
    plugins: [
      sassPlugin({
        loadPaths: [
          path.resolve(__dirname, '../../node_modules'),
          path.resolve(__dirname, '../../packages')
        ],
        quietDeps: true
      })
    ],
    external: [],
    logLevel: 'info'
  }));

  await Promise.all(buildPromises);
}

build();
