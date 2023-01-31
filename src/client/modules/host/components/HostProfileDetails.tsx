import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { EditIcon } from 'icons/EditIcon';
import { InstagramGrey } from 'icons/InstagramGrey';
import { Share } from 'icons/Share';
import { ShareWhite } from 'icons/ShareWhite';
import { StarGrey } from 'icons/StarGrey';
import { YoutubeGrey } from 'icons/YoutubeGrey';

import React, { useCallback, useRef } from 'react'
import { GalleryDetails } from './GalleryDetails';
import { Trip } from './Trip';
import { TripDetails } from './TripDetails';
import { TripReviewSection } from './TripReviewSection';


export const HostProfileDetails = () => {

  return (
   
    <div className="bg-white p-12 w-full">
        <div className="flex items-center w-full">
            <img src="/images/dummy-user.png" className="h-36 w-36 "></img>
            <div className="ml-8">
                <p className="font-medium text-sm opacity-60">Host profile</p>
                <p className="mt-1 text-3xl font-bold">Wade Warren</p>
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
                        
                        <p className="opacity-80 text-sm font-medium ">10 trips </p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <StarGrey></StarGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">4.2</p>
                      </div>
                  </div>
            </div>
            <div className="ml-auto flex items-center">
                <ShareWhite></ShareWhite>
                <EditIcon className="ml-2"></EditIcon>
            </div>

        </div>

        <div className="flex items-center my-6 w-full " >
                <p className="text-lg font-semibold">About</p>
                <p className="text-lg font-semibold underline ml-auto">Edit</p>
         </div>

        <p className="font-medium">The capital of Azerbaijan, this oil-rich city is truly a hidden European gem. It is dynamic, world-class, extremely rich in culture and very, very suave. Get ready for charming winters,
historic architecture, vibrant nightlife, and Mud Volcanoes. This isn’t your conventional Euro trip. Planned on a long weekend, you just need to take few days off work and it’s cheap
on the pocket too! Trust us, it can’t better than this.</p>
        <div className="tabs w-full border-b border-super-lighter-grey my-6">
          <a className="tab ">Upcoming</a> 
          <a className="tab  ">Completed</a>
          <a className="tab  ">Pending</a>      
          <a className="tab  ">Drafts</a>
          <a className="tab  tab-active">Gallery</a>      
          <a className="tab  ">Reviews</a>        
        </div>

       {/* <TripDetails></TripDetails> */}
       {/* <GalleryDetails></GalleryDetails> */}
       <TripReviewSection></TripReviewSection>
    </div>
   
  );
};
