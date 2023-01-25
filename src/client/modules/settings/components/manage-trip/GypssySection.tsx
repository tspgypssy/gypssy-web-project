
import { PlusIcon } from 'icons/PlusIcon';


import React, { useCallback, useRef, useState } from 'react'


export const GypssySection = () => {

    
  return (
   
    <div  className="bg-white  w-full py-6 border-b border-super-lighter-grey">
       <p className="text-lg font-semibold mb-6">Gypssy</p>
       <div className=" grid grid-cols-4 gap-3 ">
          
          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <p className="text-sm font-medium opacity-60">Slots booked</p>
              <div className="flex items-center font-bold text-xl mt-5">
                <p>9 slots </p>
             
              </div>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
             <div className="flex items-center w-full"> 
               <p className="text-sm font-medium opacity-60">Base package</p>
               <p className="text-sm font-semibold py-1 px-3 rounded-[100px] bg-super-lighter-grey ml-auto">3 slots</p>
             </div> 
              <div className="flex items-center font-bold text-xl mt-5">
                <p>₹ 1,00,000 </p>
              </div>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
             <div className="flex items-center w-full"> 
               <p className="text-sm font-medium opacity-60">Medium package</p>
               <p className="text-sm font-semibold py-1 px-3 rounded-[100px] bg-super-lighter-grey ml-auto">3 slots</p>
             </div> 
              <div className="flex items-center font-bold text-xl mt-5">
                <p>₹ 1,00,000 </p>
              </div>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
             <div className="flex items-center w-full"> 
               <p className="text-sm font-medium opacity-60">Luxary package</p>
               <p className="text-sm font-semibold py-1 px-3 rounded-[100px] bg-super-lighter-grey ml-auto">3 slots</p>
             </div> 
              <div className="flex items-center font-bold text-xl mt-5">
                <p>₹ 1,00,000 </p>
              </div>
          </div>
         

       </div>

    </div>
   
  );
};
