module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            file: 'scss/index.import.scss',
            outFile: 'dist/index.css',
            sassOptions: {
                loadPaths: [
                    '../../node_modules/'
                ]
            }
        }
    ]
};
