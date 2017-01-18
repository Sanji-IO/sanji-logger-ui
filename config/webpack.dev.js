const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ROOT = path.resolve(__dirname, '../src');
const DIST = path.resolve(__dirname, '../dist');
const ENV = 'development';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
  host: HOST,
  port: PORT
});

module.exports = options => {
  return webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'cheap-module-eval-source-map',
    performance: {
      hints: false
    },
    entry: {
      polyfills: path.resolve(ROOT, 'polyfills.ts'),
      vendor: path.resolve(ROOT, 'vendor.ts'),
      main: path.resolve(ROOT, 'main.ts')
    },
    output: {
      path: DIST,
      filename: '[name].bundle.js'
    },
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      stats: 'errors-only',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'polyfills']
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(ROOT, 'index.html'),
        chunksSortMode: 'dependency'
      })
    ]
  });
};