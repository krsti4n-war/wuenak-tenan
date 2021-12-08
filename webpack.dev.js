const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    usedExports: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  output: {
    pathinfo: false,
    clean: true
  }
});
