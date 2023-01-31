
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrowPage } from 'icons/BackArrowPage';
import { useRouter } from 'next/router';

import React, { useCallback, useRef, useState } from 'react'
import { HostDetails } from './HostDetails';
import { TravellerDetails } from './TravellerDetails';


export const ManageTrip = () => {

  const router = useRouter();
  const { modal } = router.query;
    
  return (
   
    <div  className="bg-white  ">
          <Header></Header>
          {/* <HostDetails></HostDetails> */}
          <TravellerDetails></TravellerDetails>
          <Footer></Footer>

        
    </div>
   
  );
};
