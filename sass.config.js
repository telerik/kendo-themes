module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    files: [
        {
            cwd: 'packages/default',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/bootstrap',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/classic',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/material',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/nouvelle',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/fluent',
            file: 'scss/index.scss',
            outFile: 'dist/all.css',
            implementation: 'sass-embedded',
            api: 'modern'
        },
        {
            cwd: 'packages/utils',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        }
    ]
};
