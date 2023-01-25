import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";


export const EditTrip = () => {
    const router = useRouter();
    const [showCal,setShowCal] = useState(false); 

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
      <div onClick={setFalse} className="w-full p-5 pb-0">
            <div className="w-full flex items-center">
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>
            
            <div className="">
                <p className="text-xl font-bold">Edit trip details</p>
                <p className="mt-6 font-medium opacity-60">You are about to edit trip details which includes
trip pricing and slots. Are you sure you want to
continue?</p>
            </div>
           
           
          
      </div>
      <div className="mt-8 flex items-center  border-t border-super-lighter-grey p-5 ">
      <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
      <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Apply</p>
      </div>
      </>
)
}