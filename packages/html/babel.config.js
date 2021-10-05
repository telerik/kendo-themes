const path = require('path');

const config = {
    "plugins": [
        [
            "@babel/plugin-transform-react-jsx",
            {
                "throwIfNamespace": false,
                "runtime": "automatic",
                "importSource": path.resolve( __dirname, 'lib' )
            }
        ]
    ],
    "comments": false
};

module.exports = config;
