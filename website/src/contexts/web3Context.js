/* 
 * Prologue Comments
 * Name of code artifact: Web3 Context Provider
 * Brief description: This code sets up a React context named Web3Context and a provider
 * named Web3Provider for this context. It provides functionalities related to interacting with
 * Ethereum blockchain via ethers.js, such as creating instances of provider and signer, 
 * and interacting with a smart contract named AttendanceToken.
 * Programmer’s name: Hudson Headley
 * Date the code was created: 9-24-23

 * Preconditions:
 * - The environment variables NEXT_PUBLIC_INFURA_URL and NEXT_PUBLIC_PRIVATE_KEY
 *   must be correctly set in the project's .env file.
 * - AttendanceToken ABI must be correctly imported.
 * 
 * Postconditions:
 * - Provides a context with functions and states that allow interaction with Ethereum blockchain and
 *   a specific smart contract.
 * 
 * Error and exception condition values or types that can occur:
 * - If the environment variables are not properly set, connection to the Ethereum blockchain may fail.
 * - Any errors or exceptions during the Ethereum transaction are logged to the console but not handled.
 * 
 * Side effects:
 * - Console logs the results of Ethereum transactions and balances.
 * 
 * Invariants:
 * - The ethers.js library must remain constant for the duration of the component's lifecycle.
 * 
 * Any known faults:
 * - Lack of error handling for scenarios where environment variables are not properly set, and
 *   during the Ethereum transactions.
 * 
 */

import { ethers, providers } from "ethers"; // Importing necessary components and functions from ethers.js
// Loading environment variables


import { createContext, useContext, useState, useEffect, useCallback } from 'react'; // Importing React hooks: createContext, useContext, useState, useEffect, useCallback
const AttendanceToken = require('../abi/AttendanceToken.json'); // Importing ABI of AttendanceToken contract
const Classes = require('../abi/Classes.json'); // Importing ABI of Classes contract
const WalletFactory = require('../abi/WalletFactory.json'); // Importing ABI of WalletFactory contract


const Web3Context = createContext(); // Creating a new React context named Web3Context.

// useWeb3Context is a custom hook that provides Web3Context.
export const useWeb3Context = () => {
  return useContext(Web3Context);
};

// Web3Provider component provides the Web3Context to its children components.
export const Web3Provider = ({ children }) => {
  // Initializing states.
  const [provider, setProvider] = useState(
    process.env.NEXT_PUBLIC_INFURA_URL
      ? new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL)
      : null
  );

  const [signer, setSigner] = useState(
    process.env.NEXT_PUBLIC_PRIVATE_KEY && provider
      ? new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider)
      : null
  );
  const [AttendanceTokenContract, setAttendanceTokenContract] = useState(null);
  const [balance, setBalance] = useState("loading...");

  const [userWallet, setUserWallet] = useState(null);

  useEffect(() => {
    // Retrieve userWallet from localStorage when the component mounts, if running on client side
    if (typeof window !== 'undefined') {
      const savedUserWallet = localStorage.getItem('userWallet');
      if (savedUserWallet) {
        setUserWallet(JSON.parse(savedUserWallet));
      }
    }
  }, []);


    const attendeesAddress ="0xFb8e15EdE3a4013Bb3d0b92b00505eB7c0a49EE5"

    async function createWallet(authId, userType) {
      // Creating a contract instance.
      let WalletFactoryContract= new ethers.Contract('0x44e3A12Ed8eC1ed5b70c3A344809122d7396DECe', WalletFactory.abi, signer);
      
      console.log("Creating Wallet"); // Logging the start of the minting process.

      const tx = await WalletFactoryContract.createWallet("0x06e6620C67255d308A466293070206176288A67B",authId, userType); // Minting tokens.

      console.log(tx); // Logging transaction object.
      await tx.wait(); // Waiting for the transaction to be mined.

      console.log(tx)

      console.log("Created Wallet"); // Logging the end of the minting process.

    }
    
    // Define an asynchronous function to get the balance of the AttendanceToken.
    async function getAttendanceBalance(address) {
      let AttendanceTokenContract= new ethers.Contract('0x918C774D35e53e826fdF5cF8d6fCc898FDA8b1A6', AttendanceToken.abi, signer);
      const balance = await AttendanceTokenContract.balanceOf(address); // Fetching balance of an address
      let formattedBalance= parseFloat(balance)
      console.log(formattedBalance)
      setBalance(formattedBalance); // Setting balance state.
    }
    
    // Define an asynchronous function to mint AttendanceToken.
    async function mintAttendanceToken(address, amount, classSessionID) {
      // Creating a contract instance.
      let AttendanceTokenContract= new ethers.Contract('0x918C774D35e53e826fdF5cF8d6fCc898FDA8b1A6', AttendanceToken.abi, signer);
      setAttendanceTokenContract(AttendanceTokenContract); // Setting the AttendanceTokenContract state.
      
      console.log("Minting Attendance Token"); // Logging the start of the minting process.
    
      const tx = await AttendanceTokenContract.mint(address, amount, classSessionID); // Minting tokens.
      
      console.log(tx); // Logging transaction object.
      await tx.wait(); // Waiting for the transaction to be mined.
      
      console.log("Minted Attendance Token"); // Logging the end of the minting process.
    }
    
    // Define an asynchronous function as a test function to perform minting and fetching balance.
    async function mintTest() {
      console.log(provider, signer, AttendanceTokenContract); // Logging provider, signer, and AttendanceTokenContract states.
      // Minting tokens and fetching the balance for a specific address.
      await mintAttendanceToken('0x06e6620C67255d308A466293070206176288A67B', 100, 100); 
      await getAttendanceBalance('0x06e6620C67255d308A466293070206176288A67B');
    }

    async function createClass(className, classId, teacher) {
      // Creating a contract instance.
      console.log(signer)
      let ClassesContract= new ethers.Contract('0xcDa8F1D34Cc07f6C2f351AB52b58Caf02CE7E443', Classes.abi, signer);
      
      console.log("Creating Class"); // Logging the start of the minting process.
    
      const tx = await ClassesContract.enrollClass(className, classId, teacher); // Minting tokens.
      
      console.log(tx); // Logging transaction object.
      await tx.wait(); // Waiting for the transaction to be mined.
      
      
      console.log("Created Class"); // Logging the end of the minting process.

    }

    async function createClassSession(className, sessionId, teacher) {
      // Creating a contract instance.
      let ClassesContract= new ethers.Contract('0xcDa8F1D34Cc07f6C2f351AB52b58Caf02CE7E443', Classes.abi, signer);
      
      console.log("Creating Class Session"); // Logging the start of the minting process.
    
      const tx = await ClassesContract.enrollClassSession(className, sessionId, teacher); // Minting tokens.
      
      console.log(tx); // Logging transaction object.
      await tx.wait(); // Waiting for the transaction to be mined.
      
      console.log("Created Class Session"); // Logging the end of the minting process.

    }
    
    // Defining the context value.
    const value = {
      provider,
      signer,
      getAttendanceBalance,
      mintTest,
      balance,
      mintAttendanceToken,
      createClassSession,
      createClass,
      createWallet,
      setUserWallet,
      userWallet
    };
    
    // Returning the Web3Context.Provider with value and children props.
    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};
