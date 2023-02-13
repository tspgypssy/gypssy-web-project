import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { DatesFilter } from "../DatesFilter";



export const CalendarFilter = () => {
    const router = useRouter();
    const [showFromCal,setShowFromCal] = useState(false); 
    const [showToCal,setShowToCal] = useState(false); 

    const setFalse =() =>
    {
      setShowFromCal(false);
      setShowToCal(false);
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
      <div onClick={setFalse}>
      <div  className="w-full p-5 pb-0">
            <div className="w-full flex items-center">
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>
            
            <div className="h-[400px] overflow-y-auto">
               <DatesFilter 
                   showFromCal={showFromCal} setShowFromCal={setShowFromCal}
                   showToCal={showToCal} setShowToCal={setShowToCal}
               ></DatesFilter>
            </div>
           
           
          
      </div>
      <div className="mt-8 flex items-center  border-t border-super-lighter-grey p-5 ">
      <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
      <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Apply</p>
      </div>
      </div>
)
}