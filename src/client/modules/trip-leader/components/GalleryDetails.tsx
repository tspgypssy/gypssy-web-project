import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { EditIcon } from 'icons/EditIcon';

import React, { useCallback, useRef } from 'react'
import { Trip } from './Trip';


export const GalleryDetails = () => {

  return (
   
    
        <div  className="  grid grid-cols-4 gap-4 mb-14">
            <img className="rounded-lg" src="/images/dummy-trip.png"></img>
            <img className="rounded-lg" src="/images/dummy-trip.png"></img>
            <img className="rounded-lg" src="/images/dummy-trip.png"></img>
            <img className="rounded-lg" src="/images/dummy-trip.png"></img>

            <img className="rounded-lg" src="/images/dummy-trip.png"></img>
        </div>
    
  );
};
