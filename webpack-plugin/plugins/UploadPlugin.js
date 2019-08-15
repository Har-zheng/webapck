let path = require('path')
let qiniu = require('qiniu')

class UploadPlugin {
  // constructor
  constructor(options) {
    let { bucket = '', domain = "", accessKey = '', secretKey = '' } = options
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let putPolicy = new qiniu.rs.PutPolicy({ scope: bucket });
    this.uploadToken = putPolicy.uploadToken(mac);
    let config = new qiniu.conf.Config();
    this.formUploader = new qiniu.form_up.FormUploader(config)
    this.putExtra = new qiniu.form_up.PutExtra()
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tapPromise('UploadPlugin', (compiation) => {
      let assets = compiation.assets;
      let promises = []
      Object.keys(assets).forEach(filename => {
        promises.push(this.uploade(filename))
      })
      return Promise.all(promises)
    })
  }
  uploade(filename) {
    return new Promise((resolve, reject) => {
      let readFile = path.resolve(__dirname, '../dist', filename)
      this.formUploader.putFile(this.uploadToken, filename, readFile, this.putExtra, function (respErr,
        respBody, respInfo) {
        if (respErr) {
          reject(respErr);
        }
        if (respInfo.statusCode == 200) {
          resolve(respBody)
        } else {
          console.log(respInfo.statusCode);
          console.log(respBody);
        }
      });
    })
  }
}
module.exports = UploadPlugin

