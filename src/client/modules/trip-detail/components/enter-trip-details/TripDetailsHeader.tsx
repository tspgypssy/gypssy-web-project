
import { RootState } from 'client/shell/store';
import { Favourite } from 'icons/Favourite';
import { Middot } from 'icons/Middot';
import { MiddotWhite } from 'icons/MiddotWhite';
import { Share } from 'icons/Share';
import { ShareWhite } from 'icons/ShareWhite';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';



export const TripDetailsHeader = () => {

   const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);
  
   const shareTheLink =()=>
   {
      window.open("/trip-detail/"+tripDetail?.id, "_blank");
   }

  return (
   
    <div className="mt-16 flex items-center">
              <div>
                   <p className="font-bold text-3xl">{tripDetail?.title}</p>
                   <div className="flex items-center mt-1">
                      <p className="uppercase font-semibold text-sm">{tripDetail?.destination}</p>
                      <MiddotWhite className="mx-3"></MiddotWhite>
                      <p className="underline font-semibold text-sm">By {tripDetail?.host}</p>
                   </div>
                   <div className="flex items-center mt-3">
                      <img src="/images/mul-images.png"></img>
                      <p className="ml-2 text-sm font-semibold">{tripDetail?.slotsFilled} people joined</p>
                   </div>               
              </div>
              <div className="ml-auto">
                 <div className="flex items-center">
                     {/* <Favourite></Favourite> */}
                     <ShareWhite onClick={shareTheLink} className="cursor-pointer ml-5"> </ShareWhite>
                 </div>
                  
              </div>
       </div>
    
   
  );
};
