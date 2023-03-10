
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrowPage } from 'icons/BackArrowPage';
import { Middot } from 'icons/Middot';
import { MiddotWhite } from 'icons/MiddotWhite';
import { PlusIcon } from 'icons/PlusIcon';
import { useRouter } from 'next/router';

import React, { useCallback, useRef, useState } from 'react'
import { PaymentStatus } from './PaymentStatus';
import { VoucherDetails } from './VoucherDetails';


export const HostDetails = () => {

  const router = useRouter();
  const { modal } = router.query;
    
  return (
   
    <div  className="bg-white  p-16">
          <div className="text-sm breadcrumbs font-semibold opacity-70">
                <ul>
                    <li><a>Settings</a></li> 
                    <li><a>Edit profile</a></li> 
                    <li><a>Manage trip</a></li>
                    <li><a>Booking details</a></li> 
                </ul>
          </div>
          <div className="flex items-center mt-5">
             <BackArrowPage></BackArrowPage>
             <div className=" ml-5">
                <p className="text-3xl font-bold">Booking details</p>
                <div>
                   <span className="font-medium">Booking ID: </span>
                   <span className="ml-1 font-semibold">#AGDIUNE888</span>
                </div>
             </div>
          </div>

          <p className="text-lg font-semibold mt-16">Traveller details</p>

          <div className="mt-6 grid grid-cols-2 border-b border-super-light-grey  ">
               <div className="flex items-center py-5">
                   <img src="/images/dummy-user.png" className=" h-16 w-16"></img>
                   <div className="ml-3 ">
                          <p className="font-semibold">Kristin Watson</p>
                          <div className="flex items-center opacity-60 text-sm font-medium">
                             <span>21</span>
                             <MiddotWhite className="mx-3"></MiddotWhite>
                             <span>Female</span>
                          </div>
                   </div>
               </div>

               <div className="flex items-center py-5">
                   <img src="/images/dummy-user.png" className=" h-16 w-16"></img>
                   <div className="ml-3 ">
                          <p className="font-semibold">Kristin Watson</p>
                          <div className="flex items-center opacity-60 text-sm font-medium">
                             <span>21</span>
                             <MiddotWhite className="mx-3"></MiddotWhite>
                             <span>Female</span>
                          </div>
                   </div>
               </div>

               <div className="flex items-center py-5">
                   <img src="/images/dummy-user.png" className=" h-16 w-16"></img>
                   <div className="ml-3 ">
                          <p className="font-semibold">Kristin Watson</p>
                          <div className="flex items-center opacity-60 text-sm font-medium">
                             <span>21</span>
                             <MiddotWhite className="mx-3"></MiddotWhite>
                             <span>Female</span>
                          </div>
                   </div>
               </div>

          </div>

         <VoucherDetails></VoucherDetails>
         <div  className="border-b border-super-light-grey py-6">
            <p className="text-lg font-semibold mb-6">Special requests</p>
            <p className="font-medium">Flights with few layovers and clean hotel rooms.</p>
         </div>

         <PaymentStatus></PaymentStatus>
    </div>
   
  );
};
