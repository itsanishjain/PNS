require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

/* 
getting the env varialbes

Note: Always Keep them in env file and never deploy them to git

Your MUMBAI_PRIVATE_KEY is same for all the networks, either it is mainnet or any other network so "KEEP IT SECRET"

*/



const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;


console.log("ALCHEMY_API_KEY_URL", ALCHEMY_API_KEY_URL);
console.log("MUMBAI_PRIVATE_KEY", MUMBAI_PRIVATE_KEY);


/* 
  Define the Rinkeby network as our deploment network 

  You can use any other Networks Just Change the Alchemy api key and 
  private key accordingly. 

*/

module.exports = {
  solidity: "0.8.4", // Change accoring to your solidity version
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
    // Add more Networks here
  },
};