module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        }
    ]
};
