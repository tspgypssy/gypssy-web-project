import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { DownloadIcon } from "icons/DownloadIcon";
import { UploadIcon } from "icons/UploadIcon";
import { UnChecked } from "icons/UnChecked";
import { TrashIcon } from "icons/TrashIcon";
import { useSelector } from "react-redux";
import { RootState } from "client/shell/store";



export const ImagePreview = () => {
    const router = useRouter();
    
    const imageList = useSelector((state: RootState) => state.tripDetail.imageList);

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
             <div className="carousel w-full mt-5">
                  {imageList.length>0 && imageList.map((item,index) => (
                       <div id={"itemImage"+index} className="rounded-lg carousel-item  ml-5 h-[330px]">
                          <img src={item} className="rounded-lg w-full object-contain" />
                       </div> 
                  ))}                
             </div>               
           </div>        
      </div>
    
      </>
)
}