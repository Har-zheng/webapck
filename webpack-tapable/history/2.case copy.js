class SynBailHook { // 钩子是同步的
  constructor(args){ // agrs => ['name]
    this.tasks = []
  }
  tap(name, task){
    this.tasks.push(task)
  }
  call(...args) {
    let ret; 
    let index = 0; // 当前要先执行的       
    do{
      ret = this.tasks[index++](...args)
    }while(ret === undefined && index < this.tasks.length)
  }
}
let hook = new SynBailHook(['name']);
hook.tap('react', function(name) {
  console.log('react', name)
  return '停止向下执行'
})
hook.tap('node', function(name) {
  console.log('node', name)
})
hook.call('zhz');