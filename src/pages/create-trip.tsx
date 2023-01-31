
import { CreateTrip } from "client/modules/create-trip/components/CreateTrip";
import { ExclusionModal } from "client/modules/create-trip/components/filters/ExclusionModal";
import { InclusionModal } from "client/modules/create-trip/components/filters/InclusionModal";
import { SearchLeaderModal } from "client/modules/create-trip/components/filters/SearchLeaderModal";
import { LandingPage } from "client/modules/landingpage/components/LandingPage";
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
    
      <CreateTrip></CreateTrip>
      {modal === "inclusion" && <InclusionModal />}
      {modal === "exclusion" && <ExclusionModal />}
      {modal === "search-leader" && <SearchLeaderModal />}
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
