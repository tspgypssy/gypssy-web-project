
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { useRouter } from 'next/router';
import { AddTripHighlights } from './AddTripHighlights';
import { LinkSocialMedia } from './LinkSocialMedia';
import { StartPage } from './StartPage';
import { TellUsAboutYrouself } from './TellUsAboutYrouself';


export const CreateHost = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <div className="w-full h-screen bg-white overflow-y-auto">
      <Header></Header>
      {/* <StartPage></StartPage> */}
      {/* <AddTripHighlights></AddTripHighlights> */}
      {/* <TellUsAboutYrouself></TellUsAboutYrouself> */}
      <LinkSocialMedia></LinkSocialMedia>
   </div>
  );
};
