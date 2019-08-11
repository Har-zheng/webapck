let path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modeles', path.resolve(__dirname, 'loaders')],
    // modules: ['node_modeles', path.resolve(__dirname, 'banner')],
    // alias: {
    //   loader1:  path.resolve(__dirname, 'loader', 'loader1.js')
    // }
  },
  devtool: 'source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.png$/,
        // 目的就是根据图片生成md5 发射到dist目录下  file-loader还会返回 当前的图片路径
        use: {
          loader: 'url-loader',
          options: {
            limit: 200*1024
          }
        }
      },
      {
        test: /\.js$/,
        use: { /**zhz **/
          loader: 'banner-loader',
          options: {
            text: '宏振',
            filename: path.relative(__dirname, 'banner.js')
          }
        }
      }
    ]
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['@babel/preset-env']
    //       }
    //     }
    //   }
    // ]
  }
}