
import { CalendarIcon } from 'icons/CalendarIcon';
import { DownArrow } from 'icons/DownArrow';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const EnterTripDetails = () => {
    
  const router = useRouter();
  const [value,onChange] = useState(new Date());
  const [showCal,setShowCal] = useState(false); 

  return (
   <div onClick={()=>(setShowCal(false))} className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">When is this trip?</p>

         <div className="w-1/2">
            <div className="flex items-center mb-1 mt-4">
               <p className="text-super-text-primary text-sm">From</p> 
            </div>                     
            <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
               <CalendarIcon></CalendarIcon>
               <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p>
               <DownArrow className="ml-auto"></DownArrow>
            </div>
            {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onChange} value={value} /></div> }                                                                   
         </div>

         <div className="w-1/2">
            <div className="flex items-center mb-1 mt-4">
               <p className="text-super-text-primary text-sm">To</p> 
            </div>                     
            <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
               <CalendarIcon></CalendarIcon>
               <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p>
               <DownArrow className="ml-auto"></DownArrow>
            </div>
            {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onChange} value={value} /></div> }                                                                   
         </div>

         <div className="w-1/2">
            <div className="flex items-center mb-1 mt-4">
               <p className="text-super-text-primary text-sm">Booking closes on</p> 
            </div>                     
            <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
               <CalendarIcon></CalendarIcon>
               <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p>
               <DownArrow className="ml-auto"></DownArrow>
            </div>
            {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onChange} value={value} /></div> }                                                                   
         </div>

         <div className="bottom-5 w-[90%]  z-[60]  fixed  overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Back</p>
           <button className="ml-auto rounded-[100px] text-white bg-black px-8 py-3">Continue</button>
          </div>
       </div>  

   </div>
  );
};
