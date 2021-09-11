const autoprefixer = require('autoprefixer');
const calc = require('postcss-calc');

module.exports = {
    plugins: [
        calc({
            precision: 10
        }),
        autoprefixer()
    ]
};
