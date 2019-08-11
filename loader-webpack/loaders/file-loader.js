let loaderUtils = require('loader-utils')

function loader(source) {
  // file-loader 
  let filename = loaderUtils.interpolateName(this, '[hash].[ext]', 
  { content:  source })
  this.emitFile(filename, source); //发射的文件
  console.log(source)
  return `module.exports ="${filename}"`
}
loader.raw = true; // 二进制
module.exports = loader