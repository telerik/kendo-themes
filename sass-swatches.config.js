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
            entry: [ 'dist/!(_|variables)*.scss' ],
            api: "modern",
            compiler: "sass"
        }
    ]
};
