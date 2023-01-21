

import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'
import { TripCancellationPolicy } from './TripCancellationPolicy';
import { TripExclusions } from './TripExclusions';
import { TripFAQs } from './TripFAQs';
import { TripInclusions } from './TripInclusions';
import { TripItinerary } from './TripItinerary';
import { TripPreRequisites } from './TripPreRequisites';



export const TripAccordionDetails = () => {

  return (
   <>
         <TripItinerary></TripItinerary>
         <TripInclusions></TripInclusions>
         <TripExclusions></TripExclusions>
         <TripPreRequisites></TripPreRequisites>
         <TripFAQs></TripFAQs>
         <TripCancellationPolicy></TripCancellationPolicy>
   </>
  );
};
