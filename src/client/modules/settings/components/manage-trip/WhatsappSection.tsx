
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrowPage } from 'icons/BackArrowPage';
import { PlusIcon } from 'icons/PlusIcon';


import React, { useCallback, useRef, useState } from 'react'


export const WhatsappSection = () => {

    
  return (
   
    <div  className="bg-white  w-full grid grid-cols-2 gap-7 mt-16 pb-6 border-b border-super-lighter-grey">
          <div className="">
                    <div className="form-control w-full ">
                      <label className="label !py-1 text-xs mb-6">
                        <span className="label-text text-lg font-semibold">Add whatsapp group link</span>
                      </label>
                      <input type="text" placeholder="Add link here..." className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                    </div>                                                        
          </div>

          <div className="">
               <label className="label !py-1 text-xs mb-6">
                        <span className="label-text text-lg font-semibold">Add a booking</span>
               </label>
               <div className="flex items-center border-[1.4px] rounded-lg px-6 py-2 w-[242px] ">
                    <PlusIcon className="ml-auto"></PlusIcon>
                    <p className="mr-auto font-semibold ml-4">Add a booking</p>
               </div>
          </div>
    </div>
   
  );
};
