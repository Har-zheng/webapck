module.exports = 'zhz';
require('@babel/polyfill')
class B{

}
function * gen(params){
  yield 1;
}
console.log(gen().next())

'aa'.includes('aa')