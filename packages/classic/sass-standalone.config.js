module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            entry: [ 'scss/!(common|styling)*/_index.scss' ],
            sassOptions: {
                loadPaths: [
                    '../../node_modules/'
                ]
            }
        }
    ]
};
