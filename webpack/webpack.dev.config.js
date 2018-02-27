var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.js',
  module: {
      loaders: [{
        test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
      },{
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
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
