
import { Header } from 'client/modules/header/components/Header';
import { Filters } from './Filters';
import { Trips } from './Trips';
import { Footer } from 'client/modules/header/components/Footer';
import { useRouter } from 'next/router';
import { AllFiltersModal } from 'client/modules/filters/components/AllFiltersModal';

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
   </div>
  );
};
