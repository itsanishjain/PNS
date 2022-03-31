const { ethers } = require("hardhat");

async function main() {
  // Create a new instance of the contract factory

  // Here parameter shpuld be the contract name
  const Contract = await ethers.getContractFactory("Domains");
  // Deploy the contract

  const domainContract = await Contract.deploy("jain");

  // wait unit the contract is mined
  await domainContract.deployed();

  // Get the address of the newly deployed contract
  console.log("Domain contract address", domainContract.address);

  const [owner, randomPersonWalletAddress] = await ethers.getSigners();


  console.log("Contract deployed by:", owner.address)

  const txn = await domainContract.register("itsanish", { value: ethers.utils.parseEther("0.5") });
  await txn.wait();

  const domainOwner = await domainContract.getAddress("itsanish");

  console.log("Domain owner", domainOwner);


  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));


}

// Run the task
main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });