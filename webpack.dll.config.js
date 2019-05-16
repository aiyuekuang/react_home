const path = require('path'),
  fs = require('fs'),
  webpack = require('webpack');

const vendors = [
  'react',
  'react-dom',
  'axios',
  'react-router',
  'react-router-dom',
  'antd',
  'moment'
];

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: 'Dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll', 'manifest.json'),
      name: '[name]_[hash]',
      context: __dirname,
    }),
  ],
};
