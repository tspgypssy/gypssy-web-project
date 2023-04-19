
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { RootState } from 'client/shell/store';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AddTripLeader } from './AddTripLeader';
import { EnterGroupDetails } from './EnterGroupDetails';
import { EnterTripDetails } from './EnterTripDetails';
import { PlanItenary } from './PlanItenary';
import { SelectCoverImage } from './SelectCoverImage';
import { StartPage } from './StartPage';
import { TitleDescription } from './TitleDescription';
import { TripExclusions } from './TripExclusions';
import { TripFAQs } from './TripFAQs';
import { TripInclusions } from './TripInclusions';
import { TripPreRequisites } from './TripPreRequisites';
import { TripPricing } from './TripPricing';

export const CreateTrip = () => {
    
  const router = useRouter();
  const { modal } = router.query;
  const pageTypeSelected =  useSelector((state: RootState) => state.createtrip.pageTypeSelected);

  return (
   <div className="w-full h-screen bg-white overflow-y-auto">
      <Header></Header>
      {pageTypeSelected=="create-trip" && <StartPage></StartPage>}
      {pageTypeSelected=="title-desc" && <TitleDescription></TitleDescription>}
      {pageTypeSelected=="title-cover-image" &&  <SelectCoverImage></SelectCoverImage> }
      {pageTypeSelected=="enter-trip-details" && <EnterTripDetails></EnterTripDetails>}
      {pageTypeSelected=="enter-group-details" && <EnterGroupDetails></EnterGroupDetails> }
      {pageTypeSelected=="plan-itenary" && <PlanItenary></PlanItenary> }
      {/* <TripInclusions></TripInclusions> */}
      {/* <TripExclusions></TripExclusions> */}
      {/* <TripPreRequisites></TripPreRequisites> */}
      {/* <TripPricing></TripPricing> */}
      {/* <TripFAQs></TripFAQs> */}
      {/* <AddTripLeader></AddTripLeader> */}
   </div>
  );
};
