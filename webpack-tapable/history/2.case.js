class SynHook { // 钩子是同步的
  constructor(args){ // agrs => ['name]
    this.task = []
  }
  tap(name, task){
    this.task.push(task)
  }
  call(...args) {
    this.task.forEach((task) => task(...args))
  }
}
let hook = new SynHook(['name']);
hook.tap('react', function(name) {
  console.log('react', name)
})
hook.tap('node', function(name) {
  console.log('node', name)
})
hook.call('zhz');