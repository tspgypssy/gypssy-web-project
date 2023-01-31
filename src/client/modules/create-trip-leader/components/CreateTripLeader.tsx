
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { useRouter } from 'next/router';
import { AboutYourSelf } from './AboutYourSelf';
import { CreateSkill } from './CreateSkill';
import { LinkSocialMedia } from './LinkSocialMedia';
import { TripLeadBy } from './TripLeadBy';


export const CreateTripLeader = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <div className="w-full h-screen bg-white overflow-y-auto">
      <Header></Header>
      {/* <LinkSocialMedia></LinkSocialMedia> */}
      {/* <AboutYourSelf></AboutYourSelf> */}
      {/* <CreateSkill></CreateSkill> */}
      <TripLeadBy></TripLeadBy>
   </div>
  );
};
