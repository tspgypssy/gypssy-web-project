

import { InfoIcon } from 'icons/InfoIcon';
import { PackageSelected } from 'icons/PackageSelected';
import { PackageUnSelected } from 'icons/PackageUnSelected';
import React, { useCallback, useRef } from 'react'


export const PaymentTripDetails = () => {

  return (
   
    <div className="p-8 tripBoxShadow rounded-xl border-[1.5px] border-super-ligher-grey">
          <div className="flex items-center w-full">
             <p className="font-medium">Trip price</p>
             <p className="text-lg ml-auto">₹ 1,99,999.00</p>
          </div>

          <div className="flex items-center w-full mt-4">
             <p className="font-medium">Trip discount</p>
             <p className="text-lg ml-auto text-super-text-light-green font-semibold">- ₹ 16,999.00</p>
          </div>

          <div className="flex items-center w-full mt-4">
             <p className="font-medium">Trip discount</p>
             <p className="text-lg ml-auto text-super-text-light-green font-semibold">- ₹ 16,999.00</p>
          </div>

          <div className="flex items-center w-full mt-4">
             <p className="font-medium">Taxes</p>
             <p className="text-lg ml-auto ">₹ 12,999.00</p>
          </div>

          <div className="flex items-center w-full mt-8 py-8 border-y border-super-lighter-grey">
            <p className="text-lg font-medium">Total(INR)</p>
             <p className="text-xl ml-auto ">₹ 1,95,999.00</p>
          </div>

          <p className="text-lg font-semibold my-8">Select payment</p>
          
          <div className="bg-black flex items-center w-full py-4 px-5 rounded-lg">
             <PackageSelected></PackageSelected>
             <div className="ml-5">
                <div className="flex items-center">
                   <p className="text-sm font-semibold text-white">Partial payment</p>
                   <InfoIcon className="ml-1"></InfoIcon>
                </div>
                <p className="text-white opacity-60 text-xs mt-1">25% amount will be paid</p>
             </div>
             <p className="text-white font-semibold text-lg ml-auto">₹ 48,999</p>
          </div>

          <div className="mt-4 bg-super-bg-light-white  flex items-center w-full py-4 px-5 rounded-lg">
             <PackageUnSelected></PackageUnSelected>
             <div className="ml-5">
                <div className="flex items-center">
                   <p className="text-sm font-semibold ">Full payment</p>
                  
                </div>
                <p className=" opacity-60 text-xs mt-1">100% amount will be paid</p>
             </div>
             <p className=" font-semibold text-lg ml-auto">₹ 1,98,999</p>
          </div>

          <p className="w-full border-b border-super-light-grey my-8"></p>

          <p className="w-full text-center rounded-[100px] bg-black text-white font-semibold py-[14px]">Pay ₹ 48,999</p>

    </div>
   
  );
};
