
class AsyncParralleHook { // 钩子是同步的
  constructor(args){ // agrs => ['name]
    this.tasks = []
  }
  tapAsync(name, task){
    this.tasks.push(task)
  }
  callAsync(...args) {
  let finalCallback = args.pop()
  let index = 0;
  let next =()=> {
    if(this.tasks.length === index) return finalCallback()
    let task = this.tasks[index++]
    task(...args, next)
  }
  next()
  }
}
let hook = new AsyncParralleHook(['name']);
let total = 0
hook.tapAsync('react', function(name, cb) {
    setTimeout(() => {
      console.log('react', name)
      cb()
    }, 1000)
})
hook.tapAsync('node', function(name, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node', name)
      cb()
    }, 1000)
  })
})

hook.callAsync('zhz',function (){
  console.log('end!!!!')
});
// asyncParrallebailHook() 带保险的异步并发的钩子