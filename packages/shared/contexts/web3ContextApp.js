import "@ethersproject/shims";
import { ethers } from "ethers";
import { NEXT_PUBLIC_INFURA_URL, NEXT_PUBLIC_PRIVATE_KEY, TEST } from "@env";

import React, { createContext, useContext, useEffect, useState } from "react";

const AttendanceTokenABI = require("../abi/AttendanceToken.json");

const Web3ContextApp = createContext();

export const useWeb3ContextApp = () => {
  return useContext(Web3ContextApp);
};

export const Web3ProviderApp = ({ children }) => {
  const [provider, setProvider] = useState(
    new ethers.providers.JsonRpcProvider(NEXT_PUBLIC_INFURA_URL)
  );
  const [signer, setSigner] = useState(
    new ethers.Wallet(NEXT_PUBLIC_PRIVATE_KEY, provider)
  );
  const [AttendanceTokenContract, setAttendanceTokenContract] = useState(null);
  const [balance, setBalance] = useState("0");

  const attendeesAddress = "0xFb8e15EdE3a4013Bb3d0b92b00505eB7c0a49EE5";

  const getAttendanceBalance = async (address) => {
    const AttendanceTokenContractInstance = new ethers.Contract(
      "0x6e85Ae42F0C8b00cc096a8c8c979633F624f975a",
      AttendanceTokenABI.abi,
      signer
    );
    console.log("getting balance");
    console.log(address);

    const balanceBigNumber = await AttendanceTokenContractInstance.balanceOf(
      address
    );

    // If your token has 18 decimals like standard ERC-20:

    // Convert to a regular JavaScript number (be aware of potential precision loss for very large numbers):
    const balanceNumber = parseFloat(balanceBigNumber);

    setBalance(balanceNumber);
    console.log(balanceNumber);
  };

  const mintAttendanceToken = async (address, amount) => {
    const AttendanceTokenContractInstance = new ethers.Contract(
      "0x6e85Ae42F0C8b00cc096a8c8c979633F624f975a",
      AttendanceTokenABI,
      signer
    );
    setAttendanceTokenContract(AttendanceTokenContractInstance);

    console.log("Minting Attendance Token");

    const tx = await AttendanceTokenContractInstance.mint(address, amount);

    console.log(tx);
    await tx.wait();

    console.log("Minted Attendance Token");
  };

  const mintTest = async () => {
    console.log(provider, signer, AttendanceTokenContract);
    await mintAttendanceToken(
      "0x06e6620C67255d308A466293070206176288A67B",
      100
    );
    await getAttendanceBalance("0x06e6620C67255d308A466293070206176288A67B");
  };

  useEffect(() => {
    async function init() {
      try {
        await getAttendanceBalance(
          "0x06e6620C67255d308A466293070206176288A67B"
        );
      } catch (error) {
        console.log(error);
      }
    }
    init();
  }, []);

  const value = {
    provider,
    signer,
    getAttendanceBalance,
    mintTest,
    balance,
  };

  return (
    <Web3ContextApp.Provider value={value}>{children}</Web3ContextApp.Provider>
  );
};
