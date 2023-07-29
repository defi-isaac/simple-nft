const hre = require("hardhat");

async function main() {
  const provider = hre.ethers.provider;

  // replace this with any address on the Goerli network
  const address = "0xAcC8cE5F8801E59a60E2Da9ac2133557E062da09";

  const balance = await provider.getBalance(address);
  console.log("Balance: ", balance.toString());

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
