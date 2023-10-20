import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWeb3Context } from '../../../shared/contexts/web3Context';
import {useGraphContext} from "../../../shared/contexts/graphContext"

function AttendPage() {
  const router = useRouter();
  const { mintAttendanceToken, getAttendanceBalance, balance } = useWeb3Context();
  const {queryClassAttendance } = useGraphContext();
  
  async function checkAttendance(adress,classId){
    const data = await queryClassAttendance(classId)
    
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
    const { classId } = router.query;
    console.log("verifying");
    console.log(classId);
    if (classId) {
      console.log("checking")

      // get user address
      const userAdress = "0x06e6620C67255d308A466293070206176288A67B";
      
      if(!(await checkAttendance(userAdress,classId))){
        // mint tokens
        console.log("minting");
        await mintAttendanceToken(userAdress, 1, classId);
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
