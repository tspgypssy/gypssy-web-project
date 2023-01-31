import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'
import { HostProfileDetails } from './HostProfileDetails';


export const HostProfile = () => {

  return (
   
    <div className="bg-white  ">
          <Header></Header>
          <HostProfileDetails></HostProfileDetails>
          <Footer></Footer>
         
    </div>
   
  );
};
