import { providers, JsonRpcBatchProvider, ethers } from 'ethers';
require('dotenv').config()


import { createContext, useContext, useState, useEffect, useCallback } from 'react';
const AttendanceToken = require('../abi/AttendanceToken.json');

const Web3Context = createContext();

export const useWeb3Context = () => {
  return useContext(Web3Context);
};

export const Web3Provider = ({ children }) => {
    const [provider, setProvider] = useState(new ethers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/f0e3cf7078494cebb6cd3a8a0a57041f"));
    const [signer, setSigner] = useState(new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider));
    const [AttendanceTokenContract, setAttendanceTokenContract] = useState(new ethers.Contract('0x6e85Ae42F0C8b00cc096a8c8c979633F624f975a',AttendanceToken.abi, provider));
    const [balance, setBalance] = useState(null);

    async function getAttendanceBalance(address) {

      const balance = await AttendanceTokenContract.balanceOf(userAddress);
      setBalance(balance);
      console.log(balance);
    }

    


    const value = {
      provider,
      signer,
      getAttendanceBalance
      };
    
      return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;

};