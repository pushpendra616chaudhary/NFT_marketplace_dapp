const { ethers } = require("hardhat");

const networkConfig = {
  80001: {
    name: "mumbai",
    vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane: "0xd154ea2a8ad6617713df49b9d1b54681bd6485f0f0847077926719659a2fda79",
    subscriptionId: "8114",
    callbackGasLimit: "500000",
    interval: '30'
},
  
};

const developmentChains = ["mumbai"];
module.exports = { networkConfig, developmentChains };
