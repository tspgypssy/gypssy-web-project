
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrowPage } from 'icons/BackArrowPage';
import { CopyIcon } from 'icons/CopyIcon';
import { Middot } from 'icons/Middot';
import { MiddotWhite } from 'icons/MiddotWhite';
import { PlusIcon } from 'icons/PlusIcon';
import { useRouter } from 'next/router';

import React, { useCallback, useRef, useState } from 'react'


export const PaymentStatus = () => {

  const router = useRouter();
  const { modal } = router.query;
    
  return (
   
   <div>
        <p className="my-6 text-lg font-semibold">Payment status</p>
        <div className="w-3/4 grid grid-cols-3 gap-3">
           <div className="rounded-lg p-5 bg-super-bg-light-white">
              <p className="font-medium opacity-60">Total amount</p>
              <p className="text-xl font-bold mt-5 ">₹ 2,00,000</p>
           </div>

           <div className="rounded-lg p-5 bg-super-bg-light-white">
              <p className="font-medium opacity-60">Amount paid</p>
              <p className="text-xl font-bold mt-5 text-super-gyp-green">₹ 2,00,000</p>
           </div>

           <div className="rounded-lg p-5 bg-super-bg-light-white">
              <p className="font-medium opacity-60">Total due</p>
              <p className="text-xl font-bold mt-5 text-super-gyp-yellow">₹ 2,00,000</p>
           </div>
        </div>

        <div className="mt-6 border-b border-super-lighter-grey pb-9">

   <div className="timeline-done ">
         <div className="timeline-container-done timeline-right-done">
           <div className="timeline-content-done">
               <div className="flex items-top">
                   <div>
                        <p className="font-semibold">Booking</p>
                        <p className="text-sm opacity-60 font-medium">On Mon, 7th Oct, 2022 at 19:53</p>
                        <div className="flex items-center text-sm">
                            <p className="opacity-60 font-medium ">refNumber:</p>
                            <p className="text-super-primary-blue mx-2">AGDIUNE888</p>
                            <CopyIcon></CopyIcon>
                        </div>
                   </div>
                   <p className="ml-auto text-super-gyp-green">₹ 48,000 Paid</p>
               </div>
           </div>            
         </div>

         <div className="mt-12 timeline-container-done timeline-right-done">
           <div className="timeline-content-done">
              <div className="flex items-top mb-12">
                      <div>
                            <p className="font-semibold">First installment</p>
                            <p className="text-sm opacity-60 font-medium">On Mon, 7th Oct, 2022 at 19:53</p>
                            <div className="flex items-center text-sm">
                                <p className="opacity-60 font-medium ">refNumber:</p>
                                <p className="text-super-primary-blue mx-2">AGDIUNE888</p>
                                <CopyIcon></CopyIcon>
                            </div>
                      </div>
                      <p className="ml-auto text-super-gyp-green">₹ 48,000 Paid</p>
                  </div>
           </div>            
         </div> 
       </div>
      <div className="timeline-start">
         <div className="timeline-container-start timeline-right-start">
           <div className="timeline-content-start">
            <div className="flex items-top">
                   <div>
                        <p className="font-semibold">Second installment</p>
                        <p className="text-sm opacity-60 font-medium">Due on Thu, 9th Oct, 2022</p>
                        
                   </div>
                   <p className="ml-auto text-super-gyp-yellow">₹ 48,000 due</p>
               </div>
           </div>            
         </div>

         <div className="mt-12 timeline-container-start timeline-right-start">
           <div className="timeline-content-start">
           <div className="flex items-top">
                   <div>
                        <p className="font-semibold">Third installment</p>
                        <p className="text-sm opacity-60 font-medium">Due on Thu, 9th Oct, 2022</p>
                        
                   </div>
                   <p className="ml-auto text-super-gyp-yellow">₹ 48,000 due</p>
               </div>
           </div>            
         </div> 
       </div>

   </div>
   </div>
  );
};
