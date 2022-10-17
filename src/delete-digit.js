const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {

  let arr = String(n).split('')
  let numbers=[]
  let copyArr = [...arr]
  arr.forEach((el,indx) => {
    copyArr.splice(indx,1)
      numbers.push(copyArr.join(''))
      console.log(numbers)
    copyArr = [...arr]
  })
  return Math.max(...numbers)
}


module.exports = {
  deleteDigit
};
