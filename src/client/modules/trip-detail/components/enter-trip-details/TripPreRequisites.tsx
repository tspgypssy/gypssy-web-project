

import { LandingPageMinus } from 'icons/LandingPageMinus';
import { LandingPagePlus } from 'icons/LandingPagePlus';
import { Line } from 'icons/Line';
import React, { useCallback, useRef, useState } from 'react'



export const TripPreRequisites = () => {

  const [secOpened,setSecOpened] = useState(false);
 
  const toggleDiv =()=>
  {
    setSecOpened(!secOpened);
  }

  return (
    <div onClick={toggleDiv} className="cursor-pointer w-full">
     
    {!secOpened && 
     <div className="w-full flex items-center py-6 border-y border-super-lighter-grey">
     
       <p className="text-2xl font-semibold">Pre - requisites</p>
       <LandingPagePlus className="ml-auto"></LandingPagePlus>
    </div>  
    }

    {secOpened && 
    
       <div className="w-full flex items-top py-6">
         <div className="w-full">
            <div className="font-semibold text-2xl ">Pre - requisites</div>
            <div className="mt-6 ">
                <ul className="list-disc ml-6 font-medium opacity-60">
                   <li className="mt-3">Accommodation: 2x nights in Baku 2x nights in Sheki 1x nights in Ganja 2x nights in
Baku</li>
                    <li className="mt-3">Air-conditioned vehicle</li>
                    <li className="mt-3">Dance folk show on dinner in Sheki</li>
                </ul>
            </div>
          </div>
          <div className=""><LandingPageMinus className="mt-3 ml-auto "></LandingPageMinus></div>
         
       </div>
   
    }  

 </div>
  );
};
