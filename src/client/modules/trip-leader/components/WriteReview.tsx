import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { DownloadIcon } from "icons/DownloadIcon";
import { UploadIcon } from "icons/UploadIcon";
import { UnChecked } from "icons/UnChecked";
import { TrashIcon } from "icons/TrashIcon";
import { StarClicked } from "icons/StarClicked";
import { StarUnClicked } from "icons/StarUnClicked";



export const WriteReview = () => {
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
                <p className="text-xl font-bold my-6">Write a review</p>
              
                <p className="font-semibold mt-6">Select a rating</p>

                <div className="flex items-center py-7 border-b border-super-lighter-grey">
                       <StarClicked className="mr-4"></StarClicked> 
                       <StarClicked className="mr-4"></StarClicked>
                       <StarClicked className="mr-4"></StarClicked>
                       <StarClicked className="mr-4"></StarClicked>
                       <StarUnClicked className="mr-4"></StarUnClicked>
                </div>

                <p className="mt-5">Tell us about your experience</p>        
                <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Details please!</span>
                  </label>
                  <textarea  placeholder="Write special requests or a message for the host..." className="h-36 border border-super-lighter-grey input  focus:outline-none w-full" />   
                  <div className="w-full flex items-center mt-2">
                     <p className="text-xs opacity-60 float-right ml-auto">0/200</p>  
                  </div>          
                </div>                                                        
             </div>

                

               
           </div>
           
          
      </div>
      <div className="mt-8 flex items-center  border-t border-super-lighter-grey p-5 ">
      <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
      <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Save</p>
      </div>
      </>
)
}