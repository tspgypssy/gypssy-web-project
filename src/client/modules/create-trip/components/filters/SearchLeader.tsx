import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { BlackCross } from "icons/BlackCross";
import { BlackWhiteCross } from "icons/BlackWhiteCross";
import { InstagramGrey } from "icons/InstagramGrey";
import { YoutubeGrey } from "icons/YoutubeGrey";
import { StarGrey } from "icons/StarGrey";


export const SearchLeader = () => {
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
            <input type="text" placeholder="Search for leaders, skills, location" className="my-5 border border-super-lighter-grey input  focus:outline-none w-full" />
           <div className="flex items-center gap-3 ">
                  <div className="px-5 py-3 bg-black text-white rounded-[100px] flex items-center">
                     <p className="mr-2 ">Gender</p>
                     <BlackWhiteCross ></BlackWhiteCross>
                  </div>

                  <div className="px-5 py-2 bg-super-bg-light-white  rounded-[100px] text-center border border-super-lighter-grey">
                     Age
                  </div>

                  <div className="px-5 py-2 bg-super-bg-light-white  rounded-[100px] text-center border border-super-lighter-grey">
                     Pricing
                  </div>

                  <div className="px-5 py-2 bg-super-bg-light-white  rounded-[100px] text-center border border-super-lighter-grey">
                     Rating
                  </div>
           </div>

           <div className="flex items-center gap-3 mt-5">
                  <div className="px-5 py-3 bg-black text-white rounded-[100px] flex items-center">
                     <p className="mr-2 ">Male</p>
                     <BlackWhiteCross ></BlackWhiteCross>
                  </div>

                  <div className="px-5 py-2 bg-super-bg-light-white  rounded-[100px] text-center border border-super-lighter-grey">
                     Female
                  </div>

                  <div className="px-5 py-2 bg-super-bg-light-white  rounded-[100px] text-center border border-super-lighter-grey">
                     Others
                  </div>

           </div>

           <div className="flex items-center gap-3 py-5 border-b border-super-lighter-grey border-dashed">
                <img className="w-20 h-20" src="/images/dummy-user.png"></img>
                <div>
                <div className="flex items-center">
                    <div>
                        <p className="text-sm font-semibold">Jerome Bell</p>
                        <div className="mt-1 flex items-center text-xs font-semibold">
                          <p>India</p>
                          <p className="px-1">|</p>
                          <p>Male</p>
                          <p className="px-1">|</p>
                          <p>21</p>
                        </div>
                    </div>
                    <p className="ml-auto text-sm font-bold">₹ 1,000/day</p>
                </div>
                <div className="w-full flex items-center mt-3">
                      <div className="flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <InstagramGrey></InstagramGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">10.4k</p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <YoutubeGrey></YoutubeGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">10.4k</p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        
                        <p className="opacity-80 text-sm font-medium ">10 trips </p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <StarGrey></StarGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">4.2</p>
                      </div>
                  </div>
                </div>
           </div>

           <div className="flex items-center gap-3 py-5 border-b border-super-lighter-grey border-dashed">
                <img className="w-20 h-20" src="/images/dummy-user.png"></img>
                <div>
                <div className="flex items-center">
                    <div>
                        <p className="text-sm font-semibold">Jerome Bell</p>
                        <div className="mt-1 flex items-center text-xs font-semibold">
                          <p>India</p>
                          <p className="px-1">|</p>
                          <p>Male</p>
                          <p className="px-1">|</p>
                          <p>21</p>
                        </div>
                    </div>
                    <p className="ml-auto text-sm font-bold">₹ 1,000/day</p>
                </div>
                <div className="w-full flex items-center mt-3">
                      <div className="flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <InstagramGrey></InstagramGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">10.4k</p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <YoutubeGrey></YoutubeGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">10.4k</p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        
                        <p className="opacity-80 text-sm font-medium ">10 trips </p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <StarGrey></StarGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">4.2</p>
                      </div>
                  </div>
                </div>
           </div>

          
           
          
      </div>
      <div className="mt-8 flex items-center  border-t border-super-lighter-grey p-5 ">
      <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
      <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Confirm request</p>
      </div>
      </>
)
}