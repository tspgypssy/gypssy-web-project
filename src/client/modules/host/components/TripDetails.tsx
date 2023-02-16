import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { EditIcon } from 'icons/EditIcon';

import React, { useCallback, useRef } from 'react'
import { GalleryDetails } from './GalleryDetails';
import { Trip } from './Trip';


export const TripDetails = ({trips}) => {

  return (
   
    <div className="  grid grid-cols-4 gap-4 mb-14">
         {trips.length>0 && trips.map(( trip ) => (
                           <>{
                            <Trip trip={trip}></Trip>
                            }</>
                        ))}
         
        </div> 
   
  );
};
