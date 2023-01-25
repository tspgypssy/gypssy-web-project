


import { CopyIcon } from 'icons/CopyIcon';
import { InfoIconDark } from 'icons/InfoIconDark';
import React, { useCallback, useRef, useState } from 'react'
import { ParticipantSection } from './ParticipantSection';


export const PayoutDetails = () => {

    
  return (
   <>
    <div  className="bg-white  w-full py-6 ">
       <p className="text-lg font-semibold ">Payout details</p>
       <p className="text-sm text-emdium opacity-60 mt-2">Payouts can change based on new bookings and cancellations</p>
    </div>
   
   <div className="mt-6 border-b border-super-lighter-grey pb-9">

   <div className="timeline-done ">
         <div className="timeline-container-done timeline-right-done">
           <div className="timeline-content-done">
               <div className="flex items-top">
                   <div>
                        <p className="font-semibold">Payout 1</p>
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
                            <p className="font-semibold">Payout 1</p>
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
                        <p className="font-semibold">Payout 3</p>
                        <p className="text-sm opacity-60 font-medium">Due on Thu, 9th Oct, 2022</p>
                        
                   </div>
                   <p className="ml-auto text-super-gyp-yellow">₹ 48,000 Paid</p>
               </div>
           </div>            
         </div>

         <div className="mt-12 timeline-container-start timeline-right-start">
           <div className="timeline-content-start">
           <div className="flex items-top">
                   <div>
                        <p className="font-semibold">Payout 3</p>
                        <p className="text-sm opacity-60 font-medium">Due on Thu, 9th Oct, 2022</p>
                        
                   </div>
                   <p className="ml-auto text-super-gyp-yellow">₹ 48,000 Paid</p>
               </div>
           </div>            
         </div> 
       </div>

   </div>

  
   </>
  );
};
