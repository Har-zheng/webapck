let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin')
let webpack = require('webpack')
// 1) clearWebpackPlugin
// 2) copyWebpackPlugin 
// 3) bannerPlugin 内置
module.exports = {
  // 多入口
  mode: 'production', // 模式 默认两种模式 production development
  entry: { home: './src/index.js', },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: { // 解析 第三包 common
    modules:[path.resolve('node_modules')],
    extensions: ['.js', '.css', '.json', '.vue']
    // mainFields: ['style', 'main'],
    // mainFiles 入口文件的名字
    // alias: {// 别名 vue vue.runtime
    //   bootstrap: 'bootstrap/dist/css/bootstrap.css'
    // }
  },
  devServer: { 
      // 1 
    // proxy: { // 重写的方式 把请求代理到服务器
    //   '/api': {
    //     target: 'http://localhost:3000', // 配置代理
    //     pathRewrite: { '/api':''}
    //   }
    // },
    // 2 单纯模拟数据
    // before(app){ // 提供的方法
    //   app.get('/user', (req, res) => {
    //     res.json({name: 'zhz-before'})
    //   })
    // },
     //3 有服务端 不用代理来处理 能不能再服务端中启动 webpack 端口用服务端端口

  },
  output: {
    // [name] home, other 
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify('production'),
      FLAG: 'true',
      EXPRESSION: 1+1
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {from: './doc', to:'./'}
    // ]),
    // new webpack.BannerPlugin('make 2019 by zhz')
  ]
}
