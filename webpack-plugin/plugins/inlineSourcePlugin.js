// 把外联的标签 变成内联的标签
const HtmlWebpackPlugin = require('html-webpack-plugin');
class InlineSourcePlugin {
  constructor({match}) {
    this.reg = match //正则
  }
  processTag(tag, compilation) { //处理某一个biaoqian
    let newTag,url;
    console.log(this.reg)
    console.log(this.reg.test)
    if(tag.tagName === 'link' && this.reg.test(tag.attributes.href)){
     newTag = {
       tagName: 'style',
       attributes: {type: 'text/css'}
     }
     url = tag.attributes.href
    }
    if(tag.tagName === 'script' && this.reg.test(tag.attributes.src)){
      newTag = {
        tagName: 'script',
        attributes: {type: 'application/javascript'}
      }
      url = tag.attributes.src
     }
     if(url){
       newTag.innerHTML = compilation.assets[url].source(); // 文件的内容 放到innner 属性上
       delete compilation.assets[url]
       return newTag
      }
    return tag;
  }
  processTags(data, compilation) { //处理引入标签的数据
    let headTags = [];
    let bodyTags = [];
    data.headTags.forEach(headTag => {
      headTags.push(this.processTag(headTag, compilation))
    });
    data.bodyTags.forEach(bodyTag => {
      bodyTags.push(this.processTag(bodyTag, compilation))
    });
    return { ...data, headTags, bodyTags }
  }
  apply(compiler) {
    // 要通过 webpack plugin来实现这个功能
    compiler.hooks.compilation.tap('InlineSourcePlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync('alterPlugin',
        (data, cb) => {
          data = this.processTags(data, compilation)
          cb(null, data);
        })
    })
  }
}
module.exports = InlineSourcePlugin