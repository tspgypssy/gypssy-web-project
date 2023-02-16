

import { RootState } from 'client/shell/store';
import { Favourite } from 'icons/Favourite';
import { InstagramGrey } from 'icons/InstagramGrey';
import { Line } from 'icons/Line';
import { ShareWhite } from 'icons/ShareWhite';
import { StarGrey } from 'icons/StarGrey';
import { YoutubeGrey } from 'icons/YoutubeGrey';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';




export const TripHostedBy = () => {

  const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);
 
  return (
   
      <div className="w-full">
          <div className="w-full flex items-center">
                <img className="h-16 w-16" src="/images/dummy-user.png"></img>
                <div className="ml-4">
                    <p className="text-medium opacity-60 text-sm">Hosted by</p>
                    <p className="text-xl font-semibold">Wade Warren</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center">
                     <ShareWhite></ShareWhite>
                    <Favourite className="ml-4"></Favourite>
                  </div>                  
                </div>
          </div>

          <div className="w-full flex items-center mt-3">
              <div className="flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                 <InstagramGrey></InstagramGrey>
                 <p className="opacity-80 text-sm font-medium ml-2">10.4k</p>
              </div>

              <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                 <YoutubeGrey></YoutubeGrey>
                 <p className="opacity-80 text-sm font-medium ml-2">10.4k</p>
              </div>

              <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                
                 <p className="opacity-80 text-sm font-medium ">10 trips cmpl.</p>
              </div>

              <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                 <StarGrey></StarGrey>
                 <p className="opacity-80 text-sm font-medium ml-2">4.2</p>
              </div>
          </div>

          <div className="mt-6">
              <p className="font-semibold">About the host</p>
              <p className="font-medium opacity-60 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Condimentum congue diam bibendum lorem penatibus. Et
in mattis quis nisl. Semper suscipit eget lorem at fringilla
iaculis. Ante facilisi elit risus ut. Donec semper nibh
imperdiet fermentum. Eleifend quis suspendisse ornare
lacus, aliquet neque. Et, a molestie ultricies accumsan
tristique nisi, amet sed sed.</p>
          </div>
      </div>
          
   
  );
};
