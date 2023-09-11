module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            sassOptions: {
                loadPaths: [
                    '../../node_modules/'
                ]
            }
        }
    ]
};
