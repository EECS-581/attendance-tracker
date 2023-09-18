import { providers, JsonRpcBatchProvider, ethers } from 'ethers';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const Web3Context = createContext();

export const useWeb3Context = () => {
  return useContext(Web3Context);
};

export const Web3Provider = ({ children }) => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [address, setAddress] = useState(null);
    const [balance, setBalance] = useState(null);


    const value = {
      };
    
      return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;

};