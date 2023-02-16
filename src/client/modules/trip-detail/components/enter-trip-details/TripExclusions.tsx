

import { RootState } from 'client/shell/store';
import { LandingPageMinus } from 'icons/LandingPageMinus';
import { LandingPagePlus } from 'icons/LandingPagePlus';
import { Line } from 'icons/Line';
import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux';



export const TripExclusions = () => {

  const [secOpened,setSecOpened] = useState(false);
  const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);

  const toggleDiv =()=>
  {
    setSecOpened(!secOpened);
  }

  return (
    <div onClick={toggleDiv} className="cursor-pointer w-full">
     
    {!secOpened && 
     <div className="w-full flex items-center py-6 border-y border-super-lighter-grey">
     
       <p className="text-2xl font-semibold">Exclusions</p>
       <LandingPagePlus className="ml-auto"></LandingPagePlus>
    </div>  
    }

    {secOpened && 
    
       <div className="w-full flex items-top py-6">
         <div className="w-full">
            <div className="font-semibold text-2xl ">Exclusions</div>
            <div className="mt-6 ">
              <ul className="list-disc ml-6 font-medium opacity-60">
                    {tripDetail?.exclusions.length>0 && tripDetail?.exclusions.map((item,index) => (
                        <li className="mt-3">{item}</li>
                  ))}
                </ul>
            </div>
          </div>
          <div className=""><LandingPageMinus className="mt-3 ml-auto "></LandingPageMinus></div>
         
       </div>
   
    }  

 </div>
  );
};
