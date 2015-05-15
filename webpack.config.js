'use strict';

var path = require('path');

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
      path: __dirname,
      filename: "index.js"
  },
  module: {
      loaders: [
          { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader' }
      ]
  }
};