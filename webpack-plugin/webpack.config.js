let path = require('path')
let DonePlugin = require('./plugins/DonePlugin')
let AsyncPlugin = require('./plugins/AsyncPlugin')
let HtmlWebpackPlugin = require(' html-webpack-plugin')
let FileLisrtPlugin = require('./plugins/FileLisrtPlugin')
module.exports = {
  mode: 'development',
  entry : './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
     new FileLisrtPlugin({
       filename: 'list.md'
     })
  ]
}