require('dotenv').config({ path: '../.env.local' }); // Loading environment variables
const ethers = require('ethers'); // Importing ethers.js library

const Classes = require('../abi/Classes.json'); // Importing ABI and bytecode of Classes contract

async function main() {
  // Extracting ABI and bytecode from imported JSON.
  const ClassesBytecode = Classes.bytecode;
  const ClassesAbi = Classes.abi;

  // Creating provider and wallet instances.
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
  const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);

  // Creating a ContractFactory instance to deploy the contract.
  const factory = new ethers.ContractFactory(ClassesAbi, ClassesBytecode, wallet);

  // Deploying the contract.
  const contract = await factory.deploy();
  await contract.deployed(); // Waiting for the contract to be deployed.
  console.log(`Contract deployed at address: ${contract.address}`);

  // Generate random IDs for class and session.
  // const classId = Math.floor(Math.random() * 1000000) + 1; // Random number between 1 and 1000000
  // const sessionId = Math.floor(Math.random() * 1000000) + 1;

  // // Enroll a class with the random ID.
  // const className = "Sample";
  // const enrollClassTx = await contract.enrollClass(className, classId);
  // await enrollClassTx.wait(); // Waiting for the enrollClass transaction to be mined
  // console.log(`Enrolled class: ${className} with ID: ${classId}`);

  // // Enroll a session for the class with the random session ID.
  // await contract.enrollClassSession(className, sessionId);
  // console.log(`Enrolled session for class: ${className} with session ID: ${sessionId}`);
}

main()
  .then(() => process.exit(0)) // Exiting the process if the tasks are successful.
  .catch((error) => {
    console.error(error); // Logging any errors occurred.
    process.exit(1); // Exiting the process with a non-zero status code.
  });
