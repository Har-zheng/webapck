
class AsyncParralleHook { // 钩子是同步的
  constructor(args){ // agrs => ['name]
    this.tasks = []
  }
  tapPromise(name, task){
    this.tasks.push(task)
  }
  promise(...args) {
  let tasks =  this.tasks.map(task => task(...args));
  return Promise.all(tasks)
  }
}
let hook = new AsyncParralleHook(['name']);
let total = 0
hook.tapPromise('react', function(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('react', name)
      resolve()
    }, 1000)
  })
})
hook.tapPromise('node', function(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node', name)
      resolve()
    }, 1000)
  })
})

hook.promise('zhz').then(function (){
  console.log('end!!!!')
});
// asyncParrallebailHook() 带保险的异步并发的钩子