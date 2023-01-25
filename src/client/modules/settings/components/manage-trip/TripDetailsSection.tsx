
import { PlusIcon } from 'icons/PlusIcon';


import React, { useCallback, useRef, useState } from 'react'


export const TripDetailsSection = () => {

    
  return (
   
    <div  className="bg-white  w-full py-6 border-b border-super-lighter-grey">
       <p className="text-lg font-semibold mb-6">Trip details</p>
       <div className=" grid grid-cols-4 gap-3 ">
          
          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <p className="text-sm font-medium opacity-60">Total slots</p>
              <div className="flex items-center font-bold text-xl mt-5">
                <p>15 filled</p>
                <p className="ml-auto">/16</p>
              </div>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <p className="text-sm font-medium opacity-60">Base package</p>
              <div className="flex items-center font-bold text-xl mt-5">
                <p>₹ 1,00,000 </p>
               
              </div>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <p className="text-sm font-medium opacity-60">Medium package</p>
              <div className="flex items-center font-bold text-xl mt-5">
                <p>₹ 1,20,000 </p>
               
              </div>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <p className="text-sm font-medium opacity-60">Luxury package</p>
              <div className="flex items-center font-bold text-xl mt-5">
                <p>₹ 1,40,000 </p>
               
              </div>
          </div>

       </div>

    </div>
   
  );
};
