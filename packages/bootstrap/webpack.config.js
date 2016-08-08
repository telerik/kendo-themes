/*
 * Build CSS out of SCSS files using webpack, reusing the
 * configuration already in place for react / ng2 components.
 * This script creates a webpack entry for each of the packages,
 * and passes it through the kendo-common-tasks theme config.
 */
var glob = require('glob');
var path = require('path');
var fs = require('fs');

var FILES = 'src/packages/*.scss';

var tmpDir = './.tmp/';
var createTmpDir = true;
try {
    createTmpDir = !fs.statSync(tmpDir).isDirectory();
} catch(e) {}

if (createTmpDir) {
    fs.mkdirSync(tmpDir);
}

var entries =
    glob.sync(FILES)
        .reduce(function(entries, filename) {
            var name = path.basename(filename, '.scss');
            var entry = tmpDir + name + '.js';

            fs.writeFileSync(entry, 'require("./../' + filename + '")');

            entries[name] = entry;

            return entries;
        }, {});

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
            this.bs.reload("all.css");
            callback();
        });
    }
};

const inDevelopment = process.argv.find(v => v.includes('webpack-dev-server'))
module.exports = require('@telerik/kendo-common-tasks')
    .webpackThemeConfig({ extract: true }, {
        module: { loaders: [] },
        entry: entries,
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
