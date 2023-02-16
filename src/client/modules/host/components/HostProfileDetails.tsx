import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import actionList from 'client/shell/actions';
import { RootState } from 'client/shell/store';
import { EditIcon } from 'icons/EditIcon';
import { InstagramGrey } from 'icons/InstagramGrey';
import { Share } from 'icons/Share';
import { ShareWhite } from 'icons/ShareWhite';
import { StarGrey } from 'icons/StarGrey';
import { YoutubeGrey } from 'icons/YoutubeGrey';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { GalleryDetails } from './GalleryDetails';
import { Trip } from './Trip';
import { TripDetails } from './TripDetails';
import { TripReviewSection } from './TripReviewSection';


export const HostProfileDetails = () => {

  const host = useSelector((state: RootState) => state.host.hostDetails);
  const trips = useSelector((state: RootState) => state.host.trips);
  
  const router = useRouter();
  const { tab } = router.query;
  const { name } = router.query as {
    name: string
  };
  useEffect(() => {
     
    if(tab)
    {
      switch(tab) {
        case "upcoming":
           actionList.getUpcomingTrips({name:name})  
          break;
        case "completed":
          actionList.getCompletedTrips({name:name})  
          break;
        case "reviews":
          actionList.getHostReviews({name:name})  
          break;  
        default:
          // code block
      }  
    }
    
  }, [tab]);

  return (
   
    <div className="bg-white p-12 w-full">
        <div className="flex items-center w-full">
            <img src={host.avatar} className="h-36 w-36 rounded-full"></img>
            <div className="ml-8">
                <p className="font-medium text-sm opacity-60">Host profile</p>
                <p className="mt-1 text-3xl font-bold">{host.name}</p>
                <div className="w-full flex items-center mt-3">
                     {host?.instaHandle &&  <Link href={host?.instaHandle?.link}><div className="flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <InstagramGrey></InstagramGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">{host?.instaHandle?.followers}</p>
                      </div></Link>
                     }
                     {host?.youtubeHandle &&
                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <YoutubeGrey></YoutubeGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">{host?.youtubeHandle?.followers}</p>
                      </div>
                      }
                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        
                        <p className="opacity-80 text-sm font-medium ">{host?.noOfTrips} trips </p>
                      </div>

                      <div className="ml-2 flex items-center py-2 px-4 bg-super-lighter-grey rounded">
                        <StarGrey></StarGrey>
                        <p className="opacity-80 text-sm font-medium ml-2">{host?.rating}</p>
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

        <p className="font-medium">{host?.description}</p>
        <div className="tabs w-full border-b border-super-lighter-grey my-6">
          <Link href={"/host/"+host?.id+"?tab=upcoming"}><a className={"tab " + (tab == "upcoming" && " tab-active ")}>Upcoming</a></Link> 
          <Link href={"/host/"+host?.id+"?tab=completed"}><a className={"tab " + (tab == "completed" && " tab-active ")}>Completed</a></Link>
          <Link href={"/host/"+host?.id+"?tab=pending"}><a className={"tab " + (tab == "pending" && " tab-active ")}>Pending</a></Link>      
          <Link href={"/host/"+host?.id+"?tab=drafts"}><a className={"tab " + (tab == "drafts" && " tab-active ")}>Drafts</a></Link>
          <Link href={"/host/"+host?.id+"?tab=gallery"}><a className={"tab " + (tab == "gallery" && " tab-active ")}>Gallery</a></Link>    
          <Link href={"/host/"+host?.id+"?tab=reviews"}><a className={"tab " + (tab == "reviews" && " tab-active ")}>Reviews</a></Link>        
        </div>

       {tab!="gallery" && tab!="reviews" && <TripDetails trips={trips}></TripDetails> }
       {tab=="gallery" && <GalleryDetails></GalleryDetails> }
       {tab=="reviews" && <TripReviewSection></TripReviewSection>}
    </div>
   
  );
};
