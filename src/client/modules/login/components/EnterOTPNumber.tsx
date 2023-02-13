import actionList from 'client/shell/actions';
import { RootState } from 'client/shell/store';
import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux';


export const EnterOTPNumber = ({resubmitPhoeNumber}) => {

  const [otp,setOTP] = useState("");
  const phoneNumberSet =useSelector((state: RootState) => state.login.phoneNumber);
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

  const handleOTPChange = useCallback((e) => {
    setOTP(e.target.value);
  }, []);

 
  const moveToPrevPage =()=>
  {
    actionList.updatePageSel({pageSel:"enter-mobile"});
  }

  const confirmOTP =()=>
  {
    if(otp.length ==6)
    {
      window.confirmationResult.confirm(otp).then((result) => {
    
        actionList.updateUserDetails({result});
        localStorage.setItem("jwt", result?.user?.stsTokenManager?.accessToken);
        localStorage.setItem("refreshJwt", result?.user?.stsTokenManager?.refreshToken);
         if(result?._tokenResponse?.isNewUser)
        actionList.updatePageSel({pageSel:"create-profile"});
          else
          handleClose();
      }).catch((error) => {
        
      });
    }
   
  }
  return (
   
    <div className="  ">
        
        <div  className="w-full">
            <div className="w-full flex items-center py-6  border-b border-super-lighter-grey  px-5">
              <div className="h-7 w-7 mr-auto"></div>
              <p className="mx-auto font-bold">Log in or sign in</p>
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>

            <div className=" px-5 py-10 ">
               <p className="text-2xl font-semibold">We have sent you an OTP</p>
               <div className="text-sm font-medium  "><span className="opacity-60">Enter the code we’ve sent by SMS to </span><span className="font-bold opacity-100">{phoneNumberSet}</span>.</div>
               <p  onClick={moveToPrevPage} className="underline text-sm font-bold cursor-pointer">Change number</p>
               <input  onChange={handleOTPChange} type="number" placeholder="000000" className="placeholder:opacity-60 font-bold focus:outline-none p-0 my-4 text-3xl input input-ghost w-full max-w-xs" />
               <div>
                 <span className="text-xs opacity-60 font-medium">Haven’t received an SMS?</span>
                 <span onClick={resubmitPhoeNumber} className="cursor-pointer text-xs underline font-semibold ml-2">Send again</span>
               </div>
            </div>
           
       </div>

       <div className="flex items-center  border-t border-super-lighter-grey p-5 ">
          <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
          <p onClick={confirmOTP} className={"cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto  "+(otp.length!=6 && " opacity-10 cursor-not-allowed  " ) }>Continue</p>
      </div>
    </div>
   
  );
};
