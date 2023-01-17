import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'


export const EnterMobileNumber = () => {

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
   
    <div className="  ">
        
        <div  className="w-full">
            <div className="w-full flex items-center py-6  border-b border-super-lighter-grey  px-5">
              <div className="h-7 w-7 mr-auto"></div>
              <p className="mx-auto font-bold">Log in or sign in</p>
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>

            <div className=" px-5 py-10 ">
               <p className="text-2xl font-semibold">Provide your mobile number</p>
               <p className="text-sm font-medium opacity-60 ">You will get a link on whatsapp to confirm your identity.</p>
               <input type="number" placeholder="mobile number" className="placeholder:opacity-60 font-bold focus:outline-none p-0 mt-4 text-3xl input input-ghost w-full max-w-xs" />
               <div>
                
               </div>
            </div>
       </div>

       <div className="flex items-center  border-t border-super-lighter-grey p-5 ">
          <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
          <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Apply</p>
      </div>
    </div>
   
  );
};
