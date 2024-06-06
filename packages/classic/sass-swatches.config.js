module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            entry: [ 'dist/!(_|variables)*.scss' ],
            sassOptions: {
                loadPaths: [
                    '../../node_modules/'
                ],
                minify: true
            }
        }
    ]
};
