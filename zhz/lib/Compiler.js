let fs = require('fs')
let path = require('path')
let babylon = require('babylon')
let t = require('@babel/types')
let traverse = require('@babel/traverse').default;
let genterator = require('@babel/generator').default
let ejs = require('ejs')
//  babylon 主要把源码 转换成ast
// @babel-traverse
// @babel/types
// @babel/genterator
class Compiler {
  constructor(config) {
    // entry output
    this.config = config
    // 需要保存入口文件的路径
    this.entryId; // './src/index.js'
    // 需要保存所有的模块依赖
    this.modules = {}
    this.entry = config.entry; // 入口路经
    this.root = process.cwd() // 工作路径
  }
  getSoure(modulePath) {
    let content = fs.readFileSync(modulePath, 'utf-8')
    return content
  }
  // 解析源码
  parse(source, parentPath) { // ast 解析语法树
    let ast = babylon.parse(source)
    let dependencies = []; // 依赖的数组
    traverse(ast, {
      CallExpression(p) { // a()
        let node = p.node; // 对应的节点
        if (node.callee.name === 'require') {
          node.callee.name = '__wepack_require__';
          let moduleName = node.arguments[0].value
          moduleName = moduleName + (path.extname(moduleName ? '' : '.js'))
          moduleName = './' + path.join(parentPath, moduleName);  'src/a.js'
          dependencies.push(moduleName);
          node.arguments = [t.stringLiteral(moduleName)]
        }
      }
    })
    let sourceCode = genterator(ast).code
    return { sourceCode, dependencies }
  }
  // 构建模块
  buildModule(modulePath, isEntry) {
    // 拿到内容 
    let source = this.getSoure(modulePath)
    // 模块id modulePath  =  modulePath - this.root
    let moduleName = './' + path.relative(this.root, modulePath)
    if (isEntry) {
      this.entryId = moduleName; // 保存入口的名字
    }
    // 解析需要吧soure源码进行改造 返回一个依赖列表
    let { sourceCode, dependencies } = this.parse(source, path.dirname(moduleName)) // ./src
    // 把 相对路径和模块的内容 对应起来
    this.modules[moduleName] = sourceCode

    dependencies.forEach(dep => { // 父 模块的 附属品 递归加载
      this.buildModule(path.join(this.root, dep), false)
    });
  }
  emitFile() { //发射文件
    // 用数据  渲染我们
    // 拿到输出到那个目录 输出路径
   let main = path.join(this.config.output.path, this.config.output.filename)
   // 模板的路径
   let templateStr = this.getSoure(path.join(__dirname, 'main.ejs'))
   let code = ejs.render(templateStr, {entryId: this.entryId,modules:this.modules})
   this.assets ={}
   //资源中 路径对应的代码
   this.assets[main] = code
   fs.writeFileSync(main, this.assets[main]);
  }
  run() {
    // z执行
    this.buildModule(path.resolve(this.root, this.entry), true);
    console.log(this.modules, this.entryId)
    // 发射一个文件
    this.emitFile()
  }
}
module.exports = Compiler 