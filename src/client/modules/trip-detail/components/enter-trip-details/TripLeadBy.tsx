

import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'



export const TripLeadBy = () => {

  return (
   <><div className="my-6 border-y border-super-lighter-grey">
      <p className="text-lg font-medium my-6"> Trip led by</p>
      <div className="grid grid-cols-2 gap-1 mb-6">
           <div className="flex items-center mb-6">
                  <img src="/images/dummy-user.png"></img>
                  <div className="ml-4">
                     <p className="opacity-60 uppercase text-sm font-medium">Leader</p>
                     <p className="  font-semibold">Jane Cooper</p>
                  </div>
           </div>

           <div className="flex items-center  mb-6">
                  <img src="/images/dummy-user.png"></img>
                  <div className="ml-4">
                     <p className="opacity-60 uppercase text-sm font-medium">Support</p>
                     <p className="  font-semibold">Jane Cooper</p>
                  </div>
           </div>

           <div className="flex items-center  mb-6">
                  <img src="/images/dummy-user.png"></img>
                  <div className="ml-4">
                     <p className="opacity-60 uppercase text-sm font-medium">Yoga Instructor</p>
                     <p className="  font-semibold">Jane Cooper</p>
                  </div>
           </div>
      </div>
   </div>  
   <div>
      <p className="my-6 text-lg font-semibold">Overview</p>
      <p className="font-medium opacity-60 pb-6 mb-6">The capital of Azerbaijan, this oil-rich city is truly a hidden European gem. It is
dynamic, world-class, extremely rich in culture and very, very suave. Get ready for
charming winters, historic architecture, vibrant nightlife, and Mud Volcanoes.
</p>
   </div>     
   </>
  );
};
