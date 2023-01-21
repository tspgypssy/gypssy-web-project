

import { CalendarIcon } from 'icons/CalendarIcon';
import { Checked } from 'icons/Checked';
import { DownArrow } from 'icons/DownArrow';
import { PackageSelected } from 'icons/PackageSelected';
import { PackageUnSelected } from 'icons/PackageUnSelected';
import { PlusIcon } from 'icons/PlusIcon';
import React, { useCallback, useRef, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const GuestTripDetails = ({showCal,setShowCal}) => {

  
  
  
   const [value,onChange] = useState(new Date());
  
  return (
   
    <div  className="border-t border-super-lighter-grey mt-7 w-full ">
        <p className=" my-6"><span className="font-semibold text-lg">Guest details</span><span className="font-medium text-sm"> (4 slots remaining)</span></p>

        <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Name (as per passport)</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
        </div>

        <div>
            <div className="flex items-center mb-1 mt-4">
               <p className="text-super-text-primary text-sm">Age</p> 
            </div>                     
            <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
               <CalendarIcon></CalendarIcon>
               <p className="font-semibold opacity-10 ml-3">Your age(mm/dd/yyyy)</p>
               <DownArrow className="ml-auto"></DownArrow>
            </div>
            {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onChange} value={value} /></div> }                                                                   
         </div>

         <div>
            <div className="flex items-center mb-1 mt-4">
               <p className="text-super-text-primary text-sm">Gender</p> 
            </div>                     
            <div   className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
               <p className="font-semibold opacity-10 ml-3">Your gender</p>  
               <DownArrow className="ml-auto"></DownArrow>    
            </div>     
        </div> 

       <p className="text-super-text-primary text-sm mt-5">Scan</p>
       <div className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">

            <div className="border-dashed border border-super-light-grey rounded h-24 w-24 text-center">
                     <PlusIcon className="mx-auto mt-6"></PlusIcon>   
                     <p className="text-sm font-semibold mt-2">Add front</p>
            </div>

            <div className="border-dashed border border-super-light-grey rounded h-24 w-24 text-center ml-3">
                     <PlusIcon className="mx-auto mt-6"></PlusIcon>   
                     <p className="text-sm font-semibold mt-2">Add back</p>
            </div>
       </div>

       <div className="py-2  w-full flex items-center rounded-lg border border-black my-5">
         <PlusIcon className="ml-auto"></PlusIcon> 
         <span  className="ml-4 mr-auto">Add more</span>
       </div>

        <div className="py-6 border-y border-super-lighter-grey w-full">
          <p className="text-lg font-semibold mb-7">Special requests</p> 
          
          <div className="">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Request</span>
                  </label>
                  <textarea  placeholder="Write special requests or a message for the host..." className="h-36 border border-super-lighter-grey input  focus:outline-none w-full" />   
                  <div className="w-full flex items-center mt-2">
                     <p className="text-xs opacity-60 float-right ml-auto">0/200</p>  
                  </div>          
                </div>                                                        
        </div>
       </div> 

       <div className="my-12">

               <p className="text-lg font-semibold mb-4">Package type</p>
               <div>
                    <div className="cursor-pointer  rounded-tl-lg rounded-tr-lg flex items-center bg-black text-white py-4 px-5">
                       <PackageSelected></PackageSelected>
                       <p className="text-sm font-semibold ml-6">Normal package</p>
                       <p  className="text-sm font-bold ml-auto">₹ 1,83,000</p>
                    </div>
                   <div className="p-5 bg-super-bg-light-white rounded-bl-lg rounded-br-lg text-sm font-medium"><span className="font-bold">Package description: </span><span className="opacity-60">Lorem ipsum dolor sit amet
consectetur. Montes scelerisque lacus lorem risus
blandit nunc sollicitudin sed nulla. Eget velit pharetra
arcu bibendum a. Facilisis aliquam faucibus massa
pulvinar.</span></div>
               </div>

               <div className="cursor-pointer rounded-lg flex items-center bg-super-bg-light-white text-black py-4 px-5 mt-3">
                     <PackageUnSelected></PackageUnSelected>
                     <p className="text-sm font-semibold ml-6">Exclusive package</p>
                       <p  className="text-sm font-bold ml-auto">₹ 2,25,000</p>
               </div>

               <div className="cursor-pointer rounded-lg flex items-center bg-super-bg-light-white text-black py-4 px-5 mt-3">
                     <PackageUnSelected></PackageUnSelected>
                     <p className="text-sm font-semibold ml-6">Premium package</p>
                       <p  className="text-sm font-bold ml-auto">₹ 2,93,000</p>
               </div>

              <div className="flex items-center mt-6">
                <Checked></Checked>
                <div className="text-sm ml-5 font-medium"><span className="opacity-60">You accept our </span><span className="font-bold underline">Terms and conditions</span><span className="opacity-60"> & </span><span className="font-bold underline">Cancellation policy</span></div>
             </div>
           </div>
      

    </div>
   
  );
};
