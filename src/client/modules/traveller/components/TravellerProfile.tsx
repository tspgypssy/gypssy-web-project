import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'
import { TravellerProfileDetails } from './TravellerProfileDetails';


export const TravellerProfile = () => {

  return (
   
    <div className="bg-white  ">
          <Header></Header>
          <TravellerProfileDetails></TravellerProfileDetails>
          <Footer></Footer>
         
    </div>
   
  );
};
