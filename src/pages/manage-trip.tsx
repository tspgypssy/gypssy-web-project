
import { LandingPage } from "client/modules/landingpage/components/LandingPage";
import { AddVouchersModal } from "client/modules/manage-trip/components/AddVouchersModal";
import { CancelBookingModal } from "client/modules/manage-trip/components/CancelBookingModal";
import { ManageTrip } from "client/modules/manage-trip/components/ManageTrip";
import { BusienessRegistrationModal } from "client/modules/settings/components/BusienessRegistrationModal";

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
 
const NEXT_PUBLIC_WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_BASE_URL;

const Home = () => {
  const seo = {
    title:
      "Gypssy",
    description:
      `Starting a business but looking for a co-founder? Join other promising talents in the co-founder matching app! Discover curated prospects, brainstorm, and start up!`,
    image: `${NEXT_PUBLIC_WEB_BASE_URL}/images/co-founder.png`,
  };


  const router = useRouter();
  const { modal } = router.query;


  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          title: seo.title,
          description: seo.description,
          images: [{ url: seo.image }],
        }}
      />
 
       <ManageTrip></ManageTrip>
       {modal === "add-vouchers" && <AddVouchersModal />}
       {modal === "cancel-booking" && <CancelBookingModal />}
    </>
   
  );
};

export const getServerSideProps = async ({ req, res }) => {

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1000, stale-while-revalidate=5900'
  )


  // Pass data to the page via props
  return {
      props: {
     
      }
  }
};

export default Home;
