

import { LandingPageMinus } from 'icons/LandingPageMinus';
import { LandingPagePlus } from 'icons/LandingPagePlus';
import { Line } from 'icons/Line';
import React, { useCallback, useRef, useState } from 'react'



export const TripItinerary = () => {

  const [secOpened,setSecOpened] = useState(true);
 
  const toggleDiv =()=>
  {
    setSecOpened(!secOpened);
  }

  return (
    <div onClick={toggleDiv} className="cursor-pointer w-full">
     
    {!secOpened && 
     <div className="w-full flex items-center py-6 border-y border-super-lighter-grey">
     
       <p className="text-2xl font-semibold">Itinerary</p>
       <LandingPagePlus className="ml-auto"></LandingPagePlus>
    </div>  
    }

    {secOpened && 
    
       <div className="w-full flex items-top py-6">
         <div className="w-full">
            <div className="font-semibold text-2xl ">Itinerary</div>
            <div className="mt-6 ">
            <div className="timeline">
                  <div className="timeline-container timeline-right">
                    <div className="timeline-content">
                        <div className="w-full flex items-center font-semibold">
                          <p>Day1</p>
                          <p className="ml-auto">25.12.2022 - Arrival to Baku (D)</p>
                        </div>
                        <div className="mt-4">
                            <span className="w-auto opacity-60 border border-super-ligher-grey rounded-[100px] p-2">Meet and Greet</span>
                            <p className="mt-5 text-sm font-medium opacity-60">The capital of Azerbaijan, this oil-rich city is truly a hidden European gem. It is
dynamic, world-class, extremely rich in culture and very, very suave. Get ready for
charming winters, historic architecture, vibrant nightlife, and Mud Volcanoes.</p>
                        </div>
                    </div>            
                  </div>

                  <div className="mt-12 timeline-container timeline-right">
                    <div className="timeline-content">
                        <div className="w-full flex items-center font-semibold">
                          <p>Day1</p>
                          <p className="ml-auto">25.12.2022 - Arrival to Baku (D)</p>
                        </div>
                        <div className="mt-4">
                            <span className="w-auto opacity-60 border border-super-ligher-grey rounded-[100px] p-2">Meet and Greet</span>
                            <p className="mt-5 text-sm font-medium opacity-60">The capital of Azerbaijan, this oil-rich city is truly a hidden European gem. It is
dynamic, world-class, extremely rich in culture and very, very suave. Get ready for
charming winters, historic architecture, vibrant nightlife, and Mud Volcanoes.</p>
                        </div>
                    </div>            
                  </div>

                  <div className="mt-12 timeline-container timeline-right">
                    <div className="timeline-content">
                        <div className="w-full flex items-center font-semibold">
                          <p>Day1</p>
                          <p className="ml-auto">25.12.2022 - Arrival to Baku (D)</p>
                        </div>
                        <div className="mt-4">
                            <span className="w-auto opacity-60 border border-super-ligher-grey rounded-[100px] p-2">Meet and Greet</span>
                            <p className="mt-5 text-sm font-medium opacity-60">The capital of Azerbaijan, this oil-rich city is truly a hidden European gem. It is
dynamic, world-class, extremely rich in culture and very, very suave. Get ready for
charming winters, historic architecture, vibrant nightlife, and Mud Volcanoes.</p>
                        </div>
                    </div>            
                  </div>

                  <div className="mt-12 timeline-container timeline-right">
                    <div className="timeline-content">
                        <div className="w-full flex items-center font-semibold">
                          <p>Day1</p>
                          <p className="ml-auto">25.12.2022 - Arrival to Baku (D)</p>
                        </div>
                        <div className="mt-4">
                            <span className="w-auto opacity-60 border border-super-ligher-grey rounded-[100px] p-2">Meet and Greet</span>
                            <p className="mt-5 text-sm font-medium opacity-60">The capital of Azerbaijan, this oil-rich city is truly a hidden European gem. It is
dynamic, world-class, extremely rich in culture and very, very suave. Get ready for
charming winters, historic architecture, vibrant nightlife, and Mud Volcanoes.</p>
                        </div>
                    </div>            
                  </div>

                  <div className="mt-12 timeline-container timeline-right">
                    <div className="timeline-content">
                        <div className="w-full flex items-center font-semibold">
                          <p>Day1</p>
                          <p className="ml-auto">25.12.2022 - Arrival to Baku (D)</p>
                        </div>
                        <div className="mt-4">
                            <span className="w-auto opacity-60 border border-super-ligher-grey rounded-[100px] p-2">Meet and Greet</span>
                            <p className="mt-5 text-sm font-medium opacity-60">The capital of Azerbaijan, this oil-rich city is truly a hidden European gem. It is
dynamic, world-class, extremely rich in culture and very, very suave. Get ready for
charming winters, historic architecture, vibrant nightlife, and Mud Volcanoes.</p>
                        </div>
                    </div>            
                  </div>
                  
                  
                </div>
            </div>
          </div>
          <div className=""><LandingPageMinus className="mt-3 ml-auto "></LandingPageMinus></div>
         
       </div>
   
    }  

 </div>
  );
};
