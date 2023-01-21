

import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'
import { TripAccordionDetails } from './TripAccordionDetails';
import { TripLeadBy } from './TripLeadBy';
import { TripType } from './TripType';



export const TripDetailsOverview = () => {

  return (
   
      <div>
          <TripType></TripType>
          <TripLeadBy></TripLeadBy>
          <TripAccordionDetails></TripAccordionDetails>
      </div>
          
   
  );
};
