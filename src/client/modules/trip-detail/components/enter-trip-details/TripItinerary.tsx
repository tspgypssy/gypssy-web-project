

import { RootState } from 'client/shell/store';
import { LandingPageMinus } from 'icons/LandingPageMinus';
import { LandingPagePlus } from 'icons/LandingPagePlus';
import { Line } from 'icons/Line';
import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux';



export const TripItinerary = () => {

  const [secOpened,setSecOpened] = useState(true);
  const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);
  const month = ["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const getCal =(date)=>
  {
    return date.getDate() +"-"+month[date.getMonth()]+"-"+date.getFullYear()
  }

  const toggleDiv =()=>
  {
    setSecOpened(!secOpened);
  }

  const getDateVal=(date,index) =>
  {
    const dateV = new Date(date);
    dateV.setDate(dateV.getDate() + index);
    return  getCal(dateV);
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
                
                {tripDetail?.itinerary?.length>0 && tripDetail?.itinerary.map((item,index) => (
                    <div className="mt-12 timeline-container timeline-right">
                    <div className="timeline-content">
                        <div className="w-full flex items-center font-semibold">
                          <p>Day{item?.day}</p>
                          <p className="ml-auto">{getDateVal(tripDetail?.fromDate,index)} - {item?.title}</p>
                        </div>
                        <div className="mt-4">
                            <span className="w-auto opacity-60 border border-super-ligher-grey rounded-[100px] p-2">{item?.focus}</span>
                            <p className="mt-5 text-sm font-medium opacity-60">{item?.description}</p>
                        </div>
                    </div>            
                  </div>
              ))}
                 
            </div>
            </div>
          </div>
          <div className=""><LandingPageMinus className="mt-3 ml-auto "></LandingPageMinus></div>
         
       </div>
   
    }  

 </div>
  );
};
