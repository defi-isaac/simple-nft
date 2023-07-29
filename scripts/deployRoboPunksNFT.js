const { ethers } = require("hardhat");

async function main() {
  const RoboPunksNFT = await ethers.deployContract("RoboPunksNFT");
  
  await RoboPunksNFT.waitForDeployment();
  
  console.log("RoboPunksNFT Contract Address:", await RoboPunksNFT.getAddress());

  console.log("Setting baseTokenUri...");
  await RoboPunksNFT.setBaseTokenUri("https://ipfs.io/ipfs/QmNMafv6HKxyy9mp8cRP6Sg8RieSxApe3DjmRgG9GhdfQx/");
  console.log("baseTokenUri set.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  /*
async function main() {
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPunksNFT = await RoboPunksNFT.deploy();

  await roboPunksNFT.deployed();

  console.log("RoboPunksNFT deployed to:", roboPunksNFT.address);
  
} */
/*

import {ethers} from "hardhat";

async function main() {
   // Grab the contract factory 
   const RoboPunksNFT = await ethers.getContractFactory("RoboPunksNFT");

   // Start deployment, returning a promise that resolves to a contract object
   const roboPunksNFT = await RoboPunksNFT.deploy(); // Instance of the contract 
   console.log("Contract deployed to address:", roboPunksNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  }); */
