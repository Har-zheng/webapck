let { SyncWaterfallHook } = require('tapable')
class SynBailHook { // 钩子是同步的
  constructor(args){ // agrs => ['name]
    this.tasks = []
  }
  tap(name, task){
    this.tasks.push(task)
  }
  call(...args) {
    let [first, ...others] = this.tasks
    let ret = first(...args)
    others.reduce((a,b) => {
      b(a);

    },ret)
  }
}
let hook = new SyncWaterfallHook(['name']);
hook.tap('react', function(name) {
  console.log('react', name)
  return 'react ok'
})
hook.tap('node', function(name) {
  console.log('node ok', name)
})
hook.tap('webpacak', function(data) {
  console.log('webpacak', data)
})
hook.call('zhz');