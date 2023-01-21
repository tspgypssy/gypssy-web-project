
import { Footer } from 'client/modules/header/components/Footer';
import { BackArrowPage } from 'icons/BackArrowPage';

import React, { useCallback, useRef } from 'react'
import { EnterTripDetails } from './EnterTripDetails';


export const ConfirmTripDetails = () => {

  return (
   
    <div className="bg-white  h-screen w-full overflow-y-auto ">
        <div className=" px-16">
            <div className="flex items-center my-16">
               <BackArrowPage className="cursor-pointer"></BackArrowPage>
               <p className="ml-5 font-bold text-3xl">Confirm and pay</p>
            </div>
            <EnterTripDetails></EnterTripDetails>
        </div>
       
        <Footer></Footer>
    </div>
   
  );
};
