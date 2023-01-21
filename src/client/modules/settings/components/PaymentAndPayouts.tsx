
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
import { UnChecked } from 'icons/UnChecked';
import { YoutubeSetting } from 'icons/YoutubeSetting';

import React, { useCallback, useRef, useState } from 'react'


export const PaymentAndPayouts = () => {

    
  return (
   
    <div  className="bg-white  ">
          <Header></Header>
          <div className="p-16">
            <div className="text-sm breadcrumbs font-semibold opacity-70">
                <ul>
                    <li><a>Settings</a></li> 
                    <li><a>Edit profile</a></li> 
                    <li><a>Payments & payouts</a></li> 
                </ul>
            </div>

            <div className="flex items-center mt-4">
                <BackArrowPage></BackArrowPage>
                <p className="ml-5 text-3xl font-bold">Payments & payouts</p>
                <div className="ml-auto px-3 py-2 rounded-[100px] border border-opacity-80 flex items-center">
                    <Tick></Tick> 
                    <p className="ml-2 text-sm font-semibold" >Save</p>
                </div>
            </div>

           
              <div className="w-1/2 mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Account name</span>
                  </label>
                  <input type="text" placeholder="Add name here" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div className="w-1/2 ">
                  <div className="flex items-center mb-1 mt-4">
                      <p className="text-super-text-primary text-sm">Account type</p> 
                  </div>                     
                  <div   className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                      <p className="font-semibold opacity-10 ml-3">-select-</p>     
                      <DownArrow className="ml-auto"></DownArrow> 
                  </div>
              </div> 

              <div className="w-1/2 mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Account number</span>
                  </label>
                  <input type="text" placeholder="Add number here" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

              <div className="w-1/2 mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">IFSC</span>
                  </label>
                  <input type="text" placeholder="Add IFSC here" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>

               <div className="flex items-center mt-5">
                    <UnChecked></UnChecked>
                    <div className="ml-5 font-semibold ">
                        <span className="opacity-60">I confirm the </span>
                        <span  className=" font-bold underline ">Terms of use </span>
                        <span className="opacity-60">&  </span>
                        <span className=" font-bold underline ">Privacy </span>
                        <span className="opacity-60">&  </span>
                        <span className=" font-bold underline ">cookie policy</span>
                    </div>
               </div> 

               <div className="flex items-center mt-5">
                    <UnChecked></UnChecked>
                    <div className="ml-5 font-semibold ">
                       <span className="opacity-60">I confirm the </span>
                       <span  className=" font-bold underline ">Pricing & fees </span>
                    </div>   
               </div>

          </div>
          <Footer></Footer>
    </div>
   
  );
};
