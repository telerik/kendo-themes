module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    implementation: 'sass-embedded',
    api: 'modern',
    files: [
        {
            file: 'scss/index.scss',
            outFile: 'dist/all.css'
        }
    ]
};
