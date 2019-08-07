let { AsyncParallelHook } = require('tapable');
// 异步的钩子 (串行) 并行 需要等待所有并发的异步事件执行后在执行回调函数

// 
class Lesson {
  constructor() {
    this.index = 0;
    this.hooks = {
      arch: new AsyncParallelHook(['name']),
    }
  }
  tap() { // 注册监听函数
    this.hooks.arch.tapAsync('node',  (name, cb) =>{
      setTimeout(() => {
        console.log('node', name)
        cb()
      }, 1000)
    })
    this.hooks.arch.tapAsync('react',  (data,cb) => {
      setTimeout(() => {
        console.log('node', data)
        cb();
      }, 1000)
    })
  }
  start() {
    this.hooks.arch.callAsync('zhz', ()=> {
      console.log('end!!')
    });
  }
}
let l = new Lesson();

l.tap(); //  注册这两个事件

l.start(); // 启动钩子