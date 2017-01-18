const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

const ROOT = path.join(__dirname, 'src');
const METADATA = {
  baseUrl: '/',
  host: '0.0.0.0',
  // port is determined from npm config
  // which is set in package.json
  // "config": {
  //    "port": "9000"
  // }
  port: process.env.npm_package_config_port || 9000
};

module.exports = options => {
  return {
    context: ROOT,
    resolve: {
      extensions: ['.ts', '.js', '.json', 'css']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'tslint-loader',
          exclude: /node_modules/,
          enforce: 'pre'
        },
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [path.resolve(ROOT, 'index.html')]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(options.env || 'development')
        }
      }),
      new CheckerPlugin()
    ]
  };
};