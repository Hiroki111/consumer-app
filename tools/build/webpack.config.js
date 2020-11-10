const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const isDevMode = process.env.NODE_ENV !== 'production';

function getDevtoolLevel(isDevMode = false) {
  if (isDevMode) return 'inline-source-map';

  return 'source-map';
}

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  name: 'server',
  target: 'node',
  entry: path.resolve(__dirname, '../../src/server/index.js'),
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },

  // https://webpack.js.org/configuration/devtool/
  devtool: getDevtoolLevel(isDevMode),

  externals: [nodeExternals()],

  node: {
    __filename: true,
    __dirname: true,
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // We don't want to use project .babelrc as for server build
              // we want to specify a separate config
              babelrc: false,

              cacheDirectory: isDevMode,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: { node: 'current' },
                    debug: true,
                  },
                ],
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        ],
      },
    ],
  },
};
