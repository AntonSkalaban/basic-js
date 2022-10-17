const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(bool = true){
    this.isDirect = bool
  }

  encrypt(message, key) {

    if(arguments.length < 2 || !arguments[0] ||!arguments[1] ){
      throw new Error('Incorrect arguments!')
    }

    const alphabet = ['a', 'b', 'c',  'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
    const mIndexes = message.toLowerCase().split('').map(el => alphabet.indexOf(el) !== -1 ? alphabet.indexOf(el) : el )
    const kIndex =  key.toLowerCase().split('').map(el => alphabet.indexOf(el))
    const kIndexes = []
    
    let i = 0;
    mIndexes.forEach(el => {     
      if(typeof el === 'number' ){
        if(i < kIndex.length){
          kIndexes.push(kIndex[i])
          i++
        } else {
          i = 0
          kIndexes.push(kIndex[i])
          i++
        }
      } else {
        kIndexes.push('')
      }
    })

    const aIndexes  =  mIndexes.map((el,indx) => { 
     return (el + kIndexes[indx] >= 26) 
         ?  el = el + kIndexes[indx] - 26
         :  el = el + kIndexes[indx]
    })

    return (  this.isDirect 
                ? aIndexes.map(el=> typeof el === 'number' ?  alphabet[el] : el).join('').toUpperCase() 
                : aIndexes.map(el=> typeof el === 'number' ?  alphabet[el] : el).reverse().join('').toUpperCase()
    )
  }

  decrypt(message, key) {

    if(arguments.length < 2 || !arguments[0] ||!arguments[1] ){
      throw new Error('Incorrect arguments!')
    }

    const alphabet = ['a', 'b', 'c',  'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
    const mIndexes = message.toLowerCase().split('').map(el => alphabet.indexOf(el) !== -1 ? alphabet.indexOf(el) : el )
    const kIndex =  key.toLowerCase().split('').map(el => alphabet.indexOf(el))
    const kIndexes = []
    
    let i = 0;
    mIndexes.forEach(el => {     
      if(typeof el === 'number' ){
        if(i < kIndex.length){
          kIndexes.push(kIndex[i])
          i++
        } else {
          i = 0
          kIndexes.push(kIndex[i])
          i++
        }
      } else {
        kIndexes.push('')
      }
    })
  
    const aIndexes  =  mIndexes.map((el,indx) => { 
     if(typeof el !== 'number'){
        return   el
     }else{
         if(el - kIndexes[indx] >= 0){
         return  el = el - kIndexes[indx] }
         else {
         return el = el - kIndexes[indx] +26 
         }
     }
    })

    return ( this.isDirect 
              ? aIndexes.map(el=> typeof el === 'number' ?  alphabet[el] : el).join('').toUpperCase()
              : aIndexes.map(el=> typeof el === 'number' ?  alphabet[el] : el).reverse().join('').toUpperCase()
    )
  }
}

const directMachine = new VigenereCipheringMachine();


module.exports = {
  VigenereCipheringMachine
};
