let loaderUtils = require('loader-utils')
function loader(sorce) {
  let str = `
  let style = document.createElement('style')
  style.innerHTML = ${JSON.stringify(sorce)}
  document.head.appendChild(style)
  `
  return str
}

// 在style-loader 上 写了pitch
// style-loader less-loader
loader.pitch = function (remainingRequest) {
  console.log(remainingRequest)
  let str = `
  let style = document.createElement('style')
  style.innerHTML = ${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)}
  document.head.appendChild(style)
  `
  return str
}
module.exports = loader

