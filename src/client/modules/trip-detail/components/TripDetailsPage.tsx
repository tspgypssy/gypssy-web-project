import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'
import { ConfirmTripDetails } from './confirm-trip-details/ConfirmTripDetails';
import { TripDetails } from './enter-trip-details/TripDetails';



export const TripDetailsPage = () => {

  return (
   
    <div className="bg-white  ">
          <Header></Header>
          <TripDetails></TripDetails>

          {/* <ConfirmTripDetails></ConfirmTripDetails> */}
         
    </div>
   
  );
};
