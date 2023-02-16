

import { RootState } from 'client/shell/store';
import { Favourite } from 'icons/Favourite';
import { GreyDot } from 'icons/GreyDot';
import { InstagramGrey } from 'icons/InstagramGrey';
import { Line } from 'icons/Line';
import { Middot } from 'icons/Middot';
import { ShareWhite } from 'icons/ShareWhite';
import { StarBigger } from 'icons/StarBigger';
import { StarGrey } from 'icons/StarGrey';
import { YoutubeGrey } from 'icons/YoutubeGrey';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';




export const TripReviewSection = () => {

 // const tripReviews =useSelector((state: RootState) => state.tripDetail.tripReviews);
 
  return (
   
      <div className="w-full">
        <div>
          <div className="w-full flex items-center">
               <StarBigger></StarBigger>
               <p className="ml-3 text-lg font-semibold">4.2</p>
               <GreyDot className="mx-3"></GreyDot>
               <p className="text-lg font-semibold">32 reviews</p>
          </div>

          <div className="w-full flex items-center mt-6">
              <img className="h-12 w-12" src="/images/dummy-user.png"></img>
                    <div className="ml-4">
                        <p className="text-medium opacity-60 text-sm uppercase">October 2022</p>
                        <p className="text-base font-semibold">Wade Warren</p>
                    </div>
              <div className="ml-auto">
                  <div className="flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                    <StarGrey></StarGrey>
                    <p className="opacity-80 text-sm font-medium ml-2">4.2</p>
                  </div>
              </div>      
          </div>

          <p className="font-medium opacity-60 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum congue diam 
bibendum lorem penatibus. Et in mattis quis nisl. Semper suscipit eget lorem at fringilla 
iaculis. Ante facilisi elit risus ut. Donec semper nibh imperdiet fermentum. Eleifend quis 
suspendisse ornare lacus, aliquet neque. Et, a molestie ultricies accumsan tristique nisi, 
amet sed sed.</p>
        </div>

        <div className="mt-6">
          <div className="w-full flex items-center">
               <StarBigger></StarBigger>
               <p className="ml-3 text-lg font-semibold">4.2</p>
               <GreyDot className="mx-3"></GreyDot>
               <p className="text-lg font-semibold">32 reviews</p>
          </div>

          <div className="w-full flex items-center mt-6">
              <img className="h-12 w-12" src="/images/dummy-user.png"></img>
                    <div className="ml-4">
                        <p className="text-medium opacity-60 text-sm uppercase">October 2022</p>
                        <p className="text-base font-semibold">Wade Warren</p>
                    </div>
              <div className="ml-auto">
                  <div className="flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                    <StarGrey></StarGrey>
                    <p className="opacity-80 text-sm font-medium ml-2">4.2</p>
                  </div>
              </div>      
          </div>

          <p className="font-medium opacity-60 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum congue diam 
bibendum lorem penatibus. Et in mattis quis nisl. Semper suscipit eget lorem at fringilla 
iaculis. Ante facilisi elit risus ut. Donec semper nibh imperdiet fermentum. Eleifend quis 
suspendisse ornare lacus, aliquet neque. Et, a molestie ultricies accumsan tristique nisi, 
amet sed sed.</p>
        </div>
         
         <p className="mt-6 underline font-semibold" >View more</p>
      </div>
          
   
  );
};
