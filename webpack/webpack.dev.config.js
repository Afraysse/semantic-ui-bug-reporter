var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.js',
  module: {
      loaders: [{
        test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
      },{
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  }
}
