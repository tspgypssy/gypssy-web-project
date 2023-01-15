
import { MasterLoginPage } from "client/modules/login/components/MasterLoginPage";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
  
const NEXT_PUBLIC_WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_BASE_URL;

const Home = () => {
  const seo = {
    title:
      "Co Founder Dashboard",
    description:
      `Supercharge your user research. Build interactive forms with NFT Rewards to get more user responses. Simple, no code flow to create and manage NFT Rewards.`,
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
    
      <MasterLoginPage></MasterLoginPage>
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
