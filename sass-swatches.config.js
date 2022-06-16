module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    files: [
        {
            cwd: 'packages/default',
            files: [ 'dist/!(_|variables)*.scss' ]
        },
        {
            cwd: 'packages/bootstrap',
            files: [ 'dist/!(_|variables)*.scss' ]
        },
        {
            cwd: 'packages/classic',
            files: [ 'dist/!(_|variables)*.scss' ]
        },
        {
            cwd: 'packages/material',
            files: [ 'dist/!(_|variables)*.scss' ]
        }
    ]
};
