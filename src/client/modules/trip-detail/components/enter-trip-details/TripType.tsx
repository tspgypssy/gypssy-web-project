

import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'



export const TripType = () => {

  return (
   
      <div>
         <div className="flex items-center">
                  <div>
                     <p className="uppercase text-xs opacity-60 font-semibold">Trip type</p>
                     <p className="text-sm font-medium bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded">All women’s trip</p>
                  </div>

                  <div className="ml-6">
                     <p className="uppercase text-xs opacity-60 font-semibold">Age</p>
                     <p className="text-sm font-medium bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded">18+</p>
                  </div>

                  <div className="ml-6">
                     <p className="uppercase text-xs opacity-60 font-semibold">Booking Ends on</p>
                     <p className="text-sm font-medium bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded">16 Dec’22</p>
                  </div>

                  <div className="ml-6">
                     <p className="uppercase text-xs opacity-60 font-semibold">Slots</p>
                     <div className="bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded flex items-center">
                        <p className="text-sm font-semibold ">4</p>
                        <p  className="text-xs font-medium opacity-60 ml-2">/12</p>
                     </div>
                    
                  </div>
         </div>
      </div>
          
   
  );
};
