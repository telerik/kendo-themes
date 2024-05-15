module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            compiler: 'sass',
            api: 'legacy',
            sassOptions: {
                loadPaths: [
                    '../../node_modules/'
                ]
            }
        }
    ]
};
