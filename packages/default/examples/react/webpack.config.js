const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const kendoTasks = require('@telerik/kendo-common-tasks');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = kendoTasks.webpackThemeConfig({
  entry: {
    app: ['./src/index']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'react']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [path.join(__dirname, './src')]
  }
})

module.exports = config
