let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 多入口
  mode: 'production', // 模式 默认两种模式 production development
  entry: {
    home: './src/index.js',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use:{
          loader: 'babel-loader', 
          options:{
            presets: ['@babel/preset-env']
          }
        }
       
      }
    ]
  },
  output: {
    // [name] home, other 
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    })
  ]
}