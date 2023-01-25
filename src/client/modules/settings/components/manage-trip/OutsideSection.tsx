


import { CopyIcon } from 'icons/CopyIcon';
import { GreenTick } from 'icons/GreenTick';
import { InfoIconDark } from 'icons/InfoIconDark';
import { PlusIcon } from 'icons/PlusIcon';
import { RedCross } from 'icons/RedCross';
import { StraightLineIcon } from 'icons/StraightLineIcon';
import React, { useCallback, useRef, useState } from 'react'


export const OutsideSection = () => {

    
  return (
   <>
   <p className="my-6 font-semibold text-lg">OutsideSection</p>

    <div className="grid grid-cols-4 gap-3 w-full">
        <div className="bg-super-bg-light-white rounded-lg p-5" >
           <p className="opacity-60 text-sm font-medium">Slots booked</p>
           <p className=" text-xl font-bold">6 slots</p>
        </div>

        <div className="bg-super-bg-light-white rounded-lg p-5">
          <div className="flex items-center">
             <p className="opacity-60 text-sm font-medium">Base package</p>
             <p className="ml-auto text-sm px-3 py-[6px] bg-super-lighter-grey rounded-[100px]">1 slots</p>
          </div>
          
           <p className=" text-xl font-bold">₹ 1,00,000 </p>
        </div>

        <div className="bg-super-bg-light-white rounded-lg p-5">
          <div className="flex items-center">
             <p className="opacity-60 text-sm font-medium">Medium package</p>
             <p className="ml-auto text-sm px-3 py-[6px] bg-super-lighter-grey rounded-[100px]">1 slots</p>
          </div>
          
           <p className=" text-xl font-bold">₹ 2,00,000 </p>
        </div>

        <div className="bg-super-bg-light-white rounded-lg p-5">
          <div className="flex items-center">
             <p className="opacity-60 text-sm font-medium">Luxary package</p>
             <p className="ml-auto text-sm px-3 py-[6px] bg-super-lighter-grey rounded-[100px]">1 slots</p>
          </div>
          
           <p className=" text-xl font-bold">₹ 4,00,000 </p>
        </div>

      

    </div>
  
   
   </>
  );
};
