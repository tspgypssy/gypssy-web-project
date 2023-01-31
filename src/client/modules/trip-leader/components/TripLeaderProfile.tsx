import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { CrossModal } from 'icons/CrossModal';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'
import { TripLeaderProfileDetails } from './TripLeaderProfileDetails';
import { WriteReviewModal } from './WriteReviewModal';


export const TripLeaderProfile = () => {

  const router = useRouter();
  const { modal } = router.query;

  return (
   
    <div className="bg-white  ">
          <Header></Header>
          <TripLeaderProfileDetails></TripLeaderProfileDetails>
          <Footer></Footer>
          {modal === "write-review" && <WriteReviewModal />}
    </div>
   
  );
};
