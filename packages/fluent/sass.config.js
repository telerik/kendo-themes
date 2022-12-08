module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            compiler: 'sass-embedded',
            api: 'modern',
            sassOptions: {
                loadPaths: [
                    'node_modules/'
                ]
            }
        }
    ]
};
