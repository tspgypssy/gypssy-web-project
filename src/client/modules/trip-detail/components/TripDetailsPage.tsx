
import { Header } from 'client/modules/header/components/Header';
import actionList from 'client/shell/actions';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef } from 'react'
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
