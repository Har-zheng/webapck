
// webpack 打包我们的图片
// 1 在js中创建图片来引入
 // file-loader 默认会在内部生成一张图片 到build目录下
 // 把生成的图片名字返回回来
import './index.css'
import favicon from './favicon.ico' // 把图片引入 返回的结果是一个新的图片地址

let image = new Image();
console.log(favicon)
image.src = favicon ;  // 就是普通的字符串
document.body.appendChild(image)

// 2  在css引入 background('url)
// 3 <img src=""/>



// import $ from 'jquery'
// export-loader 暴露全局 的 loader 内联loader
// pre 前面执行的loader normal 普通的loader 内联loader 后置 postloader

// import $ from 'jquery'
// console.log(window.$)
// 1 expose-loader 暴露到window
// 2 ProvidePlugin 给每个模块提供一个$
// 3 引入不打包的方式

// let str = require('./a.js')
// console.log(str)

// require('./index.css');
// require('./index.less')

// let fn = () => {
//   console.log('es6')
// }
// fn()
// @log  // 装饰器

// class A{
//   a = 1;
// }
// let a = new A()

// console.log(a.a)

// function log(target) {
//   console.log(target, '21')
// }

