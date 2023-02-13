import { app,auth } from 'config/firebase';

import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CreateProfile } from './CreateProfile';
import { EnterMobileNumber } from './EnterMobileNumber';
import { EnterOTPNumber } from './EnterOTPNumber';
import {  RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { useSelector } from 'react-redux';
import { RootState } from 'client/shell/store';
import actionList from 'client/shell/actions';


export const LoginPage = () => {

  const router = useRouter();
  const pageSel =useSelector((state: RootState) => state.login.pageSel);
  const phoneNumberSet =useSelector((state: RootState) => state.login.phoneNumber);
 
  
  

  const loginSubmit = (e) => {
    e.preventDefault();
    if(phoneNumberSet.length == 10)
    {
      const phoneNumber = "+91"+phoneNumberSet;
      const appVerifier = window.recaptchaVerifier;
      
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            actionList.updatePageSel({pageSel:"enter-otp"})
            // ...
          }).catch((error) => {
            console.log(error);
            // Error; SMS not sent
            // ...
          });
    }
    
};

  useEffect(() => {
    
    auth.languageCode = 'en';
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      }
    }, auth);
}, []);

  return (
   
    <div  className="  ">
       
        {/* {pageSel=="enter-mobile" && <EnterMobileNumber loginSubmit={loginSubmit}></EnterMobileNumber> }
        {pageSel=="enter-otp" &&  <EnterOTPNumber resubmitPhoeNumber={loginSubmit}></EnterOTPNumber>}
        {pageSel=="create-profile" &&  <CreateProfile></CreateProfile>} */}

<CreateProfile></CreateProfile>
        
        <button className="" id="sign-in-button" ></button>
    </div>
   
  );
};
