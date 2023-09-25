/* 
 * Prologue Comments
 * Name of code artifact: DbContext Provider
 * Brief description: This code defines a React context named dbContext and a provider 
 * named DbProvider for this context. The context is meant to provide functionalities related to 
 * database, specifically, it has a function to upload data to IPFS.
 * Programmer’s name: Hudson Headley
 * Date the code was created: 9/24/23

 * Preconditions:
 * - It assumes that a Web3Context is available and properly set up in the app.
 * - The ethers library and ipfs object must be correctly installed and imported.
 * 
 * Postconditions:
 * - Provides a context with a function that allows uploading strings to IPFS.
 * 
 * Error and exception condition values or types that can occur:
 * - Any errors or exceptions during the IPFS upload are not handled in this code.
 * 
 * Side effects:
 * - Console logs the result of the IPFS upload.
 * 
 * Invariants:
 * - The Web3Context must remain constant for the duration of the component's lifecycle.
 * 
 * Any known faults:
 * - Lack of error handling in the uploadTest function.
 * 
 */

import {  createContext, useContext, useState, useEffect } from "react"; // Importing React hooks: useContext, useState, useEffect.

import { Web3Context, useWeb3Context } from "./web3Context"; // Importing Web3Context and useWeb3Context from web3Context file.
import { ethers } from "ethers"; // Importing ethers from ethers.js library.
import {ipfs} from "../db/ipfs.js" // Importing IPFS instance from local file.

export const useDbContext = () => {
    return useContext(dbContext); // Using React's useContext hook to provide dbContext.
};

const dbContext = createContext(); // Creating a new React context named dbContext.

// DbProvider component provides the dbContext to its children components.
export const DbProvider = ({ children }) => { // Accepting children props.
   const {provider, signer} = useWeb3Context(); // Destructuring provider and signer from useWeb3Context hook.

    // uploadTest function uploads a string to IPFS and logs the result.
    const uploadTest = async () => { // Defining an asynchronous function named uploadTest.
        ipfs.add('hello world') // Adding a string 'hello world' to IPFS.
        .then((res) => { // Handling the promise returned by ipfs.add method.
            console.log(res); // Logging the result of the IPFS upload.
        })
    }

    const value = { // Defining the value to be provided by the dbContext.
        uploadTest // Including uploadTest function in the value.
    };
    
    // Returning the DbProvider with the value and children props.
    return (<DbProvider.Provider value={value}>{children}</DbProvider.Provider>);
}
