import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWeb3Context } from '../../../shared/contexts/web3Context';

function AttendPage() {
  const router = useRouter();
  const { classId } = router.query;
  const { mintAttendanceToken, getAttendanceBalance  } = useWeb3Context();

  const [displayBalance, setDisplayBalance] = useState(0);

  useEffect(() => {

    async function verifyAttendance() {
        if (classId) {
            // check if classId is valid
            // get user address
            const userAdress="0x06e6620C67255d308A466293070206176288A67B"
            //mint tokens
            console.log("minting")

            await mintAttendanceToken(userAdress, 1) 
            setDisplayBalance(await getAttendanceBalance(userAdress));
            console.log("balance set")
        }
    }
    verifyAttendance();
  }, []);

  return (
    <div>
      Thank you for attending! Your balance is {displayBalance}.
    </div>
  );
}

export default AttendPage;
