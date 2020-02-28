
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    about: './src/js/about.js'
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Multiple Bundles',
      }),
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
          ],
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }
    ],
  },
};
