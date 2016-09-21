const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

module.exports = {
  context: path.join(__dirname, 'src/app'),
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './dist',
    hot: true,
  },
  entry: './index.js',
  output: {
    path: distDir,
    filename: 'bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '/src/index.html'),
      to: path.join(distDir, 'index.html'),
    }]),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
};
