

import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';
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
