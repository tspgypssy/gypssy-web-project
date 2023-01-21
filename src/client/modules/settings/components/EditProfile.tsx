
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrow } from 'icons/BackArrow';
import { BackArrowPage } from 'icons/BackArrowPage';
import { Calendar } from 'icons/Calendar';
import { Call } from 'icons/Call';
import { CreateUser } from 'icons/CreateUser';
import { CreateUserEdit } from 'icons/CreateUserEdit';
import { DownArrow } from 'icons/DownArrow';
import { EmailSetting } from 'icons/EmailSetting';
import { InstagramSetting } from 'icons/InstagramSetting';

import { Tick } from 'icons/Tick';
import { YoutubeSetting } from 'icons/YoutubeSetting';

import React, { useCallback, useRef, useState } from 'react'
import { EmailIcon } from 'react-share';


export const EditProfile = () => {

    const [showCal,setShowCal] = useState(false); 

    const [value,onChange] = useState(new Date());

    const setFalse =() =>
    {
      setShowCal(false)
    }

    
  return (
   
    <div onClick={setFalse} className="bg-white  ">
          <Header></Header>
          <div className="p-16">
            <div className="text-sm breadcrumbs font-semibold opacity-70">
                <ul>
                    <li><a>Settings</a></li> 
                    <li><a>Edit profile</a></li> 
                </ul>
            </div>

            <div className="flex items-center mt-4">
                <BackArrowPage></BackArrowPage>
                <p className="ml-5 text-3xl font-bold">Edit profile</p>
                <div className="ml-auto px-3 py-2 rounded-[100px] border border-opacity-80 flex items-center">
                    <Tick></Tick> 
                    <p className="ml-2 text-sm font-semibold" >Save</p>
                </div>
            </div>

            <div  className=" flex items-center  w-full">
                <div className="relative mt-16">
                      <CreateUser></CreateUser>
                      <CreateUserEdit className="absolute bottom-0 right-0"></CreateUserEdit>
                </div>
            </div>

        
              <div className="w-1/2 mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div  className="w-1/2 ">
                  <div className=" flex items-center mb-1 mt-4">
                      <p className="text-super-text-primary text-sm">Age</p> 
                  </div>                     
                  <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                     
                      <p className="font-semibold opacity-10 ml-3">Your age(mm/dd/yyyy)</p>
                      <DownArrow className="ml-auto"></DownArrow>
                  </div>
                  {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar onChange={onChange} value={value} /></div> }                                                                   
              </div>

              <div className="w-1/2 ">
                  <div className="flex items-center mb-1 mt-4">
                      <p className="text-super-text-primary text-sm">Gender</p> 
                  </div>                     
                  <div   className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                      <p className="font-semibold opacity-10 ml-3">Your gender</p>     
                      <DownArrow className="ml-auto"></DownArrow> 
                  </div>
                
              </div> 

              <div className="w-1/2 mt-10 flex items-top w-full">
                  <Call></Call>
                  <div className="ml-5">
                     <p className="text-sm font-semibold">Phone number</p>
                     <p  className="text-xs font-semibold">+91 89 891 89 872</p>
                  </div>
                  <p className="text-xs font-semibold underline ml-auto">Edit</p>
              </div>

              <div className="w-1/2 border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
              
              <div className="w-1/2 mt-10 flex items-top w-full">
                  <EmailSetting></EmailSetting>
                  <div className="ml-5">
                     <p className="text-sm font-semibold">Email</p>
                     <p  className="text-xs font-semibold">dvmedh0@gmail.com</p>
                  </div>
                  <p className="text-xs font-semibold underline ml-auto">Edit</p>
              </div>

              <div className="w-1/2 border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>

              <div className="w-1/2 mt-10 flex items-center w-full">
                  <InstagramSetting></InstagramSetting>
                  <div className="ml-5">
                     <p className="text-sm font-semibold">Instagram</p>
                  </div>
                  <p className="text-xs font-semibold underline ml-auto">Save</p>
              </div>

              <input type="text" placeholder="@" className="mt-5 border border-super-lighter-grey input  focus:outline-none w-1/2" />


              <div className="w-1/2 mt-10 flex items-center w-full">
                  <YoutubeSetting></YoutubeSetting>
                  <div className="ml-5">
                     <p className="text-sm font-semibold">Youtube</p>
                  </div>
                  <p className="text-xs font-semibold underline ml-auto">Save</p>
              </div>

              <input type="text" placeholder="URL" className="mt-5 border border-super-lighter-grey input  focus:outline-none w-1/2" />


          </div>
          <Footer></Footer>
    </div>
   
  );
};
