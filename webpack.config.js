const { resolve } = require('path');
const OUTPUT_PATH = resolve(__dirname, 'build');


module.exports = {
  mode: 'production',
  context: resolve('./src'),
  entry: { 'deepCompare': './deepCompare.js' },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].[chunkhash].bundle.js',
  },
  stats: {
    moduleTrace: true,
    errorDetails: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }],
  }
};
