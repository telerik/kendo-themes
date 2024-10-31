const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'production',
    entry: {
        bootstrap: './styles/bootstrap.scss',
        classic: './styles/classic.scss',
        default: './styles/default.scss',
        fluent: './styles/fluent.scss',
        material: './styles/material.scss'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',

                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: false }
                    },

                    // Translates CSS into CommonJS
                    'css-loader',

                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass-embedded'),
                            sassOptions: {
                                precision: 10,
                                includePaths: [ '../../node_modules' ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    performance: {
        hints: false
    }
};
