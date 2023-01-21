
import { Favourite } from 'icons/Favourite';
import { Middot } from 'icons/Middot';
import { MiddotWhite } from 'icons/MiddotWhite';
import { Share } from 'icons/Share';
import { ShareWhite } from 'icons/ShareWhite';
import React, { useCallback, useRef } from 'react'



export const TripDetailsHeader = () => {

  return (
   
    <div className="mt-16 flex items-center">
              <div>
                   <p className="font-bold text-3xl">Azerbaijan</p>
                   <div className="flex items-center mt-1">
                      <p className="uppercase font-semibold text-sm">New year in europe</p>
                      <MiddotWhite className="mx-3"></MiddotWhite>
                      <p className="underline font-semibold text-sm">By Wade Warren</p>
                   </div>
                   <div className="flex items-center mt-3">
                      <img src="/images/mul-images.png"></img>
                      <p className="ml-2 text-sm font-semibold">8 people joined</p>
                   </div>               
              </div>
              <div className="ml-auto">
                 <div className="flex items-center">
                     <Favourite></Favourite>
                     <ShareWhite className="ml-5"> </ShareWhite>
                 </div>
                  
              </div>
       </div>
    
   
  );
};
