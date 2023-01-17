import { Age } from "icons/Age";
import { Budget } from "icons/Budget";
import { Calendar } from "icons/Calendar";
import { Destination } from "icons/Destination";
import { Filter } from "icons/Filter";
import { GroupType } from "icons/GroupType";
import { StraightLine } from "icons/StraightLine";
import { TripFocus } from "icons/TripFocus";
import { useRouter } from "next/router";
import { useCallback } from "react";


export const Filters = () => {
    
     const router = useRouter();

     const allFilters = useCallback(() => {
         
          router.push({
              query: {
                ...router.query,
                modal: "all-filters",
              },
            }, undefined, {
              scroll: false,
              shallow: true,
            });
          
          
        }, [router.query]);


        const calendarFilter = useCallback(() => {
         
          router.push({
              query: {
                ...router.query,
                modal: "calendar-filter",
              },
            }, undefined, {
              scroll: false,
              shallow: true,
            });
          
          
        }, [router.query]);  
        
        const groupTypeFilter = useCallback(() => {
         
          router.push({
              query: {
                ...router.query,
                modal: "group-type",
              },
            }, undefined, {
              scroll: false,
              shallow: true,
            });
          
          
        }, [router.query]);  

        const ageFilter = useCallback(() => {
         
          router.push({
              query: {
                ...router.query,
                modal: "age-filter",
              },
            }, undefined, {
              scroll: false,
              shallow: true,
            });
          
          
        }, [router.query]);

        const destinationFilter = useCallback(() => {
         
          router.push({
              query: {
                ...router.query,
                modal: "destination-filter",
              },
            }, undefined, {
              scroll: false,
              shallow: true,
            });
          
          
        }, [router.query]);
        
        const budgetFilter = useCallback(() => {
         
          router.push({
              query: {
                ...router.query,
                modal: "budget-filter",
              },
            }, undefined, {
              scroll: false,
              shallow: true,
            });
          
          
        }, [router.query]);

 
        const tripFocusFilter = useCallback(() => {
         
          router.push({
              query: {
                ...router.query,
                modal: "trip-focus",
              },
            }, undefined, {
              scroll: false,
              shallow: true,
            });
          
          
        }, [router.query]); 

  return (
   <div className="w-full px-16 pt-12 pb-10 flex items-center">
          <div onClick={allFilters} className="cursor-pointer flex items-center">
              <Filter></Filter>
              <p className="ml-2 text-sm font-semibold" >Filters</p>
          </div>

         <StraightLine className="mx-6"></StraightLine>
         
         <div onClick={calendarFilter} className="cursor-pointer flex item-center px-4 py-2 border border-black rounded-[100px]">
              <Calendar className="bg-black"></Calendar>
              <p className="ml-2 text-sm font-semibold">Dates</p>
         </div>

         <div onClick={destinationFilter} className="ml-4 cursor-pointer flex item-center px-4 py-2 border border-black rounded-[100px]">
              <Destination className="text-black"></Destination>
              <p className="ml-2 text-sm font-semibold">Destination</p>
         </div>

         <div  onClick={groupTypeFilter} className="ml-4 cursor-pointer flex item-center px-4 py-2 border border-black rounded-[100px]">
              <GroupType className="pt-1 text-black"></GroupType>
              <p className="ml-2 text-sm font-semibold">Group type</p>
         </div>

         <div  onClick={ageFilter} className="ml-4 cursor-pointer flex item-center px-4 py-2 border border-black rounded-[100px]">
              <Age className="text-black"></Age>
              <p className="ml-2 text-sm font-semibold">Age</p>
         </div>

         <div  onClick={budgetFilter} className="ml-4 cursor-pointer flex item-center px-4 py-2 border border-black rounded-[100px]">
              <Budget className="text-black"></Budget>
              <p className="ml-2 text-sm font-semibold">Budget</p>
         </div>

         <div  onClick={tripFocusFilter} className="ml-4 cursor-pointer flex item-center px-4 py-2 border border-black rounded-[100px]">
              <TripFocus className="text-black"></TripFocus>
              <p className="ml-2 text-sm font-semibold">Trip focus</p>
         </div>
   </div>
  );
};
