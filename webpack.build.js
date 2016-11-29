const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-logger-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjLogger';
config.externals = [
  'angular',
  'toastr'
];

config.module.rules = [
  {test: /\.js$/, loader: 'ng-annotate-loader', exclude: /(node_modules)/, enforce: 'post'},
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      notExtractLoader: 'style-loader',
      loader: 'css-loader!postcss-loader!sass-loader?includePaths[]=' + bourbon
    })
  },
  {test: /\.css$/, loader: 'style!css!postcss'}
].concat(config.module.rules);

config.plugins.push(
  new ExtractTextPlugin('sanji-logger-ui.css'),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true,
    options:{
      postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
