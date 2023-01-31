
import { PlusIcon } from 'icons/PlusIcon';
import { Airplane } from 'icons/Airplane';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Search } from 'icons/Search';

export const TripExclusions = () => {
    
  const router = useRouter();
  const [value,onChange] = useState(new Date());
  const [showCal,setShowCal] = useState(false); 

  return (
   <div onClick={()=>(setShowCal(false))} className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Trip exclusions</p>
     
       <div className="w-2/3 grid grid-cols-2 gap-4 ">
            <div className="flex items-center bg-super-bg-light-white rounded-lg border-super-light-grey py-4 px-5">
              <Search></Search>
              <p className="ml-3">Search exclusions</p>
            </div>

            <div className=" border border-super-light-grey rounded-lg flex items-center text-center ">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add files</p>
              </div>   
       </div> 

       <div className="my-6 w-2/3 flex items-center px-4 py-3 bg-super-bg-light-white rounded-lg border-super-light-grey">
           <div>
              <p className="font-semibold">Exclusion 1</p>
              <p className="mt-1 text-sm font-medium ">Free transport</p>
           </div>
           <p className="ml-auto font-semibold underline">Edit</p>
       </div>

       <div className="broder-t border-super-light-grey py-6">
            <p className="text-lg font-semoibold mb-4">Fees</p>
            <div className="w-1/2 grid grid-cols-2 gap-3">
                <div className="p-5 border rounded-lg border-super-lighter-grey text-xl">
                      <Airplane></Airplane>
                      <p className="mt-5">Visa fees</p>
                </div>

                <div className="p-5 border rounded-lg border-super-lighter-grey text-xl">
                      <Airplane></Airplane>
                      <p className="mt-5">Extra expenses covered</p>
                </div>
            </div>

            <p className="text-lg font-semoibold my-4">Flights</p>
            <div className="w-1/2 grid grid-cols-2 gap-3">
                <div className="p-5 border rounded-lg border-super-lighter-grey text-xl">
                      <Airplane></Airplane>
                      <p className="mt-5">One-way</p>
                </div>

                <div className="p-5 border rounded-lg border-super-lighter-grey text-xl">
                      <Airplane></Airplane>
                      <p className="mt-5">Round trip</p>
                </div>
            </div>
       </div>

       <div className="bottom-5 w-[90%]  z-[60]  fixed  overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Back</p>
           <button className="ml-auto rounded-[100px] text-white bg-black px-8 py-3">Continue</button>
          </div>
       </div>  
     

   </div>
  );
};
