var webpack = require('webpack');

module.exports = {
  entry: './src/main',
  
  output: {
    path: './build',
    filename: 'main.js'
  },

  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue'
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        loader: {
          js: 'babel-loader'
        }
      }
    })
  ]
}
