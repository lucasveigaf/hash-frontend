const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './packages/frontend/src/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.json'],
    symlinks: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'packages/frontend/src/index.html',
      filename: 'index.html',
    })
  ],
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
};
