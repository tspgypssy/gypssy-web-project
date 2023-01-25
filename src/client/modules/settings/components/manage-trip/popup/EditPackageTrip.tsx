import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";


export const EditPackageTrip = () => {
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
      <div onClick={setFalse} className="w-full p-5 pb-0  overflow-y-auto h-[400px]">
            <div className="w-full flex items-center">
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>
            
            <p className="text-xl font-bold">Edit trip details</p>
           
            <div className=" py-5 border-b border-super-light-grey">
              <p>Package 1</p>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Package name</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Package price</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

            </div>

            <div className=" py-5 border-b border-super-light-grey">
              <p>Package 2</p>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Package name</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Package price</span>
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