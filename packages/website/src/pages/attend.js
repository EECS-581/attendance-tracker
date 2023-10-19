import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {useWeb3context} from '../../../shared/contexts/web3Context'

function AttendPage() {
  const router = useRouter();
  const { classId } = router.query;

  useEffect(() => {
    if (classId) {
      // Retrieve the user's profile or ID.
      // If you're using NextAuth or another authentication provider, 
      // you can get the user details from the session or a similar method.
      // For this example, I'll hardcode a userId.
      const userId = "currentUser";

      // Call your mint function here
      console.log(userId, classId);
    }
  }, [classId]);

  return (
    <div>
      Thank you for attending!
    </div>
  );
}

export default AttendPage;
