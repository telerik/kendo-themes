module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    implementation: 'sass-embedded',
    api: 'modern',
    files: [
        {
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        }
    ]
};
