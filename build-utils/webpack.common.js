const getClientEnvironment = require('./get-client-environment');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)(\?.*)?$/,
          /\.css$/,
          /\.svg$/,
          /\.json$/,
          /\.mjs$/,
          /\.graphql$/,
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(getClientEnvironment().stringified),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '*'],
  },
};
