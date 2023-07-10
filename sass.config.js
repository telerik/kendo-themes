module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        {
            cwd: 'packages/default',
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            sassOptions: {
                loadPaths: [
                    'packages/default/node_modules/'
                ]
            }
        },
        {
            cwd: 'packages/bootstrap',
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            sassOptions: {
                loadPaths: [
                    'packages/bootstrap/node_modules/'
                ]
            }
        },
        {
            cwd: 'packages/classic',
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            sassOptions: {
                loadPaths: [
                    'packages/classic/node_modules/'
                ]
            }
        },
        {
            cwd: 'packages/material',
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            sassOptions: {
                loadPaths: [
                    'packages/material/node_modules/'
                ]
            }
        },
        {
            cwd: 'packages/nouvelle',
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            sassOptions: {
                loadPaths: [
                    'packages/nouvelle/node_modules/'
                ]
            }
        },
        {
            cwd: 'packages/fluent',
            file: 'scss/all.scss',
            outFile: 'dist/all.css',
            compiler: 'sass',
            api: 'modern',
            sassOptions: {
                loadPaths: [
                    'packages/bootstrap/node_modules/'
                ]
            }
        },
        {
            cwd: 'packages/core',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/utils',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        }
    ]
};
