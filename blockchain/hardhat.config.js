require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

//const RINKEBY_RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/dwkjWGX6WYCm1aKlP1JiQyL0A6Jxbos8";
//const PRIVATE_KEY = "d154ea2a8ad6617713df49b9d1b54681bd6485f0f0847077926719659a2fda79";
//const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
//const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const { PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

module.exports = {
  
  networks: {
    
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      
    }
  },
  
  gasReporter: {
    enabled: true, 
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true
  },
  solidity: "0.8.7",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  mocha: {
    timeout: 40000
  }
};
