class FileLisrtPlugin{
  constructor({filename}){
    this.filename = filename
  }
  apply(compiler){
    // 文件已经准备好了 发射
    // emit
    // console.log(compiler)
    compiler.hooks.emit.tap('FilelistPlugin', (compilation) => {
     let assets =  compilation.assets
     let content = ' ### zhz md文档'
     Object.entries(assets).forEach(([filename,statObj]) => {
      content += `- ${filename} ${statObj.size()}`
     })
     assets[this.filename] = {
       source() {
        return content
       },
       size() {
        return content.length
       }
     }
    })
  }
}
module.exports = FileLisrtPlugin