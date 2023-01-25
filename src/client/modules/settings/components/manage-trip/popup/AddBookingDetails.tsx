import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { CalendarIcon } from "icons/CalendarIcon";
import { DownArrow } from "icons/DownArrow";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const AddBookingDetails = () => {
    const router = useRouter();
    const [showCal,setShowCal] = useState(false); 
    
    const [value,onChange] = useState(new Date());

    const setFalse =() =>
    {
      setShowCal(false)
    }

     const handleClose = () => {
      
        const query = router.query;
        delete query.modal;
        router.push({
          query: {
            ...query,
          },
        });
      }
      

return (
      <>
      <div onClick={setFalse} className="w-full p-5 pb-0  overflow-y-auto h-[400px]">
            <div className="w-full flex items-center">
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>
            
            <p className="text-xl font-bold">Add booking details</p>
           
            <div className=" ">
             
              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Source of booking</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div>
                    <div className="flex items-center mb-1 mt-4">
                        <p className="text-super-text-primary text-sm">Date of booking</p> 
                    </div>                     
                    <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                        <CalendarIcon></CalendarIcon>
                        <p className="font-semibold opacity-10 ml-3">dd/mm/yyyy</p>
                        <DownArrow className="ml-auto"></DownArrow>
                    </div>
                    {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onChange} value={value} /></div> }                                                                   
              </div>

              <div>
                    <div className="flex items-center mb-1 mt-4">
                            <p className="text-super-text-primary text-sm">Package</p> 
                    </div>                     
                                    
                        <div   className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                            <p className="font-semibold opacity-10 ml-3">-select-</p>     
                            <DownArrow className="ml-auto"></DownArrow> 
                        </div>                         
              </div>

              <div className="mt-5">
                 <p className="font-semibold">Payment type</p>  
                 <div className="flex items-center mt-5">
                      <p className="text-white bg-black px-5 py-3 rounded-[100px] ">Partial payment</p>
                      <p className="ml-3 opacity-60  bg-super-lighter-grey px-5 py-3 rounded-[100px] ">Full payment</p>
                 </div>
              </div>

               <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Amount Paid</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>
   

            </div>

          
          
      </div>
      <div className="mt-8 flex items-center  border-t border-super-lighter-grey p-5 ">
      <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
      <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Apply</p>
      </div>
      </>
)
}