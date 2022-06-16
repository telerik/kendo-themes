module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    files: [
        {
            cwd: 'packages/default',
            files: [ 'scss/!(common|styling)*/_index.scss' ],
        },
        {
            cwd: 'packages/bootstrap',
            files: [ 'scss/!(common|styling)*/_index.scss' ],
        },
        {
            cwd: 'packages/classic',
            files: [ 'scss/!(common|styling)*/_index.scss' ],
        },
        {
            cwd: 'packages/material',
            files: [ 'scss/!(common|styling)*/_index.scss' ],
        },
    ]
};
