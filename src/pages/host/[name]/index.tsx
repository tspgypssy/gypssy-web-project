
import { HostProfile } from "client/modules/host/components/HostProfile";
import { TravellerProfile } from "client/modules/traveller/components/TravellerProfile";
import { TripDetailsPage } from "client/modules/trip-detail/components/TripDetailsPage";
import actionList from "client/shell/actions";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
 
const NEXT_PUBLIC_WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_BASE_URL;

const TripDetail = () => {
  const seo = {
    title:
      "Gypssy",
    description:
      `Starting a business but looking for a co-founder? Join other promising talents in the co-founder matching app! Discover curated prospects, brainstorm, and start up!`,
    image: `${NEXT_PUBLIC_WEB_BASE_URL}/images/co-founder.png`,
  };

  const router = useRouter();

  const { name } = router.query as {
    name: string
  };

  const { modal } = router.query;


  useEffect(() => {
    actionList.getHostDetails({name:name});
   
}, [router.query]);

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
    
      <HostProfile></HostProfile>
      
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

export default TripDetail;
