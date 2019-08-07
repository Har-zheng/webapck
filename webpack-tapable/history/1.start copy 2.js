let { SyncWaterfallHook } = require('tapable');
// watefall 瀑布
class Lesson{
  constructor(){
    this.hooks = {
      arch: new SyncWaterfallHook(['name']),
    }
  }
  tap(){ // 注册监听函数
    this.hooks.arch.tap('node',function(name) {
      console.log('node', name)
      return '一定要学好 后台node python'
    })
    this.hooks.arch.tap('react',function(data) {
      console.log('react', data)
    })
  }
  start(){
    this.hooks.arch.call('zhz');
  }
}
let l = new Lesson();

l.tap(); //  注册这两个事件

l.start(); // 启动钩子