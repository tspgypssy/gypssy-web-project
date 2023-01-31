
import { CalendarIcon } from 'icons/CalendarIcon';
import { DownArrow } from 'icons/DownArrow';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const EnterGroupDetails = () => {
    
  const router = useRouter();
  const [value,onChange] = useState(new Date());
  const [showCal,setShowCal] = useState(false); 

  return (
   <div onClick={()=>(setShowCal(false))} className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Tell us about your group</p>

       <div>
          <p className="text-lg font-semibold">What is your group type</p>
          <div className="flex items-center my-6">
               <p className="rounded-[100px] px-5 py-3 text-white bg-black ml-3">All</p>
               <p className="rounded-[100px] px-5 py-3  bg-super-bg-light-white border border-super-lighter-grey ml-3">Men’s trip</p>
               <p className="rounded-[100px] px-5 py-3  bg-super-bg-light-white border border-super-lighter-grey ml-3">Women’s trip</p>
               <p className="rounded-[100px] px-5 py-3  bg-super-bg-light-white border border-super-lighter-grey ml-3">Women’s trip</p>
          </div>
       </div>

      <div className="my-12">
         <p className="text-lg font-semibold">What is your group size?</p>
         <div className="grid grid-cols-2 gap-6 w-3/4 my-7">
            
                <div className="form-control w-full ">
                      <label className="label !py-1 text-xs">
                        <span className="label-text">Minimum</span>
                      </label>
                      <input type="text" placeholder="Min. size" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>  

                <div className="form-control w-full ">
                      <label className="label !py-1 text-xs">
                        <span className="label-text">Maximum</span>
                      </label>
                      <input type="text" placeholder="Max. size" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                 </div>  
         </div>
      </div>

      <div className="my-12">
         <p className="text-lg font-semibold">What is your group trip focus areas?</p>
            <div className="flex items-center my-6">
                  <p className="rounded-[100px] px-5 py-3 text-white bg-black ml-3">Mixed</p>
               <p className="rounded-[100px] px-5 py-3  bg-super-bg-light-white border border-super-lighter-grey ml-3">Photography</p>
               <p className="rounded-[100px] px-5 py-3  bg-super-bg-light-white border border-super-lighter-grey ml-3">Yoga</p>
               <p className="rounded-[100px] px-5 py-3  bg-super-bg-light-white border border-super-lighter-grey ml-3">Trading</p>
           </div>
      </div>

         <div className="bottom-5 w-[90%]  z-[60]  fixed  overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Back</p>
           <button className="ml-auto rounded-[100px] text-white bg-black px-8 py-3">Continue</button>
          </div>
       </div>  

   </div>
  );
};
