require('dotenv').config({ path: './.env.local' }); // Loading environment variables
const ethers = require('ethers'); // Importing ethers.js library

const Wallet = require('../abi/Wallet.json'); // Importing ABI and bytecode of Wallet contract
const WalletFactory = require('../abi/WalletFactory.json'); // Importing ABI and bytecode of WalletFactory contract

async function main() {
  // Creating provider and wallet instances.
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
  const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);


  // Deploying WalletFactory contract
  const walletFactoryFactory = new ethers.ContractFactory(WalletFactory.abi, WalletFactory.bytecode, wallet);
  const walletFactoryContract = await walletFactoryFactory.deploy(); // Note: If the WalletFactory contract has constructor arguments, you need to pass them here.
  await walletFactoryContract.deployed();
  console.log(`WalletFactory contract deployed at address: ${walletFactoryContract.address}`);
}

main()
  .then(() => process.exit(0)) // Exiting the process if the deployment is successful.
  .catch((error) => {
    console.error(error); // Logging any errors occurred during the deployment.
    process.exit(1); // Exiting the process with a non-zero status code.
  });
