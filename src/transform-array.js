const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 function transform(arr) {
  
  if(!Array.isArray(arr)){
      throw new Error ("\'arr\' parameter must be an instance of the Array!")
    }
  
    if(arr.length === 0){
      return arr
    }
    
    
    let copyArr = [...arr]
    let newArr = []
    let copyArrCounter = copyArr.filter(el => el === '--double-next'|| el === '--double-prev'||el ===  '--discard-prev'|| el === '--discard-next' ).length
    
  
    if((arr[0] === '--discard-prev' || arr[0] ===   '--double-prev') && copyArrCounter <=1){
      copyArr.shift()

    } else if((arr[arr.length-1] === '--discard-next' || arr[arr.length-1] === '--double-next') && copyArrCounter <=1){
        copyArr.pop()
      
    } else if((arr[arr.length-1] === '--discard-next' || arr[arr.length-1] === '--double-next') && copyArrCounter >1){
        copyArr.pop()
        copyArrCounter--
      }
      
      copyArr.forEach((el, indx) => { 

        switch(el) {
              case '--double-next':
                newArr.push(copyArr[indx+1])
                break;

              case '--double-prev':
                newArr.push(copyArr[indx-1])  
                break;

              case '--discard-prev':
                newArr.pop()
                break;  

              case '--discard-next':
                copyArr.splice(indx, 2)      
              break;

              default:
                newArr.push(el)
        }
      })
    return newArr
    }
    
module.exports = {
  transform
};
