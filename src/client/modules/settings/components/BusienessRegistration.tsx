import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { DownloadIcon } from "icons/DownloadIcon";
import { UploadIcon } from "icons/UploadIcon";
import { UnChecked } from "icons/UnChecked";



export const BusienessRegistration = () => {
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
                <p className="text-xl font-bold my-6">Business registration</p>
                <div className="mt-5">
                    <div className="form-control w-full ">
                      <label className="label !py-1 text-xs">
                        <span className="label-text">Document name</span>
                      </label>
                      <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                    </div>                                                        
                 </div>

                 <div className="mt-6">
                    <div className="w-full flex items-center">
                            <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                            <div className="bg-super-bg-light-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                                <div className="border-r border-super-lighter-grey w-full">
                                      <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                      <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                                </div>
                                <DownloadIcon className="ml-4"></DownloadIcon>
                            </div>
                      </div>

                      <div className="w-full flex items-center mt-2">
                            <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                            <div className="bg-super-bg-light-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                                <div className="border-r border-super-lighter-grey w-full">
                                      <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                      <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                                </div>
                                <DownloadIcon className="ml-4"></DownloadIcon>
                            </div>
                      </div>
                 </div>

                 <div className="bg-super-bg-light-white w-full py-4 rounded-lg mt-5 flex items-center">
                        <UploadIcon className="ml-auto"></UploadIcon>
                        <p className="mr-auto text-sm font-semibold ml-5">Upload files</p>
                 </div>

                 <div className="flex items-center mt-5">
                    <UnChecked></UnChecked>
                    <div className="ml-5 font-semibold ">
                        <span className="opacity-60">I confirm the </span>
                        <span  className=" font-bold underline ">Terms of use </span>
                        <span className="opacity-60">&  </span>
                        <span className=" font-bold underline ">Privacy </span>
                        <span className="opacity-60">&  </span>
                        <span className=" font-bold underline ">cookie policy</span>
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