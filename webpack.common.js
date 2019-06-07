const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// config
module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.css', '.json'],
    alias: {
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hocs': path.resolve(__dirname, 'src/hocs'),
      '@messages': path.resolve(__dirname, 'src/messages'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@sagas': path.resolve(__dirname, 'src/sagas'),
      '@selectors': path.resolve(__dirname, 'src/selectors'),
      '@shared-components': path.resolve(__dirname, 'src/shared-components'),
      '@src': path.resolve(__dirname, 'src/src'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      // 'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'process.env.src_URL': JSON.stringify(process.env.src_URL),
      'process.env.src_PRESET': JSON.stringify(process.env.src_PRESET),
    }),
  ],
  performance: {
    hints: false,
  },
};
