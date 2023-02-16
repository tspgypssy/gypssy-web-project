

import { RootState } from 'client/shell/store';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';



export const TripType = () => {

   const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);
 
   const month = ["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const getCal =(date)=>
  {
    return date.getDate() +" "+month[date.getMonth()]+"'"+date.getFullYear()
  }
  const getEndDate =() =>
  {
    if(tripDetail?.bookingCloseDate)
    {
      const fromDate = new Date(tripDetail?.bookingCloseDate);
      
      return getCal(fromDate); 
    }
   
    return ""
  }

  return (
   
      <div>
         <div className="flex items-center">
                  <div>
                     <p className="uppercase text-xs opacity-60 font-semibold">Trip type</p>
                     <p className="text-sm font-medium bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded capitalize">{tripDetail?.tripType}</p>
                  </div>

                  <div className="ml-6">
                     <p className="uppercase text-xs opacity-60 font-semibold">Age</p>
                     <p className="text-sm font-medium bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded">{tripDetail?.fromAge} - {tripDetail?.toAge}</p>
                  </div>

                  <div className="ml-6">
                     <p className="uppercase text-xs opacity-60 font-semibold">Booking Ends on</p>
                     <p className="text-sm font-medium bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded">{getEndDate()}</p>
                  </div>

                  <div className="ml-6">
                     <p className="uppercase text-xs opacity-60 font-semibold">Slots</p>
                     <div className="bg-super-lighter-grey px-4 py-[7.5px] mt-2 rounded flex items-center">
                        <p className="text-sm font-semibold ">{tripDetail?.slotsFilled}</p>
                        <p  className="text-xs font-medium opacity-60 ml-2">/{tripDetail?.totalSlots}</p>
                     </div>
                    
                  </div>
         </div>
      </div>
          
   
  );
};
