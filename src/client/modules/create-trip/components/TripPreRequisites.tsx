
import { PlusIcon } from 'icons/PlusIcon';
import { Airplane } from 'icons/Airplane';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Search } from 'icons/Search';

export const TripPreRequisites = () => {
    
  const router = useRouter();
  const [value,onChange] = useState(new Date());
  const [showCal,setShowCal] = useState(false); 

  return (
   <div onClick={()=>(setShowCal(false))} className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Trip pre - requisites</p>
     
       <div className="w-3/4 mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Pre - requisite 1</span>
                  </label>
                  <textarea  placeholder="Type pre - requisite here..." className="h-36 border border-super-lighter-grey input  focus:outline-none w-full" />   
                  <div className="w-full flex items-center mt-2">
                     <p className="text-xs opacity-60 float-right ml-auto">0/200</p>  
                  </div>          
                </div>  
        </div>

        <div className="w-3/4  border border-super-light-grey rounded-lg flex items-center text-center mt-3 py-3">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add more</p>
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
