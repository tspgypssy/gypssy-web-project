
import { Header } from 'client/modules/header/components/Header';
import { Filters } from './Filters';
import { Trips } from './Trips';
import { Footer } from 'client/modules/header/components/Footer';
import { useRouter } from 'next/router';
import { LoginPageModal } from 'client/modules/login/components/LoginPageModal';
import { AllFiltersModal } from 'client/modules/filters/components/all-filters/AllFiltersModal';
import { CalendarFilterModal } from 'client/modules/filters/components/calendar-filter/CalendarFilterModal';
import { GroupTypeModal } from 'client/modules/filters/components/group-type-filter/GroupTypeModal';
import { AgeFilterModal } from 'client/modules/filters/components/age-filter/AgeFilterModal';
import { BudgetFilterModal } from 'client/modules/filters/components/budget-filter/BudgetFilterModal';
import { TripFocusModal } from 'client/modules/filters/components/trip-focus-filter/TripFocusModal';
import { DestinationFilterModal } from 'client/modules/filters/components/destination-filter/DestinationFilterModal';

export const LandingPage = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <div className="w-full h-screen bg-white overflow-y-auto">
      <Header></Header>
      <Filters></Filters>
      <Trips></Trips>
      <Footer></Footer>

      {modal === "all-filters" && <AllFiltersModal />}
      {modal === "calendar-filter" && <CalendarFilterModal />}
      {modal === "age-filter" && <AgeFilterModal />}
      {modal === "budget-filter" && <BudgetFilterModal />}
      {modal === "group-type" && <GroupTypeModal />}
      {modal === "trip-focus" && <TripFocusModal />}
      {modal === "destination-filter" && <DestinationFilterModal />}
      {modal === "login" && <LoginPageModal />}
   </div>
  );
};
