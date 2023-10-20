import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWeb3Context } from '../../../shared/contexts/web3Context';

function AttendPage() {
  const router = useRouter();
  const { mintAttendanceToken, getAttendanceBalance, balance } = useWeb3Context();

  async function verifyAttendance() {
    const { classId } = router.query;
    console.log("verifying");
    console.log(classId);
    if (classId) {
      // check if classId is valid
      // get user address
      const userAdress = "0x06e6620C67255d308A466293070206176288A67B";
      // mint tokens
      console.log("minting");
      await mintAttendanceToken(userAdress, 1, classId);
      await getAttendanceBalance(userAdress)

      console.log("balance set");
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
