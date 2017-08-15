const {join} = require('path');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index',
  context: __dirname,
  output: {
    path: join(__dirname, '..', 'dist', 'style-loading'),
    filename: '[hash]-[name].js',
  },
  resolve: {
    alias: {
      'clock$': 'not-clock',
    },
    modules: ['node_modules', 'vendor'],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: join(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: [['env', {modules: false}], 'preact'],
        },
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'index.html.js',
    }),
  ],
};
