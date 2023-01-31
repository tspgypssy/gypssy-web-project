
import { PlusIcon } from 'icons/PlusIcon';
import { Airplane } from 'icons/Airplane';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Search } from 'icons/Search';
import { DownArrow } from 'icons/DownArrow';

export const TripFAQs = () => {
    
  const router = useRouter();
  const [value,onChange] = useState(new Date());
  const [showCal,setShowCal] = useState(false); 

  return (
   <div onClick={()=>(setShowCal(false))} className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Trip FAQs</p>
      
       <div className="w-1/2  border border-super-light-grey rounded-lg flex items-center text-center mt-3 py-3">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add custom FAQs</p>
       </div>

       <div className="mt-5 w-1/2 flex items-center px-3 py-4 rounded-lg bg-super-bg-light-white border-super-lighter-grey">
            <div>
                <p className="font-semibold">Q. What to bring?</p>
                <p className="mt-1 text-sm font-medium w-[80%]">Lorem ipsum dolor sit amet consectetur. Ultrices erat purus at faucibus tincidunt
matti. Lorem ipsum dolor sit amet </p>
            </div>
            <p className="underline font-semibold ml-auto">Edit</p>
       </div>

       <div className="mt-5 w-1/2 flex items-center px-3 py-4 rounded-lg bg-super-bg-light-white border-super-lighter-grey">
            <div>
                <p className="font-semibold">Q. What to bring?</p>
                <p className="mt-1 text-sm font-medium w-[80%]">Lorem ipsum dolor sit amet consectetur. Ultrices erat purus at faucibus tincidunt
matti. Lorem ipsum dolor sit amet </p>
            </div>
            <p className="underline font-semibold ml-auto">Edit</p>
       </div>

       <p className="w-1/2 mt-5 pt-5 border-super-lighter-grey border-t font-semibold" >Select FAQs from below</p>

      <div className="w-1/2 rounded-lg border border-super-lighter-grey px-5 py-6 mt-5">
          <p className="text-2xl font-semibold">Visa on arrival</p>
          <p className='mt-1 font-medium'>Yes, this country allows visa on arrival facilitiy.</p>
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
