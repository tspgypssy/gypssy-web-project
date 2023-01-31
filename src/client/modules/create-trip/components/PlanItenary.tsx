
import { CalendarIcon } from 'icons/CalendarIcon';
import { DownArrow } from 'icons/DownArrow';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const PlanItenary = () => {
    
  const router = useRouter();
  const [value,onChange] = useState(new Date());
  const [showCal,setShowCal] = useState(false); 

  return (
   <div onClick={()=>(setShowCal(false))} className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Let’s plan itinerary</p>

      <div className="px-4 py-3 w-1/2 flex items-center bg-super-bg-light-white rounded-lg">
         <div>
            <p className="font-medium text-smß">Day 1</p>
            <p className="font-semibold mt-1">Arrival to Baku</p>
            <p className="font-semibold mt-1 text-sm">Meet & Greet</p>
         </div>
         <p className="ml-auto underline font-semibold">
            Edit
         </p>
      </div>
   
      <p className="text-lg font-semibold my-6 ">Day 2</p>

      <div className="w-1/2 ">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" placeholder="Your title" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
      </div>

      <div className="w-1/2 mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Primary focus of the day</span>
                  </label>
                  <input type="text" placeholder="Primary focus of the day" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
      </div>

      <div className="w-1/2  mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea  placeholder="Write special requests or a message for the host..." className="h-36 border border-super-lighter-grey input  focus:outline-none w-full" />   
                  <div className="w-full flex items-center mt-2">
                     <p className="text-xs opacity-60 float-right ml-auto">0/200</p>  
                  </div>          
                </div>                                                        
      </div>


   </div>
  );
};
