

import { RootState } from 'client/shell/store';
import { Line } from 'icons/Line';
import { Minus } from 'icons/Minus';
import { PackageSelected } from 'icons/PackageSelected';
import { PackageUnSelected } from 'icons/PackageUnSelected';
import { Plus } from 'icons/Plus';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';



export const TripDetailsPackage = () => {

   const [guestCount,setGuestCount] = useState(1);
   const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);
  
   const addGuest=()=>
   {
      if(guestCount<(tripDetail?.totalSlots-tripDetail?.slotsFilled))
      setGuestCount((prevValue) => prevValue + 1);
   }

   const minusGuest=()=>
   {
      if(guestCount >1)
      setGuestCount((prevValue) => prevValue - 1);
   }

   const updatePackage=(text)=>
   {
      setPackageSelected(text);
   }

   const[packageSelected,setPackageSelected] = useState("");

   useEffect(() => {
      if(tripDetail && tripDetail?.pricing)
      {
         setPackageSelected(tripDetail?.pricing[0].name);
      }
    }, [tripDetail])
   
  return (
   <>
     <div className="p-8 tripBoxShadow rounded-xl border-[1.5px] border-super-ligher-grey">
           <div className="flex items-center border-b border-super-lighter-grey pb-9">
              <p className="text-lg font-semibold">
                 Guests
              </p>
              <div className="ml-auto flex items-center">
                      <Minus  className={ (guestCount >1 ? " cursor-pointer ":"cursor-not-allowed opacity-10")}  onClick={minusGuest}></Minus>
                      <p className="mx-3">{guestCount} guest</p>
                      <Plus className={ (guestCount<(tripDetail?.totalSlots-tripDetail?.slotsFilled) ? " cursor-pointer ":"cursor-not-allowed opacity-10")}   onClick={addGuest}></Plus>
              </div>
           </div>
           <div className="my-12">
               {tripDetail?.pricing?.length>0 &&  tripDetail?.pricing.map((item) => (
                  <>
                     {item?.name==packageSelected?
                          <div>
                          <div className="cursor-pointer  rounded-tl-lg rounded-tr-lg flex items-center bg-black text-white py-4 px-5">
                             <PackageSelected></PackageSelected>
                             <p className="text-sm font-semibold ml-6">{item.name}</p>
                             <p  className="text-sm font-bold ml-auto">₹ {item.price}</p>
                          </div>
                         <div className="p-5 bg-super-bg-light-white rounded-bl-lg rounded-br-lg text-sm font-medium"><span className="font-bold">Package description: </span><span className="opacity-60">{item.description}</span></div>
                     </div>
                      :
                      <div onClick={()=>updatePackage(item.name)} className="cursor-pointer rounded-lg flex items-center bg-super-bg-light-white text-black py-4 px-5 mt-3">
                      <PackageUnSelected></PackageUnSelected>
                      <p className="text-sm font-semibold ml-6">{item.name}</p>
                        <p  className="text-sm font-bold ml-auto">₹ {item.price}</p>
                </div>
                      }
                  </>
               ))}
             

             

              

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
