import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react'
import { DropDownPost } from "icons/DropDownPost";
import { useSelector } from 'react-redux';
import { RootState } from 'client/shell/store';
import { DropDown } from 'hooks/DropDown';
import { BackArrow } from 'icons/BackArrow';

export const LinkedInDetails = () => {

  const [emaildValue,setEmaildValue] = useState("");

  const handleEmailChange = (e) => {
    setEmaildValue(e.target.value);
  };

  const [selectedYear, setSelectedYear] = useState("");
  const years = useSelector((state: RootState) => state.personaldetails.years);

  return (
   
    <div className="bg-super-white w-screen h-screen overflow-y-auto px-6 ">
      <BackArrow className="mt-6"> </BackArrow>
       <p className="text-3xl text-black font-bold mt-8">LinkedIn profile</p>
       <p className="text-[#000100] opacity-80 text-sm mt-2">Provide link of your LinkedIn profile to help us create your co-founder profile</p>

       <div className="mt-5">
         <p className="text-sm font-semibold">Profile link</p>
         <input   value={emaildValue} autoFocus  onChange={handleEmailChange} type="text"  placeholder="Enter your linkedin url here..." className="mt-1 focus:outline-none input input-bordered border border-super-input-border w-full bg-white text-black rounded-sm" />
       </div>  

      

      <div className="rounded-sm w-full text-white bg-black  text-center py-4 absolute left-0 bottom-0">
          Continue
      </div>
    </div>
   
  );
};
