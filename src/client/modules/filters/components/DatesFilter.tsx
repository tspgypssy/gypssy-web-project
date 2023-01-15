import { CalendarIcon } from "icons/CalendarIcon";
import { DownArrow } from "icons/DownArrow";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export const DatesFilter = ({showCal,setShowCal}) => {
    
  
  const [value,onChange] = useState(new Date());

  return (
  <>

  <p className="text-base font-bold">Dates</p>

  <div>
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

   <div className="mt-5">
      <div className="flex items-center mb-1 mt-4">
          <p className="text-super-text-primary text-sm">To</p> 
      </div>                     
       <div className="border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
          <CalendarIcon></CalendarIcon>
          <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p>
          <DownArrow className="ml-auto"></DownArrow>
       </div>                                                                   
   </div>
  </> 
  );
};
