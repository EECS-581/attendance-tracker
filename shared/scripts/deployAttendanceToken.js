/*
 * Prologue Comments
 * Name of code artifact: AttendanceToken Deployment Script
 * Brief description: This script deploys the AttendanceToken contract to the Mumbai testnet using ethers.js.
 * Programmer’s name: Hudson Headley
 * Date the code was created: 9-21-23

 * 
 * Preconditions:
 * - The environment variable PRIVATE_KEY must be correctly set in the project's .env file, representing
 *   the private key of the deploying account.
 * - The ABI and bytecode of AttendanceToken must be correctly imported.
 * 
 * Postconditions:
 * - The AttendanceToken contract is deployed to the Mumbai testnet and the address at which the contract
 *   is deployed is logged to the console.
 * 
 * Error and exception condition values or types that can occur:
 * - If the PRIVATE_KEY environment variable is not set, the deployment will fail.
 * - If the ABI or bytecode is incorrect, the deployment will fail.
 * - Any errors during the deployment will be caught and logged to the console.
 * 
 * Side effects:
 * - Deploys a new instance of the AttendanceToken contract to the Mumbai testnet.
 * 
 * Invariants:
 * - The ethers.js library, the ABI, and the bytecode of the contract must remain constant during the execution
 *   of this script.
 * 
 * Any known faults:
 * - Lack of error handling for scenarios where the environment variable PRIVATE_KEY is not properly set.
 * 
 */

require('dotenv').config({ path: './.env.local' });

const ethers = require('ethers'); // Importing ethers.js library

const AttendanceToken = require('../abi/AttendanceToken.json'); // Importing ABI and bytecode of AttendanceToken contract

async function main() {
  // Extracting ABI and bytecode from imported JSON.
  const AttendanceTokenBytecode = AttendanceToken.bytecode
  const AttendanceTokenAbi = AttendanceToken.abi;

  // Creating provider and wallet instances.
  console.log(process.env.NEXT_PUBLIC_PRIVATE_KEY)
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
  const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);

  // Creating a ContractFactory instance to deploy the contract.
  const factory = new ethers.ContractFactory(AttendanceTokenAbi, AttendanceTokenBytecode, wallet);
  console.log(factory)

  // Deploying the contract.
  try {
    console.log("deploying");
    const contract = await factory.deploy();
    console.log("test");
    console.log(contract.address);
    await contract.deployed(); // Waiting for the contract to be deployed.
    console.log(contract.address); // Logging the contract object.

    // Logging the address at which the contract is deployed.
    console.log(`Contract deployed at address: ${contract.address}`);
}
catch (error) {
    console.error("Deployment failed:");
    console.error(error.message);
    console.error("Full error object:", error);
}

}

main()
  .then(() => process.exit(0)) // Exiting the process if the deployment is successful.
  .catch((error) => {
    console.error(error); // Logging any errors occurred during the deployment.
    process.exit(1); // Exiting the process with a non-zero status code.
  });
