#! /usr/bin/env node

// 1 需要找到当前执行的路径 拿到wepack.config.js
// console.log('start123')
let path = require('path')

// config配置文件
let config = require(path.resolve('webpack.config.js'))

let Compiler = require('../lib/Compiler')
let compiler = new Compiler(config);

// 标识运行 编译
compiler.run()