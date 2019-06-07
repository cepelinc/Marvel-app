const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, "./src"),
    watchContentBase: true,
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    inline: true,
    port: 8080
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Dev',
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.EnvironmentPlugin({
      API_URL: 'http://127.0.0.1:3000/api/v1/',
    }),
    // new webpack.HotModuleReplacementPlugin(), // Enable hot reloading
  ]
});
