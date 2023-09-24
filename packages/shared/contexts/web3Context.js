
import { providers, JsonRpcBatchProvider, ethers } from 'ethers';
require('dotenv').config()


import { createContext, useContext, useState, useEffect, useCallback } from 'react';
const AttendanceToken = require('../abi/AttendanceToken.json');

const Web3Context = createContext();

export const useWeb3Context = () => {
  return useContext(Web3Context);
};

export const Web3Provider = ({ children }) => {
    const [provider, setProvider] = useState(new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL));
    const [signer, setSigner] = useState(new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider));
    const [AttendanceTokenContract, setAttendanceTokenContract] = useState(null);
    const [balance, setBalance] = useState(null);
    const [test, setTest] = useState(true);

    async function getAttendanceBalance(address) {

      const balance = await AttendanceTokenContract.balanceOf(address);
      setBalance(balance);
      console.log(balance);
    }

    async function mintAttendanceToken(address, amount) {
      let AttendanceTokenContract= new ethers.Contract('0x6e85Ae42F0C8b00cc096a8c8c979633F624f975a', AttendanceToken.abi, signer);
      setAttendanceTokenContract(AttendanceTokenContract);
      
      console.log("Minting Attendance Token");
    

      const tx = await AttendanceTokenContract.mint(address, amount);
      
      console.log(tx);
      await tx.wait();
      
      console.log("Minted Attendance Token");
    }
    

    

      
      
    async function mintTest() {
      console.log(provider, signer, AttendanceTokenContract)

      await mintAttendanceToken('0x06e6620C67255d308A466293070206176288A67B', 100);
      await getAttendanceBalance('0x06e6620C67255d308A466293070206176288A67B');

    }

        
        


    const value = {
      provider,
      signer,
      getAttendanceBalance,
      mintTest
      };
    
      return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;

};