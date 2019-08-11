function loader(source) {
  let reg = /url\((.+?)\)/g
  let pos = 0
  let current
  let arr = ['let list = []']
  while( current = reg.exec(source)){
    let [matchurl, g] = current
    console.log(matchurl, g)
    let last = reg.lastIndex - matchurl.length
    arr.push(`list.push(${JSON.stringify(source.slice(pos, last))})`)
    // 把 g 替换成  require的写法
    pos = reg.lastIndex
    arr.push(`list.psuh('url('+require(${g})+')')`)
  }
  arr.push(`list.push(${JSON.stringify(source.slice(pos))})`)
  arr.push(`module.exports = list.join('')`)
  

  return source
}
module.exports = loader