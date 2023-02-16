import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { RootState } from 'client/shell/store';
import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';
import { TravellerProfileDetails } from './TravellerProfileDetails';


export const TravellerProfile = () => {

  const userDetails = useSelector((state: RootState) => state.user.userDetails);
   
  return (
   
    <div className="bg-white  ">
          <Header></Header>
          <TravellerProfileDetails userDetails={userDetails}></TravellerProfileDetails>
          <Footer></Footer>
         
    </div>
   
  );
};
