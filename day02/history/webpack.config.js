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
  // 主要  定位错误
  // 1) 源码映射  会单独生成一个 sourcemap 文件 出错了 会表示  列和行  大 和 全
  // 2) 不会产生单独的文件 但可以显示行和列
  // devtool: 'source-map', // 增加映射文件 可以帮我们调试源码文件
  //  devtool: 'eval-source-map',不会产生单独的文件 但是可以显示行和列

  // 3)   不会产生列 但是是一个单独的映射文件 产生后保留起来 用来后面的调试 
  // devtool: 'cheap-module-source-map',
  // 4 ) 不会产生文件 集成在打包后的文件中 不会产生列
  // devtool: 'cheap-module-eval-source-map',

  devtool: 'cheap-module-eval-source-map',
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