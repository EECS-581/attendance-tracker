import { useContext, useState, useEffect } from "react";

import { Web3Context, useWeb3Context } from "./web3Context";
import { ethers } from "ethers";
import {ipfs} from "../db/ipfs.js"

export const useDbContext = () => {
    return useContext(dbContext);
  };

export const dbContext = createContext();

export const DbProvider = ({ children }) => {
   const {provider,signer} = useWeb3Context();

    const uploadTest = async () => {
        ipfs.add('hello world').then((res) => {
            console.log(res);
        })


    }
    

    const value = {
        uploadTest

    };
    return (<DbProvider.Provider value={value}>{children}</DbProvider.Provider>);
}
