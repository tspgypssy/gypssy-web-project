

import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'



export const TripDetailsImage = () => {

  return (
   
    <div className="grid grid-cols-2 gap-4 h-[400px]">
          <div className="mt-8 relative">
             <img className="w-full h-[400px] object-cover rounded-tl-lg rounded-bl-lg" src="/images/trip-image-dummy.png "></img>
             <div className="flex items-center absolute bottom-5  bg-black text-white py-3 px-6 rounded-tr-lg rounded-br-lg">
                 <p>8 Days trip</p>
                 <Line className="ml-2"></Line>
                 <p>25 Dec’22 - 1 Jan’23</p>
             </div>
          </div>   
          <div className="mt-8 grid grid-cols-2 gap-4 ">
             <img className="w-full h-[192px] object-cover  " src="/images/trip-image-dummy.png "></img>
             <img className="w-full h-[192px] object-cover rounded-tr-lg " src="/images/trip-image-dummy.png "></img>
             <img className="w-full h-[192px] object-cover " src="/images/trip-image-dummy.png "></img>
             <div className="relative">
               <img className="w-full h-[192px] object-cover rounded-br-lg " src="/images/trip-image-dummy.png "></img>
               <p className="absolute right-5 bottom-5 py-2 px-3 bg-white rounded-lg">5+ photos</p>
            </div>
          </div>
    </div>
    
   
  );
};
