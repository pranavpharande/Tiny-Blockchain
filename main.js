
const sha256 = require('crypto-js/sha256');
const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index,
            this.timestamp = timestamp,
            this.data = data,
            this.previousHash = previousHash,
            this.hash = this.calculateHash();
    }

//create a new method 
//take the properties from the block run them through hash function and return the hash
calculateHash() {
    return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

    }

}
class Blockchain {
    constructor() {
        this.chain=[this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, "23/02/2022", "Genesis Block", "0");
        
        
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    //newblock argument ?
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
   

}

//create instance 
let pranavCoin = new Blockchain();
pranavCoin.addBlock(new Block(1, "23/02/2022", { amount: 5 }));
pranavCoin.addBlock(new Block(2, "23/02/2022", { amount: 5 }));
console.log(JSON.stringify(pranavCoin,null,4))