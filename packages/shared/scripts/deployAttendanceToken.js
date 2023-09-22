require('dotenv').config()
const ethers = require('ethers');

const AttendanceToken = require('../abi/AttendanceToken.json');

async function main() {

  const AttendanceTokenBytecode = AttendanceToken.bytecode
  const AttendanceTokenAbi = AttendanceToken.abi;


  const provider = new ethers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com');
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const factory = new ethers.ContractFactory(AttendanceTokenAbi, AttendanceTokenBytecode, wallet);

  const contract = await factory.deploy();
  await contract.waitForDeployment();
  console.log(contract)

  console.log(`Contract deployed at address: ${contract.target}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });