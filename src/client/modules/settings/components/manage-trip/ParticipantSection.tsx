


import { CopyIcon } from 'icons/CopyIcon';
import { GreenTick } from 'icons/GreenTick';
import { InfoIconDark } from 'icons/InfoIconDark';
import { PlusIcon } from 'icons/PlusIcon';
import { RedCross } from 'icons/RedCross';
import { StraightLineIcon } from 'icons/StraightLineIcon';
import React, { useCallback, useRef, useState } from 'react'


export const ParticipantSection = () => {

    
  return (
   <>
   <p className="my-6 font-semibold text-lg">Participants</p>

    <div className="flex items-center">
        <div className="bg-super-gyp-grey px-5 py-4 rounded-lg ">
          <p className="text-sm font-medium opacity-60 pb-5">Gender</p>
          <div className="flex items-center font-semibold  ">
              <p>Male: 6</p>
              <StraightLineIcon className="mx-8"></StraightLineIcon>

              <p>Female: 6</p>
              <StraightLineIcon className="mx-8"></StraightLineIcon>

              <p>Other: 6</p>
          </div>
        </div>

        <div className="ml-3 text-center px-8 py-5 border-2 border-black rounded-lg">
            <PlusIcon className="mx-auto"></PlusIcon>
            <p>Add a booking</p>
        </div>
    </div>

    <div className=" grid grid-cols-2 gap-14 mt-6">
         
         <div className="flex items-center border-b border-dashed  border-[#ebebeb] pb-6">
            <img src="/images/dummy-user.png" className="w-16 h-16"></img>
           
            <div  className="ml-3">
              <div>
                  <p className="text-sm opacity-60 font-medium">07/11/2022</p>
                  <div className="flex items-center mt-1">
                    <p className="font-semibold">Harshad Pandur...</p>
                    <p className="text-sm font-medium opacity-60 ml-1">+ 3 others</p>
                  </div>
              </div>

              <div className="flex items-center  text-sm mt-2">
                  <p className="opacity-60 font-medium">Male</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Female</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Other</p>
                  <p className="font-semibold ml-2">6</p>
              </div>

            </div>
           
           <div className="rounded-lg px-5 py-2 ml-auto flex items-center bg-super-gyp-green bg-opacity-10 par-border">
               <GreenTick></GreenTick>
               <p className="ml-2 text-super-gyp-green">Paid in full</p>
           </div>
       
         </div>

         <div className="flex items-center border-b border-dashed  border-[#ebebeb] pb-6">
            <img src="/images/dummy-user.png" className="w-16 h-16"></img>
           
            <div  className="ml-3">
              <div>
                  <p className="text-sm opacity-60 font-medium">07/11/2022</p>
                  <div className="flex items-center mt-1">
                    <p className="font-semibold">Harshad Pandur...</p>
                    <p className="text-sm font-medium opacity-60 ml-1">+ 3 others</p>
                  </div>
              </div>

              <div className="flex items-center  text-sm mt-2">
                  <p className="opacity-60 font-medium">Male</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Female</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Other</p>
                  <p className="font-semibold ml-2">6</p>
              </div>

            </div>
           
           <div className="rounded-lg px-5 py-2 ml-auto flex items-center bg-super-gyp-green bg-opacity-10 par-border">
               <GreenTick></GreenTick>
               <p className="ml-2 text-super-gyp-green">Paid in full</p>
           </div>
       
         </div>

         <div className="flex items-center border-b border-dashed  border-[#ebebeb] pb-6">
            <img src="/images/dummy-user.png" className="w-16 h-16"></img>
           
            <div  className="ml-3">
              <div>
                  <p className="text-sm opacity-60 font-medium">07/11/2022</p>
                  <div className="flex items-center mt-1">
                    <p className="font-semibold">Harshad Pandur...</p>
                    <p className="text-sm font-medium opacity-60 ml-1">+ 3 others</p>
                  </div>
              </div>

              <div className="flex items-center  text-sm mt-2">
                  <p className="opacity-60 font-medium">Male</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Female</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Other</p>
                  <p className="font-semibold ml-2">6</p>
              </div>

            </div>
           
           <div className="rounded-lg px-5 py-2 ml-auto flex items-center bg-super-gyp-red bg-opacity-10 par-border">
               <RedCross></RedCross>
               <p className="ml-2 text-super-gyp-red">Cancelled</p>
           </div>
       
         </div>

         <div className="flex items-center border-b border-dashed  border-[#ebebeb] pb-6">
            <img src="/images/dummy-user.png" className="w-16 h-16"></img>
           
            <div  className="ml-3">
              <div>
                  <p className="text-sm opacity-60 font-medium">07/11/2022</p>
                  <div className="flex items-center mt-1">
                    <p className="font-semibold">Harshad Pandur...</p>
                    <p className="text-sm font-medium opacity-60 ml-1">+ 3 others</p>
                  </div>
              </div>

              <div className="flex items-center  text-sm mt-2">
                  <p className="opacity-60 font-medium">Male</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Female</p>
                  <p className="font-semibold ml-2">6</p>
                  <StraightLineIcon className="mx-8"></StraightLineIcon>

                  <p className="opacity-60 font-medium">Other</p>
                  <p className="font-semibold ml-2">6</p>
              </div>

            </div>
           
           <div className="rounded-lg px-5 py-2 ml-auto flex items-center bg-super-gyp-yellow bg-opacity-10 par-border">
               <p className="ml-2 text-super-gyp-yellow">Partially cancelled</p>
           </div>
       
         </div>

    </div>
  
   
   </>
  );
};
