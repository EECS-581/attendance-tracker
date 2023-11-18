import "@ethersproject/shims";
import { NEXT_PUBLIC_INFURA_URL, NEXT_PUBLIC_PRIVATE_KEY, TEST } from "@env";

import { ethers, providers } from "ethers"; // Importing necessary components and functions from ethers.js
// Loading environment variables


import { createContext, useContext, useState, useEffect, useCallback } from 'react'; // Importing React hooks: createContext, useContext, useState, useEffect, useCallback
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const AttendanceToken = require('../abi/AttendanceToken.json'); // Importing ABI of AttendanceToken contract
const Classes = require('../abi/Classes.json'); // Importing ABI of Classes contract
const WalletFactory = require('../abi/WalletFactory.json'); // Importing ABI of WalletFactory contract
const WalletABI = require("../abi/Wallet.json");


const Web3Context = createContext(); // Creating a new React context named Web3Context.

// useWeb3Context is a custom hook that provides Web3Context.
export const useWeb3Context = () => {
  return useContext(Web3Context);
};

// Web3Provider component provides the Web3Context to its children components.
export const Web3Provider = ({ children }) => {
  // Initializing states.
  const [provider, setProvider] = useState(
    NEXT_PUBLIC_INFURA_URL
      ? new ethers.providers.JsonRpcProvider(NEXT_PUBLIC_INFURA_URL)
      : null
  );

  const [signer, setSigner] = useState(
    NEXT_PUBLIC_PRIVATE_KEY && provider
      ? new ethers.Wallet(NEXT_PUBLIC_PRIVATE_KEY, provider)
      : null
  );
  const [AttendanceTokenContract, setAttendanceTokenContract] = useState(null);
  const [balance, setBalance] = useState("loading...");

  const [userWallet, setUserWallet] = useState(null);

  const [WalletFactoryContract, setWalletFactoryContract] = useState(null);
  
  const walletFactoryAddress = "0x908eF3bbC70e71c97dedd34706261aCbD666b9aF";
  const AttendeesAddress ="0xFb8e15EdE3a4013Bb3d0b92b00505eB7c0a49EE5";
  const TokenContract = "0x2D7D44d4fF0A10f02633aDab99Efb677D900EC73";
  const ClassesContractAddress = "0x87FeA9CEDc7Cb50f167fE2Eb5a09AC87542f182E";

  const createInstance = (ContractAddress, ABI, _signer) => {
    const ContractInstance = new ethers.Contract(ContractAddress, ABI, _signer);
    return ContractInstance
  }

    async function createWallet(authId, userType) {
      // Creating a contract instance.
      let WalletFactoryContract= new ethers.Contract(walletFactoryAddress, WalletFactory.abi, signer);
      
      console.log("Creating Wallet"); // Logging the start of the minting process.

      const tx = await WalletFactoryContract.createWallet(walletFactoryAddress,authId, userType); // Minting tokens.

      console.log(tx); // Logging transaction object.
      await tx.wait(); // Waiting for the transaction to be mined.

      console.log(tx)

      console.log("Created Wallet"); // Logging the end of the minting process.

    }
    
    // Define an asynchronous function to get the balance of the AttendanceToken.
    async function getAttendanceBalance(address) {
      let AttendanceTokenContract= new ethers.Contract(TokenContract, AttendanceToken.abi, signer);
      const balance = await AttendanceTokenContract.balanceOf(address); // Fetching balance of an address
      let formattedBalance= parseFloat(balance)
      console.log(formattedBalance)
      setBalance(formattedBalance); // Setting balance state.
    }

    useEffect(() => {
      if (userWallet != null){
        getAttendanceBalance(userWallet)
      }

    }, [userWallet])
    
    // Define an asynchronous function to mint AttendanceToken.
    async function mintAttendanceToken(address, amount, classSessionID) {
      // Creating a contract instance.
      let AttendanceTokenContract= new ethers.Contract(TokenContract, AttendanceToken.abi, signer);
      setAttendanceTokenContract(AttendanceTokenContract); // Setting the AttendanceTokenContract state.
      
      console.log("Minting Attendance Token"); // Logging the start of the minting process.
    
      const tx = await AttendanceTokenContract.mint(address, amount, classSessionID, 1); //IMPORTANT made organization id 1 by default add more later
      
      console.log(tx);
      await tx.wait();
      
      console.log("Minted Attendance Token"); 
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
      let ClassesContract= new ethers.Contract(ClassesContractAddress, Classes.abi, signer);
      
      console.log("Creating Class"); // Logging the start of the minting process.
    
      const tx = await ClassesContract.enrollClass(className, classId, teacher); // Minting tokens.
      
      console.log(tx); // Logging transaction object.
      await tx.wait(); // Waiting for the transaction to be mined.
      
      
      console.log("Created Class"); // Logging the end of the minting process.

    }

    async function createClassSession(className, sessionId, teacher) {
      // Creating a contract instance.
      let ClassesContract= new ethers.Contract(ClassesContractAddress, Classes.abi, signer);
      
      console.log("Creating Class Session"); // Logging the start of the minting process.
    
      const tx = await ClassesContract.enrollClassSession(className, sessionId, teacher); // Minting tokens.
      
      console.log(tx); // Logging transaction object.
      await tx.wait(); // Waiting for the transaction to be mined.
      
      console.log("Created Class Session"); // Logging the end of the minting process.

    }

    const buyCoupon = async (WalletAddress ,couponId) => {
      const WalletInstance = createInstance(WalletAddress, WalletABI, signer)
      setWalletContract(WalletInstance);
      console.log("Buying coupon");
      const tx = await WalletInstance.buyCoupon(couponId);
      console.log(tx);
  
      await tx.wait();
      console.log("Coupon bought");
  
    }
  
    const redeemCoupon = async (WalletAddress, couponId) => {
      const WalletInstance = createInstance(WalletAddress, WalletABI, signer)
      setWalletContract(WalletInstance);
      console.log("Redeeming Coupon");
      const tx = await WalletInstance.redeemCoupon(couponId);
      console.log(tx);
  
      await txt.wait();
      console.log("Coupon burned");
  
    }
  
    const addSigner = async (WalletAddress, address) => {
      const WalletInstance = createInstance(WalletAddress, WalletABI, signer)
      setWalletContract(WalletInstance);
      console.log("Adding signer");
      const tx = await WalletInstance.addSigner(address);
      console.log(tx);
  
      await tx.wait();
      console.log("Signer added");
  
    }
  
    const removeSigner = async (WalletAddress, address) => {
      const WalletInstance = createInstance(WalletAddress, WalletABI, signer);
      setWalletContract(WalletInstance);
      const tx = WalletInstance.removeSigner(address);
      console.log("Removing Signer");
  
      await tx.wait();
      console.log("Signer Removed");
  
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
      userWallet,
      buyCoupon,
      redeemCoupon,
      addSigner,
      removeSigner
    };
    
    // Returning the Web3Context.Provider with value and children props.
    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};
