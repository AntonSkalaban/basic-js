const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {

  let sum =0;
  
  const recursion = (n) => {
    let arr = String(n).split('')
      sum=0
    arr.forEach(el => sum += +el)
      debugger
    if(String(sum).split('').length===1) {
      return sum
    } else {
      
      recursion(sum)
    }
  }
  recursion(n)
  return sum
  }

module.exports = {
  getSumOfDigits
};
