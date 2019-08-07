
class AsyncParallelHook { // 钩子是同步的
  constructor(args){ // agrs => ['name]
    this.tasks = []
  }
  tapAsync(name, task){
    this.tasks.push(task)
  }
  callAsync(...args) {
    let finalCallback = args.pop()
    let index = 0
    let  done = ()=> {
      index++;
      if(index === this.tasks.length){
        finalCallback()
      }
    }
    this.tasks.forEach(task => {
      task(...args, done)
    })
  }
}
let hook = new AsyncParallelHook(['name']);
let total = 0
hook.tapAsync('react', function(name,cb) {
  setTimeout(() => {
    console.log('react', name)
    cb()
  }, 1000)
})
hook.tapAsync('node', function(name,cb) {
  setTimeout(() => {
    console.log('node', name)
    cb()
  }, 1000)
})

hook.callAsync('zhz', function (){
  console.log('end!!!!')
});