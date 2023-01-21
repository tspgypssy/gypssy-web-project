

import React, { useCallback, useRef, useState } from 'react'
import { GuestTripDetails } from './GuestTripDetails';
import { InnerViewTripDetails } from './InnerViewTripDetails';


export const ViewTripDetails = () => {

  const [showCal,setShowCal] = useState(false); 

  const setFalse =() =>
  {
    setShowCal(false)
  }

  return (
   
    <div onClick={setFalse} className=" ">
         <InnerViewTripDetails></InnerViewTripDetails>
         <GuestTripDetails showCal={showCal} setShowCal={setShowCal}></GuestTripDetails>
    </div>
   
  );
};
