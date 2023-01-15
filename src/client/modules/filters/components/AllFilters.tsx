import { useState, useEffect,useCallback } from "react";
import { useRouter } from "next/router";
import { CrossModal } from "icons/CrossModal";
import { DatesFilter } from "./DatesFilter";
import { DestinationsFilter } from "./DestinationsFilter";
import { GroupTypeFilter } from "./GroupTypeFilter";
import { TripFocusFilter } from "./TripFocusFilter";
import { AgeFilter } from "./AgeFilter";
import { BudgetFilter } from "./BudgetFilter";


export const AllFilters = () => {
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

            <p className="text-xl font-bold my-7">Trip filters</p>
            <div className="h-[400px] overflow-y-auto pb-7">
                <DatesFilter showCal={showCal} setShowCal={setShowCal}></DatesFilter>
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
                <DestinationsFilter></DestinationsFilter>
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
                <GroupTypeFilter></GroupTypeFilter>
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
                <AgeFilter></AgeFilter>
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
                <BudgetFilter></BudgetFilter>
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
                <TripFocusFilter></TripFocusFilter>
            </div>
          
      </div>
      <div className="flex items-center  border-t border-super-lighter-grey p-5 ">
      <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
      <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Apply</p>
      </div>
      </>
)
}