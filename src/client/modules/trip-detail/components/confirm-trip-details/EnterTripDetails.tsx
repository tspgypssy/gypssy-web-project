

import React, { useCallback, useRef } from 'react'
import { PaymentTripDetails } from './PaymentTripDetails';
import { ViewTripDetails } from './ViewTripDetails';


export const EnterTripDetails = () => {

  return (
   
    <div className="grid grid-cols-5 gap-16">
        <div className="col-span-3">
            <ViewTripDetails></ViewTripDetails>
        </div>
          <div className="col-span-2">
          <PaymentTripDetails></PaymentTripDetails>
          </div>
    </div>
  );
};
