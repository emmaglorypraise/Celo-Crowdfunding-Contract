// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TestERC = await hre.ethers.getContractFactory("TestERC");
  const testERC = await TestERC.deploy(10000000);

  await testERC.deployed();

  console.log('TestERC Token Contract Deployed at:' , testERC.address );


  // TestERC Token Contract Deployed at: 0xA074AA195f06e7cc6cC7CfD5E4b1c77daea65245

  const RaiseMoney = await hre.ethers.getContractFactory("RaiseMoney");
  const raiseMoney = await RaiseMoney.deploy('0xA074AA195f06e7cc6cC7CfD5E4b1c77daea65245');

  await raiseMoney.deployed();

  console.log('Crowdfunding Contract Deployed at:' , raiseMoney.address );

  // Crowdfunding Contract Deployed at: 0x9Bd8B4AdE01699D32cCE5f4c5AceC0744Ce2F8BC


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
