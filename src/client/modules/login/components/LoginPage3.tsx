import { AppleIcon } from 'icons/AppleIcon';
import { Page3 } from 'icons/Page3';
import { TickSquare } from 'icons/TickSquare';
import React, { useCallback, useRef } from 'react'

export const LoginPage3 = () => {

  const login = () =>
  {

  }
  
  
  return (
    <div className=" ">
        <img className="w-full h-[300px]" src="/videos/login-3.gif"></img>
        <p className="text-4xl px-6 font-bold mt-3">Connect, Brainstorm,</p>
        <p className="text-4xl px-6  font-bold"> & Partner</p>
        <p className="text-xl px-6 mt-3 ">The biggest risk is not taking any risk.</p>
        <p className="text-xl px-6">Meet top potential co-founders for $29/month and make your life extraordinary.</p>
        <div className="px-6 mt-9"><Page3 ></Page3></div>

        <div onClick={login} className="mx-6 mt-5 flex bg-black h-12 items-center  cursor-pointer rounded-sm">
                    <AppleIcon className="ml-auto"></AppleIcon>
                    <p className="ml-3 text-super-white mr-auto">Join with your apple account</p>
        </div>

        <div className="flex items-start text-sm px-6 my-5">
            <TickSquare></TickSquare>
            <div className="ml-3">By joining, you agree to our <a className="font-bold">terms of service</a> and <a  className="font-bold">privacy policy</a>.</div>
        </div>

   </div>
  );
};
