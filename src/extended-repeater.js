const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1
  } 
    for(let i = 0; i < options.additionRepeatTimes; i++){

      if(options.addition || options.addition === false || options.addition === null){
        typeof options.addition !== 'string' ? str+=  String(options.addition) : str+= options.addition
        }    

      if(i !== options.additionRepeatTimes-1){
        options.additionSeparator ? str+= options.additionSeparator : str+= '|'     
      }

    }
 
  let string  = str
   
  if(options.repeatTimes>1){

    for(let i = 0; i < options.repeatTimes-1; i++){
      options.separator ? str+= options.separator : str+= '+'
      str+= string
   }
  }

  return str
}

module.exports = {
  repeater
};
