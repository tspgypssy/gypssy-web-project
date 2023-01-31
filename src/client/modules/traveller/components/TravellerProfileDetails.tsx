import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { EditIcon } from 'icons/EditIcon';

import React, { useCallback, useRef } from 'react'
import { Trip } from './Trip';


export const TravellerProfileDetails = () => {

  return (
   
    <div className="bg-white p-12 w-full">
        <div className="flex items-center w-full">
            <img src="/images/dummy-user.png" className="h-36 w-36 "></img>
            <div className="ml-8">
                <p className="font-medium text-sm opacity-60">Traveler profile</p>
                <p className="mt-1 text-3xl font-bold">Wade Warren</p>
            </div>
            <EditIcon className="ml-auto"></EditIcon>
        </div>

        <div className="tabs w-full border-b border-super-lighter-grey my-6">
          <a className="tab tab-active">Upcoming</a> 
          <a className="tab  ">Completed</a>        
        </div>

        <div className="  grid grid-cols-4 gap-4 mb-14">
            <Trip></Trip>
            <Trip></Trip>
            <Trip></Trip>
            <Trip></Trip>
        </div> 
    </div>
   
  );
};
