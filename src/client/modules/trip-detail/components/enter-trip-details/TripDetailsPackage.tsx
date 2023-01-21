

import { Line } from 'icons/Line';
import { Minus } from 'icons/Minus';
import { PackageSelected } from 'icons/PackageSelected';
import { PackageUnSelected } from 'icons/PackageUnSelected';
import { Plus } from 'icons/Plus';
import React, { useCallback, useRef } from 'react'
import { TripDetailsOverview } from './TripDetailsOverview';
import { TripHostedBy } from './TripHostedBy';
import { TripReviewSection } from './TripReviewSection';



export const TripDetailsPackage = () => {

  return (
   <>
     <div className="p-8 tripBoxShadow rounded-xl border-[1.5px] border-super-ligher-grey">
           <div className="flex items-center border-b border-super-lighter-grey pb-9">
              <p className="text-lg font-semibold">
                 Guests
              </p>
              <div className="ml-auto flex items-center">
                      <Minus></Minus>
                      <p className="mx-3">1 guest</p>
                      <Plus></Plus>
              </div>
           </div>
           <div className="my-12">
               <div>
                    <div className="cursor-pointer  rounded-tl-lg rounded-tr-lg flex items-center bg-black text-white py-4 px-5">
                       <PackageSelected></PackageSelected>
                       <p className="text-sm font-semibold ml-6">Normal package</p>
                       <p  className="text-sm font-bold ml-auto">₹ 1,83,000</p>
                    </div>
                   <div className="p-5 bg-super-bg-light-white rounded-bl-lg rounded-br-lg text-sm font-medium"><span className="font-bold">Package description: </span><span className="opacity-60">Lorem ipsum dolor sit amet
consectetur. Montes scelerisque lacus lorem risus
blandit nunc sollicitudin sed nulla. Eget velit pharetra
arcu bibendum a. Facilisis aliquam faucibus massa
pulvinar.</span></div>
               </div>

               <div className="cursor-pointer rounded-lg flex items-center bg-super-bg-light-white text-black py-4 px-5 mt-3">
                     <PackageUnSelected></PackageUnSelected>
                     <p className="text-sm font-semibold ml-6">Exclusive package</p>
                       <p  className="text-sm font-bold ml-auto">₹ 2,25,000</p>
               </div>

               <div className="cursor-pointer rounded-lg flex items-center bg-super-bg-light-white text-black py-4 px-5 mt-3">
                     <PackageUnSelected></PackageUnSelected>
                     <p className="text-sm font-semibold ml-6">Premium package</p>
                       <p  className="text-sm font-bold ml-auto">₹ 2,93,000</p>
               </div>

               <p className="border-b border-super-lighter-grey my-9"></p>

               <div className="bg-super-bg-light-white w-full flex items-center rounded-[100px] px-6 py-[12px]">
                  <p className="font-medium">Slots available</p>
                  <div className="ml-auto flex items-center font-medium">
                        <p>4</p>
                        <p className="mx-2">/</p>
                        <p>12</p>
                  </div>
               </div>

               <p className="w-full text-center bg-black text-white rounded-[100px] py-[14px] mt-5">Book now</p>
           </div>
     </div>
  </>
  );
};
