module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            cwd: 'packages/default',
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/bootstrap',
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/classic',
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/material',
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/nouvelle',
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/core',
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/utils',
            file: 'dist/all.scss',
            outFile: 'dist/all.css'
        }
    ]
};
