let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development', // 模式 默认两种模式 production development
  entry: './src/index.js', //入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 路径必须是一个绝对路径
  },
  plugins: [ // 数组  放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,   // 删除双引号
        collapseWhitespace: true,  // 代码变成一行
      },
      hash: true  //  加上hash戳
    })
  ],
  module: { // 模块
    // loader
    rules: [ // 规则 css-loader 解析 @import这种语法
      // style-loader 他是把css 插入header标签中
      // loader 的特点 希望单一
      // loader 用法字符串只用一个loader
      // 多个loader需要 []
      // loader的顺序  默认从右边向左执行 从上到下 顺序按照一定的规则
      // loader 还可以写成对象方式
      {
        // 可以处理less
        test: /\.css$/, use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          }, 'css-loader']
      },
      {
        // 可以处理less
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          'css-loader', /// 解析@import 语法  或者路径
          'less-loader' // 把less->处理成css文件
        ]
      }
    ]
  }
}