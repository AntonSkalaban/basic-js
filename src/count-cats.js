const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let catsCount = 0
  arr.forEach(el => {
    if(Array.isArray(el)){
      el.forEach(el => {
        el === '^^'
        ? catsCount +=1
        : catsCount +=0
        })
      }
    })
    return catsCount
  }


module.exports = {
  countCats
};
