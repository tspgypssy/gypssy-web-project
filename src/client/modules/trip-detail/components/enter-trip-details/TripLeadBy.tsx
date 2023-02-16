

import { RootState } from 'client/shell/store';
import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';


export const TripLeadBy = () => {

   const tripDetail = useSelector((state: RootState) => state.tripDetail.tripDetails);
 

  return (
   <><div className="my-6 border-y border-super-lighter-grey">
      <p className="text-lg font-medium my-6"> Trip led by</p>
      <div className="grid grid-cols-2 gap-1 mb-6">

      {tripDetail?.tripLedBy && tripDetail?.tripLedBy.map((item) => (
           <div className="flex items-center mb-6">
               <img src={item?.avatar} className="h-12 w-12 rounded-full"></img>
               <div className="ml-4">
                  <p className="opacity-60 uppercase text-sm font-medium">{item?.role}</p>
                  <p className="  font-semibold">{item?.name}</p>
               </div>
           </div>

          ))}

           
         
      </div>
   </div>  
   <div>
      <p className="my-6 text-lg font-semibold">Overview</p>
      <p className="font-medium opacity-60 pb-6 mb-6">{tripDetail?.description}
</p>
   </div>     
   </>
  );
};
