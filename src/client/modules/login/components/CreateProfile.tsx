import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarIcon } from 'icons/CalendarIcon';
import { CreateUser } from 'icons/CreateUser';
import { CreateUserEdit } from 'icons/CreateUserEdit';
import { CrossModal } from 'icons/CrossModal';
import { DownArrow } from 'icons/DownArrow';
import { useRouter } from 'next/router';
import React, { useCallback, useRef, useState } from 'react'
import { Call } from 'icons/Call';


export const CreateProfile = () => {

  const router = useRouter();

  const [showCal,setShowCal] = useState(false); 

  const setFalse =() =>
  {
    setShowCal(false)
  }

  const [value,onChange] = useState(new Date());

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
   
    <div onClick={setFalse} className="  ">
        
        <div  className="w-full">
            <div className="w-full flex items-center py-6  border-b border-super-lighter-grey  px-5">
              <div className="h-7 w-7 mr-auto"></div>
              <p className="mx-auto font-bold">Create profile</p>
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>

            <div className="h-[460px] overflow-y-auto px-5 py-10 ">
               <div  className=" flex items-center  w-full">
                <div className="relative mx-auto">
                      <CreateUser></CreateUser>
                      <CreateUserEdit className="absolute bottom-0 right-0"></CreateUserEdit>
                </div>
              </div>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div>
                  <div className="flex items-center mb-1 mt-4">
                      <p className="text-super-text-primary text-sm">Age</p> 
                  </div>                     
                  <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                     
                      <p className="font-semibold opacity-10 ml-3">Your age(mm/dd/yyyy)</p>
                      <DownArrow className="ml-auto"></DownArrow>
                  </div>
                  {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onChange} value={value} /></div> }                                                                   
              </div>

              <div>
                  <div className="flex items-center mb-1 mt-4">
                      <p className="text-super-text-primary text-sm">Gender</p> 
                  </div>                     
                  <div   className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                      <p className="font-semibold opacity-10 ml-3">Your gender</p>     
                      <DownArrow className="ml-auto"></DownArrow> 
                  </div>
                
              </div> 

              <div className="mt-10 flex items-top w-full">
                  <Call></Call>
                  <div className="ml-5">
                     <p className="text-sm font-semibold">Phone number</p>
                     <p  className="text-xs font-semibold">+91 89 891 89 872</p>
                  </div>
                  <p className="text-xs font-semibold underline ml-auto">Edit</p>
              </div>

              <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
              
              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="Your email id" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>


            </div>

       </div>

       <div className="flex items-center  border-t border-super-lighter-grey p-5 ">
          <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
          <p className="cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto">Continue</p>
      </div>
    </div>
   
  );
};
