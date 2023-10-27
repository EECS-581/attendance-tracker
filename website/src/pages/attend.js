import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWeb3Context } from '../contexts/web3Context';
import {useGraphContext} from "../contexts/graphContext"

function AttendPage() {
  const router = useRouter();
  const { mintAttendanceToken, getAttendanceBalance, balance,createClassSession,createClass } = useWeb3Context();
  const {queryClassAttendance, checkClassSessionExists } = useGraphContext();
  
  async function checkAttendance(adress,sessionId){
    console.log("checking attendance")
    console.log(adress)
    const data = await queryClassAttendance(sessionId)
    
    if (!data || !data.mintEvents) {
      return false;
    }
    for (let event of data.mintEvents) {
      if (event.to.toLowerCase() === adress.toLowerCase()) {
          return true;  // Wallet address found, it has attended the class
      }
    }

  return false; 

  }
  

  async function verifyAttendance() {
    const { sessionId } = router.query;
    const { userWallet } = router.query;
    console.log("verifying");
    console.log(sessionId);
    if (sessionId) {
      console.log("checking if exists")
      const check = await checkClassSessionExists(sessionId);

      if(!check){
        console.log("class session does not exist");
        return;
      }
      console.log("class session exists");


      // get user address
      console.log("checking if already attended")
      const userAdress = userWallet

      const checkAttend =await checkAttendance(userAdress,sessionId)
      console.log(checkAttend)
      
      if(!checkAttend){
        // mint tokens
        console.log("minting");
        await mintAttendanceToken(userAdress, 1, sessionId);
        await getAttendanceBalance(userAdress)

        console.log("balance set");

      }
      else{
        console.log("already attended");
      }

    }
  }

  useEffect(() => {
    if (router.isReady) {
      verifyAttendance();
    }
  }, [router.isReady]);

  return (
    <div>
      Thank you for attending! Your new balance is {balance}.
    </div>
  );
}

export default AttendPage;
