const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = str.split('')
  let newStr = ''
  let elCount = 0 
  arr.forEach((el, indx) => {
    if(el === arr[indx+1]){
      elCount++
    } else {
      elCount++
      if(elCount !== 1){
        newStr += elCount
      }
      newStr+=el
      elCount = 0
    }
  })
  return newStr
}

module.exports = {
  encodeLine
};
