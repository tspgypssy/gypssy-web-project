
import actionList from 'client/shell/actions';
import { CalendarIcon } from 'icons/CalendarIcon';
import { DownArrow } from 'icons/DownArrow';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const EnterTripDetails = () => {
    
  const router = useRouter();
  const [fromDate,onFromDateChange] = useState(new Date());
  const [toDate,onToDateChange] = useState(new Date());
  const [closeDate,onCloseDateChange] = useState(new Date());
  const [showFromCal,setShowFromCal] = useState(false); 
  const [showToCal,setShowToCal] = useState(false); 
  const [showCloseCal,setShowCloseCal] = useState(false); 

  const closeAll =() =>
  {
   setShowFromCal(false);
   setShowToCal(false);
   setShowCloseCal(false);
  }

  const moveToNextPage =()=>
  {
   actionList.updateCreateTripPageSelected({"pageTypeSelected":"enter-group-details"})
  }

  const moveToPrevPage =()=>
  {
   actionList.updateCreateTripPageSelected({"pageTypeSelected":"title-cover-image"})
  }
  const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const getDate = (date) =>
  {
    const dateVal = new Date(date);
    let mnth = month[dateVal.getMonth()];
    let day = dateVal.getDate();
    let year = dateVal.getFullYear();
    return day+" "+mnth+", "+year
  }

  return (
   <div onClick={closeAll} className="w-full h-screen bg-white overflow-y-auto">
       <div className=" px-36  createTripTitleDesc">
       <p className="text-4xl font-bold my-6">When is this trip?</p>

            <div className="w-1/2">
               <div className="flex items-center mb-1 mt-4">
                  <p className="text-super-text-primary text-sm">From</p> 
               </div>                     
               <div  onClick={(e)=>{ e.stopPropagation();setShowFromCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                  <CalendarIcon></CalendarIcon>
                  {fromDate ==null ? <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p> :<p className="font-semibold  ml-3">{getDate(fromDate)}</p>}
                  <DownArrow className="ml-auto"></DownArrow>
               </div>
               {showFromCal && <div onClick={(e)=>{ e.stopPropagation();setShowFromCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onFromDateChange} value={fromDate} /></div> }                                                                   
            </div>

            <div className="w-1/2">
               <div className="flex items-center mb-1 mt-4">
                  <p className="text-super-text-primary text-sm">To</p> 
               </div>                     
               <div  onClick={(e)=>{ e.stopPropagation();setShowToCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                  <CalendarIcon></CalendarIcon>
                  {toDate ==null ? <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p> :<p className="font-semibold  ml-3">{getDate(toDate)}</p>}
                  <DownArrow className="ml-auto"></DownArrow>
               </div>
               {showToCal && <div onClick={(e)=>{ e.stopPropagation();setShowToCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onToDateChange} value={toDate} /></div> }                                                                   
            </div>

            <div className="w-1/2">
               <div className="flex items-center mb-1 mt-4">
                  <p className="text-super-text-primary text-sm">Booking closes on</p> 
               </div>                     
               <div  onClick={(e)=>{ e.stopPropagation();setShowCloseCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                  <CalendarIcon></CalendarIcon>
                  {closeDate ==null ? <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p> :<p className="font-semibold  ml-3">{getDate(closeDate)}</p>}
                  <DownArrow className="ml-auto"></DownArrow>
               </div>
               {showCloseCal && <div onClick={(e)=>{ e.stopPropagation();setShowCloseCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onCloseDateChange} value={closeDate} /></div> }                                                                   
            </div>
         </div>
         
         <div className="w-full px-10 border-t border-[#EBEBEB]  z-[60]    overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
          <p onClick={moveToPrevPage} className="font-semibold underline cursor-pointer ">Back</p>
           <button onClick={moveToNextPage} className="cursor-pointer ml-auto rounded-[100px] text-white bg-black px-8 py-3  mt-3">Continue</button>
          </div>
        </div> 

   </div>
  );
};
