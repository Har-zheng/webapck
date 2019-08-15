let path = require('path')
let DonePlugin = require('./plugins/DonePlugin')
let AsyncPlugin = require('./plugins/AsyncPlugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let FileLisrtPlugin = require('./plugins/FileLisrtPlugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let InlineSourcePlugin = require('./plugins/inlineSourcePlugin')
let UploadPlugin = require('./plugins/UploadPlugin')
module.exports = {
  mode: 'development',
  entry : './src/index.js',
  module: {
    rules: [
      {test: /\.css$/ ,use: [MiniCssExtractPlugin.loader, 'css-loader']}
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://pw9gmzl9j.bkt.clouddn.com/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'min.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
     new FileLisrtPlugin({
       filename: 'list.md'
     }),
     new UploadPlugin({
       bucket: 'zhzwebpack',
       domain: 'pw9gmzl9j.bkt.clouddn.com',
       accessKey: 'saqHWhPQUDfuj7kEeMsM6Ab0avlnIqzBNreqVVCt',
       secretKey: '3bM-wkA30V37W1gI4pjTyiRAuMB65V4Vla_ZnCMN',
     })
  ]
}