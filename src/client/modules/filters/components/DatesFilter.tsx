import { CalendarIcon } from "icons/CalendarIcon";
import { DownArrow } from "icons/DownArrow";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export const DatesFilter = ({showFromCal,setShowFromCal,showToCal,setShowToCal}) => {
    
  
  const [fromDate,setFromDate] = useState(new Date());
  const [formDateChanged,setFromDateChanged] = useState(false);

  const [toDate,setToDate] = useState(new Date());
  const [toDateChanged,setToDateChanged] = useState(false);
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
  const onFromDateChange =(value, event)=>
  {
    setFromDateChanged(true)
    setFromDate(value);
  }

  const convertFromDate = () =>
  {
    let dateMDY = `${fromDate.getDate()}th ${ monthNames[fromDate.getMonth()]} ${fromDate.getFullYear()}`;
    return dateMDY;
  }

  const onToDateChange =(value, event)=>
  {
    setToDateChanged(true)
    setToDate(value);
  }

  const convertToDate = () =>
  {
    let dateMDY = `${toDate.getDate()}th ${ monthNames[toDate.getMonth()]} ${toDate.getFullYear()}`;
    return dateMDY;
  }

  return (
  <>

  <p className="text-base font-bold">Dates</p>

  <div>
      <div className="flex items-center mb-1 mt-4">
          <p className="text-super-text-primary text-sm">From</p> 
      </div>                     
       <div  onClick={(e)=>{ e.stopPropagation();setShowFromCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
          <CalendarIcon></CalendarIcon>
          {!formDateChanged && <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p> }
          {formDateChanged && <p className="font-semibold ml-3">{convertFromDate()}</p> }
          <DownArrow className="ml-auto"></DownArrow>
       </div>
       {showFromCal && <div onClick={(e)=>{ e.stopPropagation();setShowFromCal(true)}} className="w-full z-20 mt-2"><Calendar maxDate={toDate} onChange={onFromDateChange} value={fromDate} /></div> }                                                                   
   </div>

   <div className="mt-5">
      <div className="flex items-center mb-1 mt-4">
          <p className="text-super-text-primary text-sm">To</p> 
      </div>                     
       <div  onClick={(e)=>{ e.stopPropagation();setShowToCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
          <CalendarIcon></CalendarIcon>
          {!toDateChanged && <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p> }
          {toDateChanged && <p className="font-semibold ml-3">{convertToDate()}</p> }
          <DownArrow className="ml-auto"></DownArrow>
       </div>
       {showToCal && <div onClick={(e)=>{ e.stopPropagation();setShowToCal(true)}} className="w-full z-20 mt-2"><Calendar minDate={fromDate} onChange={onToDateChange} value={toDate} /></div> }                                                                                                                                  
   </div>
  </> 
  );
};
