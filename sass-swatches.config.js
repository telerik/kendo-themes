module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            cwd: 'packages/default',
            entry: [ 'dist/!(_|variables)*.scss' ]
        },
        {
            cwd: 'packages/bootstrap',
            entry: [ 'dist/!(_|variables)*.scss' ]
        },
        {
            cwd: 'packages/classic',
            entry: [ 'dist/!(_|variables)*.scss' ]
        },
        {
            cwd: 'packages/material',
            entry: [ 'dist/!(_|variables)*.scss' ]
        },
        {
            cwd: 'packages/fluent',
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            compiler: 'sass-embedded',
            api: 'modern'
        },
        {
            cwd: 'packages/fluent',
            file: 'scss/all.scss',
            outFile: 'dist/fluent-main.css',
            compiler: 'sass-embedded',
            api: 'modern'
        }
    ]
};
