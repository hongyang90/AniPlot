const path = require('path');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, './frontend/javascripts/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './frontend')
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'inline-source-map'
}

module.exports = config;