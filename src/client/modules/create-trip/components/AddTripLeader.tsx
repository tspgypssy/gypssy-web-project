
import { PlusIcon } from 'icons/PlusIcon';
import { Airplane } from 'icons/Airplane';
import { useRouter } from 'next/router';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Search } from 'icons/Search';
import { DownArrow } from 'icons/DownArrow';
import { CreateUser } from 'icons/CreateUser';
import { CreateUserEdit } from 'icons/CreateUserEdit';
import { Line } from 'icons/Line';
import { StraightLine } from 'icons/StraightLine';

export const AddTripLeader = () => {
    
  const router = useRouter();
  const [value,onChange] = useState(new Date());
  const [showCal,setShowCal] = useState(false); 

  return (
   <div onClick={()=>(setShowCal(false))} className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Add trip leaders</p>
      
       <div className='w-1/2 flex items-center px-4 py-3 border border-super-lighter-grey bg-super-bg-light-white rounded-lg'> 
              <div>
                 <p className='font-semibold'>Wade Warren</p>
                 <p className='font-semibold text-sm mt-1'>Leader</p>
              </div>  
              <p className="ml-auto underline font-semibold">Edit</p>
       </div>

       <div className="mt-5 w-1/2"> 
          <div className="flex items-center w-full">
             <div  className=" flex items-center  w-full">
                <div className="relative mt-16">
                      <CreateUser></CreateUser>
                      <CreateUserEdit className="absolute bottom-0 right-0"></CreateUserEdit>
                </div>
                <div className="ml-10 w-full">
                   <div className="form-control w-full ">
                      <label className="label !py-1 text-xs">
                        <span className="label-text">Role</span>
                      </label>
                      <input type="text" placeholder="Role" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                  </div>

                  <div className="form-control w-full mt-7">
                      <label className="label !py-1 text-xs">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                  </div>  
                </div>
            </div>

          </div>
       </div>

       <div className="w-1/2 grid grid-cols-2 gap-6 mt-5">
             <div className=" border border-super-light-grey rounded-lg flex items-center text-center py-4">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add more</p>
              </div>

              <p className="text-white bg-black rounded-lg text-center py-4">Find leaders</p>
       </div>

       <div>
           <p className="font-semibold my-5">Requested</p>
       </div>

       <div className="flex items-center w-1/2 mt-10 border-b border-dashed py-5">
            <img src="/images/dummy-user.png" className="h-16 w-16 mr-3"></img>
            <div>
                <p className="text-sm font-semibold">Wade Warren</p>
                <div className="flex items-center text-xs font-semibold">
                   <p>India</p>
                   <p className="px-1">|</p>
                   <p>Male</p>
                   <p className="px-1">|</p>
                   <p>21</p>
                </div>
            </div>
            <p className="ml-auto border rounded-lg text-super-gyp-red border-super-gyp-red px-5 py-2">Remove</p>
       </div>

       <div className="flex items-center w-1/2 mt5 border-b border-dashed py-5">
            <img src="/images/dummy-user.png" className="h-16 w-16 mr-3"></img>
            <div>
                <p className="text-sm font-semibold">Wade Warren</p>
                <div className="flex items-center text-xs font-semibold">
                   <p>India</p>
                   <p className="px-1">|</p>
                   <p>Male</p>
                   <p className="px-1">|</p>
                   <p>21</p>
                </div>
            </div>
            <p className="ml-auto border rounded-lg text-super-gyp-red border-super-gyp-red px-5 py-2">Remove</p>
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
