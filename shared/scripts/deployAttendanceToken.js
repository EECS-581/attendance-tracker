// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const AttendanceToken = await hre.ethers.getContractFactory("AttendanceToken");
  const token = await AttendanceToken.deploy();

  await token.deployed();

  console.log("AttendanceToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
