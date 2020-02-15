const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config');

const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 1234,
  },
};

module.exports = merge(common, dev);
