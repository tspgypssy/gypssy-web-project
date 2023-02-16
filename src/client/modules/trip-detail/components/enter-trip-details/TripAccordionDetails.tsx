

import { RootState } from 'client/shell/store';
import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';
import { TripCancellationPolicy } from './TripCancellationPolicy';
import { TripExclusions } from './TripExclusions';
import { TripFAQs } from './TripFAQs';
import { TripInclusions } from './TripInclusions';
import { TripItinerary } from './TripItinerary';
import { TripPreRequisites } from './TripPreRequisites';



export const TripAccordionDetails = () => {

  const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);

  return (
   <>
         <TripItinerary></TripItinerary>
         <TripInclusions></TripInclusions>
         <TripExclusions></TripExclusions>
         <TripPreRequisites></TripPreRequisites>
         {tripDetail?.faqs?.length>0 && <TripFAQs></TripFAQs> }
         <TripCancellationPolicy></TripCancellationPolicy>
   </>
  );
};
