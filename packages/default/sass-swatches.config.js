module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            entry: [ 'dist/!(_|variables)*.scss' ],
            api: "modern",
            compiler: "sass",
            sassOptions: {
                loadPaths: [
                    '../../node_modules/'
                ],
                minify: true
            }
        }
    ]
};
