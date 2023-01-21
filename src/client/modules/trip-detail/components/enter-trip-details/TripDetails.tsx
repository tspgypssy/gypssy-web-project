
import { Footer } from 'client/modules/header/components/Footer';
import { Favourite } from 'icons/Favourite';
import { Middot } from 'icons/Middot';
import { MiddotWhite } from 'icons/MiddotWhite';
import { Share } from 'icons/Share';
import { ShareWhite } from 'icons/ShareWhite';
import React, { useCallback, useRef } from 'react'
import { TripDetailsHeader } from './TripDetailsHeader';
import { TripDetailsImage } from './TripDetailsImage';
import { TripDetailsMiddle } from './TripDetailsMiddle';



export const TripDetails = () => {

  return (
   
    <div className="bg-white  h-screen w-full overflow-y-auto ">
        <div className=" px-16">
            <TripDetailsHeader></TripDetailsHeader>
            <TripDetailsImage></TripDetailsImage>
            <TripDetailsMiddle></TripDetailsMiddle>
        </div>
       
        <Footer></Footer>
    </div>
   
  );
};
