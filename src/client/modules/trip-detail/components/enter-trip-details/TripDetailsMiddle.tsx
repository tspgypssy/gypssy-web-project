

import { Line } from 'icons/Line';
import React, { useCallback, useRef } from 'react'
import { TripDetailsOverview } from './TripDetailsOverview';
import { TripDetailsPackage } from './TripDetailsPackage';
import { TripHostedBy } from './TripHostedBy';
import { TripReviewSection } from './TripReviewSection';



export const TripDetailsMiddle = () => {

  return (
   <>
  <div className="grid grid-cols-5 gap-16 mt-20">
      <div className="col-span-3">
          <TripDetailsOverview></TripDetailsOverview>
      </div>
        <div className="col-span-2">
         <TripDetailsPackage></TripDetailsPackage>
        </div>
  </div>
   
  <div  className="grid grid-cols-2 gap-16 pt-20 border-t border-super-lighter-grey mb-16">
      <div className="col-span-1">
              <TripHostedBy></TripHostedBy>
      </div>
      <div className="col-span-1">
              <TripReviewSection></TripReviewSection>
      </div>
  </div>
  </>
  );
};
