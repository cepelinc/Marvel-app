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
      API_URL: 'https://gateway.marvel.com:443/v1/public/',
      PUBLIC_KEY: '7bee31b2826502583a4bf7ee68aeedbc',


    }),
    // new webpack.HotModuleReplacementPlugin(), // Enable hot reloading
  ]
});
