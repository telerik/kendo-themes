const webpackConfig = require('./webpack.config.js');
const commonTasks = require('@telerik/kendo-common-tasks');

const SRC = "src/**/*.jsx";

commonTasks.addTasks(require('gulp'), 'kendo-theme-tests-react', SRC, webpackConfig);
