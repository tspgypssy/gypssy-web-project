

import { LandingPageMinus } from 'icons/LandingPageMinus';
import { LandingPagePlus } from 'icons/LandingPagePlus';
import { Line } from 'icons/Line';
import React, { useCallback, useRef, useState } from 'react'



export const TripFAQs = () => {

  const [secOpened,setSecOpened] = useState(false);
 
  const toggleDiv =()=>
  {
    setSecOpened(!secOpened);
  }

  return (
    <div onClick={toggleDiv} className="cursor-pointer w-full">
     
    {!secOpened && 
     <div className="w-full flex items-center py-6 border-y border-super-lighter-grey">
     
       <p className="text-2xl font-semibold">FAQs</p>
       <LandingPagePlus className="ml-auto"></LandingPagePlus>
    </div>  
    }

    {secOpened && 
    
       <div className="w-full flex items-top py-6">
         <div className="w-full">
            <div className="font-semibold text-2xl ">FAQs</div>
            <div >
                <div className="mt-6 ">
                   <p className="font-semibold">Flight Timings for Airport Group Pickup</p>
                   <p className="font-medium opacity-60 mt-3">Hotels envisaged Baku – Ramada by Wyndham 5* and Midtown 4* Sheki – Macara
Sheki City Hotel 4* Ganja Shah Abbas Karvansaray 4*</p>
                </div>
                
                <div className="mt-6 ">
                   <p className="font-semibold">Flight Timings for Airport Group Pickup</p>
                   <p className="font-medium opacity-60 mt-3">Hotels envisaged Baku – Ramada by Wyndham 5* and Midtown 4* Sheki – Macara
Sheki City Hotel 4* Ganja Shah Abbas Karvansaray 4*</p>
                </div>

                <div className="mt-6 ">
                   <p className="font-semibold">Flight Timings for Airport Group Pickup</p>
                   <p className="font-medium opacity-60 mt-3">Hotels envisaged Baku – Ramada by Wyndham 5* and Midtown 4* Sheki – Macara
Sheki City Hotel 4* Ganja Shah Abbas Karvansaray 4*</p>
                </div>
            </div>
          </div>
          <div className=""><LandingPageMinus className="mt-3 ml-auto "></LandingPageMinus></div>
         
       </div>
   
    }  

 </div>
  );
};
