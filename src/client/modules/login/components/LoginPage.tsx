import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'
import { CreateProfile } from './CreateProfile';
import { EnterMobileNumber } from './EnterMobileNumber';
import { EnterOTPNumber } from './EnterOTPNumber';


export const LoginPage = () => {

  const router = useRouter();
  const handleClose = () => {
      
    const query = router.query;
    delete query.modal;
    router.push({
      query: {
        ...query,
      },
    });
  }

  return (
   
    <div className="  ">
        <EnterMobileNumber></EnterMobileNumber>
        {/* <EnterOTPNumber></EnterOTPNumber> */}
        {/* <CreateProfile></CreateProfile> */}
    </div>
   
  );
};
