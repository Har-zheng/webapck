let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
module.exports = {
  optimization: {
    // 分割代码块
    splitChunks: {
      cacheGroups: {
        //公用模块抽离
        common: {
          chunks: 'initial',
          minSize: 0, //大于0个字节
          minChunks: 2, //在分割之前，这个代码块最小应该被引用的次数
        },
        //第三方库抽离
        vendor: {
          priority: 1, //权重
          test: /node_modules/,
          chunks: 'initial',
          minSize: 0, //大于0个字节
          minChunks: 2, //在分割之前，这个代码块最小应该被引用的次数
        }
      }
    }
  },
  mode: 'production', // production development
  entry: {
    index: './src/index.js',
    others: './src/other.js'
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: './dist'
  },
  module: {
    noParse: /jquery/, //  不去解析jquery中的依赖库
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }],
        exclude: /node_modules/,
        include: path.resolve('src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}