//NOT WORKING need to talk to cameron about contructor
//lets see

require('dotenv').config({ path: '../.env.local' }); // Loading environment variables
const ethers = require('ethers'); // Importing ethers.js library

const Businesses = require('../abi/Businesses.json'); // Importing ABI and bytecode of AttendanceToken contract

const AttendanceTokenAddress = "0x8FE018D5531698B4504aec62Cf0DA45F18A686c8";
const AttendeesAddress = "0x74855D9ea68e3c152EBb860Ae981Db7917F516a9";

async function main() {
  // Extracting ABI and bytecode from imported JSON.
  const BusinessesBytecode = Businesses.bytecode
  const BusinessesAbi = Businesses.abi;

  // Creating provider and wallet instances.
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
  const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);

  // Creating a ContractFactory instance to deploy the contract.
  const factory = new ethers.ContractFactory(BusinessesAbi, BusinessesBytecode, wallet);

  // Deploying the contract.
  const contract = await factory.deploy(AttendanceTokenAddress, AttendeesAddress);// EDIT THIS WITH CONSTRUCTOR INFO
  await contract.deployed(); // Waiting for the contract to be deployed.

  // Logging the address at which the contract is deployed.
  console.log(`Buisness Contract deployed at address: ${contract.address}`);
}

main()
  .then(() => process.exit(0)) // Exiting the process if the deployment is successful.
  .catch((error) => {
    console.error(error); // Logging any errors occurred during the deployment.
    process.exit(1); // Exiting the process with a non-zero status code.
  });