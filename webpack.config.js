'use strict';

var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;
var nodeRoot = path.join(__dirname, 'node_modules');
var appRoot = path.join(__dirname, 'app');
var config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sanji-logger-ui.js'
  },
  resolve: {
    root: [nodeRoot],
    // npm-linked packages can locate missing dependencies in app's node_modules
    fallback: nodeRoot,
    alias: {
      'angular': nodeRoot + '/angular/angular.js',
      'jquery': nodeRoot + '/jquery/dist/jquery.js',
      'toastr.scss': nodeRoot + '/toastr/toastr.scss',
      'toastr': nodeRoot + '/toastr/toastr.js'
    },
    extensions: ['', '.js', '.json', 'html', 'scss', 'css']
  },
  resolveLoader: {
    root: nodeRoot
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint", exclude: /(node_modules)/}
    ],
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /(node_modules)/},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]', exclude: /(node_modules)/}
    ],
    noParse: []
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __TEST__: 'test' === NODE_ENV,
      __DEV__: 'development' === NODE_ENV,
      __RELEASE__: 'production' === NODE_ENV
    }),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
