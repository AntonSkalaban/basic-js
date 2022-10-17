const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.split('~~').length
  },
  addLink(value) {
    value !== ''
    ? this.chain.push(`( ${ String(value) } )`)
    : this.chain.push(`( )`)
    return this
  },
  removeLink(position) {
    if(this.chain.indexOf(this.chain[position])=== -1 || position === 0){
      this.chain = []
      throw new Error("You can\'t remove incorrect link!")
    }
     this.chain.splice(this.chain.indexOf(this.chain[position-1]), 1)
     return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let arr = [...this.chain]
    this.chain = []
    return arr.join('~~')
  }
};

module.exports = {
  chainMaker
};
