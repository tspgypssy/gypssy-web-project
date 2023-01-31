import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { DownloadIcon } from "icons/DownloadIcon";
import { UploadIcon } from "icons/UploadIcon";
import { UnChecked } from "icons/UnChecked";
import { TrashIcon } from "icons/TrashIcon";
import { RedTicked } from "icons/RedTicked";
import { RedUnTicked } from "icons/RedUnTicked";



export const CancelBooking = () => {
    const router = useRouter();
    
   

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
      <div  className="w-full p-5 pb-0">
            <div className="w-full flex items-center">
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>
            
           <div>
                <p className="text-xl font-bold my-6">Cancel booking</p>
                <p className="font-semibold  my-6">Select travellers</p>
               
               <div className="flex items-center text-super-gyp-red bg-super-gyp-red bg-opacity-10  rounded-lg w-full p-5 mb-5">
                       <RedTicked className="mr-5"></RedTicked> 
                       <p className=" text-sm font-semibold">Kristin Watson</p>
               </div>

               <div className="flex items-center text-super-gyp-red bg-super-gyp-red bg-opacity-10  rounded-lg w-full p-5 mb-5">
                       <RedTicked className="mr-5"></RedTicked> 
                       <p className=" text-sm font-semibold">Kristin Watson</p>
               </div>

               <div className="flex items-center bg-super-bg-light-white  rounded-lg w-full p-5 mb-5">
                       <RedUnTicked className="mr-5"></RedUnTicked> 
                       <p className=" text-sm font-semibold">Kristin Watson</p>
               </div>
               
           </div>
           
          
      </div>
      <div className="mt-8 flex items-center  border-t border-super-lighter-grey p-5 ">
      <p onClick={handleClose} className="cursor-pointer underline font-semibold">clos</p>
      <p className="cursor-pointer text-white bg-super-gyp-red px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Cancel booking</p>
      </div>
      </>
)
}