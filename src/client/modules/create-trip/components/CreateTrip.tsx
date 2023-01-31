
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { useRouter } from 'next/router';
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
 
  return (
   <div className="w-full h-screen bg-white overflow-y-auto">
      <Header></Header>
      {/* <StartPage></StartPage>  */}
      {/* <TitleDescription></TitleDescription> */}
      {/* <SelectCoverImage></SelectCoverImage> */}
      {/* <EnterTripDetails></EnterTripDetails> */}
      {/* <EnterGroupDetails></EnterGroupDetails> */}
      {/* <PlanItenary></PlanItenary> */}
      {/* <TripInclusions></TripInclusions> */}
      {/* <TripExclusions></TripExclusions> */}
      {/* <TripPreRequisites></TripPreRequisites> */}
      {/* <TripPricing></TripPricing> */}
      {/* <TripFAQs></TripFAQs> */}
      <AddTripLeader></AddTripLeader>
   </div>
  );
};
