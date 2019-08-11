let less = require('less')
function laoder(soure) {
  let css;
  less.render(soure, function(err, r){ // r.css
    css = r.css
  })
  return css
}
module.exports = laoder