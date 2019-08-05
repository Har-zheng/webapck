let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: { //  开发环境  服务的配置
    port: 3000,
    progress: true, // 打开压缩进度条
    contentBase: './dist',  // 服务进程  指定启动文件夹
    compress: true //  ... 压缩
  },
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
  ]
}