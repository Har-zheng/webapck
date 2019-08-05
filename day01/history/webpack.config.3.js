let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let TerserJSPlugin = require('terser-webpack-plugin')
let webpack = require('webpack')
module.exports = {

  optimization: { //优化项  
    // minimizer
    minimizer: [
      new UglifyJsPlugin({ //已经被官方推荐 terser-webpack-plugin 替换
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      // new TerserJSPlugin({}),
      new OptimizeCss({})
    ],
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
    }),
    new MiniCssExtractPlugin({ // 抽离css
      filename: 'main.css'
    }),
    // new webpack.ProvidePlugin({ // 在每个模块中 都注入$ 
    //   $: 'jquery'
    // })
  ],
  externals: {
    'jquery': 'JQuery'
  },
  module: { // 模块

    // loader
    rules: [ // 规则 css-loader 解析 @import这种语法
      // {
      //   test:require.resolve('jquery'),
      //   use: 'expose-loader?$'
      // },
      // {  // loader 默认 是从右向左 从上到下
      //   test: /\.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       enforce: 'pre' // previous  post
      //     }
      //   },
      // },
      {
        test: /\.js$/, // normal 普通的loader
        use: {
          loader: 'babel-loader',
          options: { // 用bable-loader  需要 把es6 转es5
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              "@babel/plugin-transform-runtime",
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        // 可以处理less
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        // 可以处理less   || sass styles  ->  node-sass sass-loader styles
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', /// 解析@import 语法  或者路径
          'postcss-loader',
          'less-loader' // 把less->处理成css文件
        ]
      }
    ]
  }
}