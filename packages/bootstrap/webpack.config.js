const path = require('path');
const inDevelopment = process.argv.find(v => v.includes('webpack-dev-server'))

function BrowserSync() {
    this.bs = require("browser-sync").create('bs-refresh');
    this.bs.init({
        open: false,
        proxy: 'http://localhost:8080/',
        port: 3000,
        host: '0.0.0.0'
    });
}
BrowserSync.prototype = {
    apply: function(compiler) {
        compiler.plugin("emit", (compilation, callback) => {
            this.bs.reload("main.css");
            callback();
        });
    }
};

module.exports = require('@telerik/kendo-common-tasks')
    .webpackThemeConfig({ extract: true }, {
        module: { loaders: [] },
        entry: {
            main: './src/main.js'
        },
        plugins:
            inDevelopment ? [
                new BrowserSync()
            ] : [],
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/',
            filename: '[name].js'
        }
    });

