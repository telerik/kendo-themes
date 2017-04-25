"use strict";
/*
 * Build CSS out of SCSS files using webpack, reusing the
 * configuration already in place for react / ng2 components.
 * This script creates a webpack entry for each of the packages,
 * and passes it through the kendo-common-tasks theme config.
 */
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const port = parseInt(process.env.PORT || 3000);
const devServerPort = port + 1;

/*
 * Webpack plug-in that reloads css via browser-sync upon build
 */
function BrowserSync() {
    this.bs = require("browser-sync").create('bs-refresh');
    this.bs.init({
        open: false,
        proxy: `http://localhost:${devServerPort}/`,
        port: port,
        host: '0.0.0.0'
    });
}
BrowserSync.prototype = {
    apply: function(compiler) {
        compiler.plugin("emit", (compilation, callback) => {
            this.bs.reload("dist.css");
            callback();
        });
    }
};

let entry = { 'all': './build/all.js' };

const components = process.env.COMPONENTS || null;
if (components) {
    // custom build
    const fs = require('fs');
    const path = require('path');
    const imports = components.split(',')
        .map(c => `require("./../scss/${c}.scss");`).join('\n')
    fs.writeFileSync(path.join('build', 'custom.js'), imports);
    entry = { 'custom': './build/custom.js' };
}

const compat = process.argv.indexOf('--env.twbs-compat') > -1;

if (compat) {
    entry = { 'twbs-compat': './build/twbs-compat.js' };
}

const inDevelopment = process.argv.find(v => v.includes('webpack-dev-server'))
module.exports = require('@telerik/kendo-common-tasks')
    .webpackThemeConfig({ extract: true }, {
        devServer: {
            hot: true,
            inline: true,
            port: devServerPort
        },
        module: { loaders: [] },
        entry: entry,
        plugins: inDevelopment ? [ new BrowserSync() ] : [],
        output: {
            path: 'dist',
            publicPath: '/dist/',
            filename: '[name].js'
        }
    });
