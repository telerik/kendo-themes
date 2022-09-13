module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            cwd: 'packages/default',
            entry: [ 'scss/!(common|styling)*/_index.scss' ]
        },
        {
            cwd: 'packages/bootstrap',
            entry: [ 'scss/!(common|styling)*/_index.scss' ]
        },
        {
            cwd: 'packages/classic',
            entry: [ 'scss/!(common|styling)*/_index.scss' ]
        },
        {
            cwd: 'packages/material',
            entry: [ 'scss/!(common|styling)*/_index.scss' ]
        }
    ]
};
