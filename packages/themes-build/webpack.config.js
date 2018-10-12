"use strict";
/*
 * Build CSS out of SCSS files using webpack, reusing the
 * configuration already in place for react / ng2 components.
 * This script creates a webpack entry for each of the packages,
 * and passes it through the kendo-common-tasks theme config.
 */
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssLoaderPath = require.resolve('css-loader');
const urlLoaderPath = require.resolve('url-loader');
const styleLoaderPath = require.resolve('style-loader');
const sassLoaderPath = require.resolve('sass-loader');
const jsonLoaderPath = require.resolve('json-loader');
const autoprefixer = require('autoprefixer');
const calc = require('postcss-calc');
const postCssLoaderPath = require.resolve('postcss-loader');
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

if(process.env.npm_package_name === undefined) {
    throw new Error("no `process.env.npm_package_name` consider using another variable");
}
if(process.env.npm_package_name == '@progress/kendo-theme-default') {
    entry['twbs-compat'] = './build/twbs-compat.js';
}
fs.existsSync('./scss/swatches/') && fs.readdirSync('./scss/swatches/').forEach(fileScss => {
    const matches = fileScss.match(/^(.*)\.scss$/);
    if(matches) {
        const baseName = matches[1];
        const fileJsPath = `./build/swatches/${baseName}.js`;
        fs.existsSync(fileJsPath) && fs.unlinkSync(fileJsPath);
        fs.writeFileSync(fileJsPath,`// entry point for webpack\nrequire("./../../scss/swatches/${fileScss}");`);
        entry[baseName] = fileJsPath;
    }
});

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
const CDNSassLoader = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({ 'fallback': styleLoaderPath, 'use': [
        `${cssLoaderPath}?sourceMap`,
        postCssLoaderPath,
        sassLoaderPath
    ] })
};
const hashedName = "[name].[ext]?[hash]";
const resourceLoaders = [
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: urlLoaderPath,
        query: {
            name: hashedName,
            limit: 10000
        }
    },
    {
        test: /\.(woff|woff2)$/,
        loader: urlLoaderPath,
        query: {
            name: hashedName,
            mimetype: "application/font-woff"
        }
    },
    {
        test: /\.json$/i,
        loader: jsonLoaderPath
    }
];

const extractCssPlugin = () =>
    new ExtractTextPlugin("[name].css");

const inDevelopment = process.argv.find(v => v.includes('webpack-dev-server'))
const webpackThemeConfig = (_settings, _webpackConfig) => {
    const options = _webpackConfig ? _settings : {};
    const webpackConfig = _webpackConfig ? _webpackConfig : _settings;

    const extract = options && options.extract;
    const sassLoader = CDNSassLoader;
    const plugins = extract ? [ extractCssPlugin() ] : [];
    webpackConfig.plugins.push( new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    precision: 10
                },
                context: '/'
            }
        })
    );
    return Object.assign({}, webpackConfig, {
        plugins: plugins.concat(webpackConfig.plugins),

        module: {
            loaders: _.flatten([
                webpackConfig.module && webpackConfig.module.loaders,
                sassLoader,
                options.stubResources ? stubLoader : resourceLoaders
            ]),
            noParse: (webpackConfig.module || {}).noParse
        }
    });
};
module.exports = (dirname) => {
    return webpackThemeConfig({ extract: true }, {
        devServer: {
            hot: true,
            inline: true,
            port: devServerPort
        },
        module: { loaders: [] },
        entry: entry,
        plugins: inDevelopment ? [ new BrowserSync() ] : [],
        output: {
            path: path.join(dirname, './dist'),
            publicPath: '/dist/',
            filename: '[name].js'
        }
    });
}
