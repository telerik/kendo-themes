module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["qunit"],


        // list of files / patterns to load in the browser
        files: [
            "node_modules/jquery/dist/jquery.js",
            "tests/integrity/lib/helpers.js",
            `packages/${config.theme || "default"}/dist/all.css`,
            "tests/integrity/fixtures/**/*.html",
            "tests/integrity/data/metrics.js",
            "tests/integrity/**/*-qunit.js"
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests/fixtures/**/*.html': []
            // 'tests/**/.html': ["html2js"]
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 2107,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'/*, 'PhantomJS'*/],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,


        // Proxies
        proxies: {
            "/tests/": "/base/tests/",
            "/fixtures/": "/base/tests/integrity/fixtures/",
            "/theme/": `/base/packages/${config.theme || "default"}/dist/`
        },




        // client configuration
        client: {
            clearContext: false,
            qunit: {
                showUI: false
            }
        }
    })
}
