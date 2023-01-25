
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrowPage } from 'icons/BackArrowPage';
import { useRouter } from 'next/router';

import React, { useCallback, useRef, useState } from 'react'
import { ExpenseSection } from './manage-trip/ExpenseSection';
import { GypssySection } from './manage-trip/GypssySection';
import { OutsideSection } from './manage-trip/OutsideSection';
import { ParticipantSection } from './manage-trip/ParticipantSection';
import { PayoutDetails } from './manage-trip/PayoutDetails';
import { EditTripModal } from './manage-trip/popup/EditTripModal';
import { TransactionDetails } from './manage-trip/TransactionDetails';
import { TripDetailsSection } from './manage-trip/TripDetailsSection';
import { WhatsappSection } from './manage-trip/WhatsappSection';


export const ManageTrip = () => {

  const router = useRouter();
  const { modal } = router.query;
    
  return (
   
    <div  className="bg-white  ">
          <Header></Header>
          <div className="p-16">
            <div className="text-sm breadcrumbs font-semibold opacity-70">
                <ul>
                    <li><a>Settings</a></li> 
                    <li><a>Edit profile</a></li> 
                    <li><a>Manage trip</a></li> 
                </ul>
            </div>

            <div className="flex items-center mt-4">
                <BackArrowPage></BackArrowPage>
                <p className="ml-5 text-3xl font-bold">Manage trip</p>
               
            </div>

            <WhatsappSection></WhatsappSection>
            <TripDetailsSection></TripDetailsSection>
            <GypssySection></GypssySection>      
            <TransactionDetails></TransactionDetails>
            <PayoutDetails></PayoutDetails>
            <ParticipantSection></ParticipantSection>
            <OutsideSection></OutsideSection>
            <ExpenseSection></ExpenseSection>
          </div>
          <Footer></Footer>

          {modal === "edit-trip" && <EditTripModal />}
    </div>
   
  );
};
