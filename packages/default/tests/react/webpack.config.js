const StringReplacePlugin = require("string-replace-webpack-plugin");
const commonTasks = require('@telerik/kendo-common-tasks');
const path = require('path');

const sourceExtensions = [ '.jsx' ];
const nodeModulesPath = path.join(__dirname, 'node_modules');

const resolve = commonTasks.resolveConfig(sourceExtensions, nodeModulesPath);

const babelLoader = {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: require.resolve('babel-loader'),
    plugins: [
        require.resolve('babel-plugin-add-module-exports')
    ],
    query: {
        presets: [
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-stage-1') // Note: stage-1 should be after es2015 in order to work
        ],
        plugins: [
            require.resolve('babel-plugin-transform-object-assign')
        ]
    }
};

let config = {
    dev: commonTasks.webpackDevConfig({
        resolve,
        loaders: [ babelLoader ],
        entries: 'examples/*.jsx'
    }), // dev
}; // module.exports

// insert string replace before style loader
// tightly coupled to the order in commonTasks.webpackThemeConfig
const loaders = config.dev.module.loaders;
config.dev.plugins.push( new StringReplacePlugin() );
loaders[loaders.length-3].loaders.splice(1, 0,
    StringReplacePlugin.replace({
        replacements: [
            // replace pseudo classes with class names to show them in static page
            {
                pattern: /:(hover|focus|active)/ig,
                replacement: function (_, state) {
                    return '.__pseudo-' + state;
                }
            }
        ]
    })
);

module.exports = config
