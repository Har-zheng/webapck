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
  watch: true,
  watchOptions: { // 监控的选项
    poll: 1000, // 每秒 问我 1000次
    aggregateTimeout: 500, // 防抖 输入代码检测
    ignored: /node_modules/ // 不需要进行监控那个文件
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