import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react'
import { DropDownPost } from "icons/DropDownPost";
import { useSelector } from 'react-redux';
import { RootState } from 'client/shell/store';
import { DropDown } from 'hooks/DropDown';

export const AboutYou = () => {

  const [emaildValue,setEmaildValue] = useState("");

  const handleEmailChange = (e) => {
    setEmaildValue(e.target.value);
  };

  const [selectedYear, setSelectedYear] = useState("");
  const years = useSelector((state: RootState) => state.personaldetails.years);

  return (
   
    <div className="bg-super-white w-screen h-screen overflow-y-auto px-6 pt-16">
       <p className="text-3xl text-black font-bold">About you</p>

       <div className="mt-5">
         <p className="text-sm font-semibold">Full name</p>
         <input   value={emaildValue} autoFocus  onChange={handleEmailChange} type="text"  placeholder="Enter your display name here..." className="mt-1 focus:outline-none input input-bordered border border-super-input-border w-full bg-white text-black rounded-sm" />
       </div>  

       <div className="mt-5">
         <p className="text-sm font-semibold">Year of birth</p>
         <DropDown val={selectedYear} setVal={setSelectedYear} inputList={years} placeholder={"Select your birth year"}></DropDown>    
       </div>  

        <div className="mt-5">
         <p className="text-sm font-semibold">Location</p>
         <DropDown val={selectedYear} setVal={setSelectedYear} inputList={years} placeholder={"Select your birth year"}></DropDown>    
       </div>   

      <div className="rounded-sm w-full text-white bg-black mt-14  text-center py-4">
          Continue
      </div>
    </div>
   
  );
};
