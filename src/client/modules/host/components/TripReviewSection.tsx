

import { RootState } from 'client/shell/store';
import { Favourite } from 'icons/Favourite';
import { GreyDot } from 'icons/GreyDot';
import { InstagramGrey } from 'icons/InstagramGrey';
import { Line } from 'icons/Line';
import { Middot } from 'icons/Middot';
import { ShareWhite } from 'icons/ShareWhite';
import { StarBigger } from 'icons/StarBigger';
import { StarGrey } from 'icons/StarGrey';
import { YoutubeGrey } from 'icons/YoutubeGrey';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';




export const TripReviewSection = () => {

  const hostReviews = useSelector((state: RootState) => state.host.hostReviews);
  const month = ["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const getCal =(date)=>
  {
    return month[date.getMonth()]+" "+date.getFullYear()
  }

  return (
   <>
       <div className="w-full flex items-center">
               <StarBigger></StarBigger>
               <p className="ml-3 text-lg font-semibold">4.2</p>
               <GreyDot className="mx-3"></GreyDot>
               <p className="text-lg font-semibold">32 reviews</p>
       </div>

       <div className="w-full grid grid-cols-2 gap-11">

       {hostReviews.length>0 && hostReviews.map(( trip ) => (
                           <>{
                            <div>
         
                            <div className="w-full flex items-center mt-6">
                                <img className="h-12 w-12 rounded-full" src={trip?.userAvatar}></img>
                                      <div className="ml-4">
                                          <p className="text-medium opacity-60 text-sm uppercase">{getCal(new Date(trip?.date))}</p>
                                          <p className="text-base font-semibold">{trip?.username}</p>
                                      </div>
                                <div className="ml-auto">
                                    <div className="flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                                      <StarGrey></StarGrey>
                                      <p className="opacity-80 text-sm font-medium ml-2">{trip?.rating}</p>
                                    </div>
                                </div>      
                            </div>
                  
                            <p className="font-medium opacity-60 mt-3">{trip?.review}</p>
                          </div>
                            }</>
                        ))}
       

        
         
        
      </div>

   </>
    
          
   
  );
};
