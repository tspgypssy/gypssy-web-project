import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { CalendarIcon } from "icons/CalendarIcon";
import { DownArrow } from "icons/DownArrow";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PlusIcon } from "icons/PlusIcon";

export const AddTravellerDetails = () => {
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
            
            <p className="text-xl font-bold">Add traveller details</p>
           
            <div className=" ">
              <p className="font-semibold  pt-5">Traveller details 1</p>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Add name here..." className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Add name here..." className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="Add email here..." className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Phone number</span>
                  </label>
                  <input type="text" placeholder="Add number here..." className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

            
             
             <div className="w-full flex items-center py-2 mt-5 rounded-lg border border-black">
                <PlusIcon className="ml-auto"></PlusIcon>
                <p  className="ml-3 mr-auto">Add more</p>
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