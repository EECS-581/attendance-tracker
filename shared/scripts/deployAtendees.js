require('dotenv').config({ path: '../.env.local' }); // Loading environment variables
const ethers = require('ethers'); // Importing ethers.js library

const Attendees = require('../abi/Attendees.json'); // Importing ABI and bytecode of AttendanceToken contract

async function main() {
  // Extracting ABI and bytecode from imported JSON.
  const AttendeesBytecode = Attendees.bytecode
  const AttendeesAbi = Attendees.abi;

  // Creating provider and wallet instances.
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
  const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);

  // Creating a ContractFactory instance to deploy the contract.
  const factory = new ethers.ContractFactory(AttendeesAbi, AttendeesBytecode, wallet);

  // Deploying the contract.
  const contract = await factory.deploy();
  await contract.deployed(); // Waiting for the contract to be deployed.
  console.log(contract) // Logging the contract object.

  // Logging the address at which the contract is deployed.
  console.log(`Contract deployed at address: ${contract.address}`);
}

main()
  .then(() => process.exit(0)) // Exiting the process if the deployment is successful.
  .catch((error) => {
    console.error(error); // Logging any errors occurred during the deployment.
    process.exit(1); // Exiting the process with a non-zero status code.
  });