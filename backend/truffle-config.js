const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.15'
    }
  },
  networks: {
    inf_Lottery_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/rehanganapathy/Desktop/key.txt', 'utf-8'), "https://goerli.infura.io/v3/API_KEY")
    }
  }
};

//1918065b7ee14d819303e79c53643dab
