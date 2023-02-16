import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import actionList from 'client/shell/actions';
import { RootState } from 'client/shell/store';
import { EditIcon } from 'icons/EditIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Trip } from './Trip';


export const TravellerProfileDetails = ({userDetails}) => {
  
  const router = useRouter();
  const { tab } = router.query;
  const trips = useSelector((state: RootState) => state.user.trips);

  useEffect(() => {
     
    if(tab)
    {
      switch(tab) {
        case "upcoming":
           actionList.getUpcomingTravellerList({})  
          break;
        case "completed":
          actionList.getCompletedTravellerList({})  
          break;
       
        default:
          // code block
      }  
    }
    
  }, [tab]);

  return (
   
    <div className="bg-white p-12 w-full">
        <div className="flex items-center w-full">
            <img src={userDetails?.avatar} className="h-36 w-36 rounded-full"></img>
            <div className="ml-8">
                <p className="font-medium text-sm opacity-60">Traveler profile</p>
                <p className="mt-1 text-3xl font-bold">{userDetails?.name}</p>
            </div>
            <EditIcon className="ml-auto"></EditIcon>
        </div>

        <div className="tabs w-full border-b border-super-lighter-grey my-6">
        <Link href={"/traveller/?tab=upcoming"}><a className={"cursor-pointer tab " + (tab == "upcoming" && " tab-active ")}>Upcoming</a></Link> 
          <Link href={"/traveller/?tab=completed"}><a className={"cursor-pointer tab " + (tab == "completed" && " tab-active ")}>Completed</a></Link>       
        </div>

        <div className="  grid grid-cols-4 gap-4 mb-14">
        {trips.map((trip) => (
             <Trip trip={trip}></Trip>
          ))}
            
          
        </div> 
    </div>
   
  );
};
