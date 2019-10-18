const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    }),
    new CopyWebpackPlugin([
      {
        context: './node_modules/@webcomponents/webcomponentsjs',
        from: '**/*.js',
        to: 'webcomponents',
      },
    ]),
  ],
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
};
