


import { InfoIcon } from 'icons/InfoIcon';
import { InfoIconDark } from 'icons/InfoIconDark';
import React, { useCallback, useRef, useState } from 'react'


export const TransactionDetails = () => {

    
  return (
   
    <div  className="bg-white  w-full py-6 border-b border-super-lighter-grey">
       <p className="text-lg font-semibold mb-6">Transaction details</p>
       <div className=" grid grid-cols-5 gap-3 ">
          
          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <p className="text-sm font-medium opacity-60">Total amount</p>
              <div className="flex items-center font-bold text-xl mt-5">
                <p>₹ 10,60,000  </p>
             </div>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <div className="flex items-center">
                <p className="text-sm font-medium opacity-60">Total amount</p>
                <InfoIconDark className="ml-1"></InfoIconDark>
              </div>
              
              <p className="font-bold text-xl mt-5">-₹ 1,00,000   </p>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <div className="flex items-center">
                <p className="text-sm font-medium opacity-60">Taxes(TCS)</p>
                <InfoIconDark className="ml-1"></InfoIconDark>
              </div>
              
              <p className="font-bold text-xl mt-5">-₹ 1,00,000   </p>
          </div>

          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <div className="flex items-center">
                <p className="text-sm font-medium opacity-60">Platform fee</p>
                <InfoIconDark className="ml-1"></InfoIconDark>
                <div className="ml-auto py-1 px-3 rounded-[100px] bg-super-lighter-grey ">10%</div>
              </div>
              
              <p className="font-bold text-xl mt-5">-₹ 1,00,000   </p>
          </div>
         
          <div className="rounded-lg px-5 py-4 bg-super-bg-light-white">
              <p className="text-sm font-medium opacity-60">Total amount payable</p>
              <div className="flex items-center font-bold text-xl mt-5">
                <p className="text-super-text-green">₹ 7,60,000  </p>
             </div>
          </div>

       </div>

    </div>
   
  );
};
