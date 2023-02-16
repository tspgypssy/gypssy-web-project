
import { LandingPage } from "client/modules/landingpage/components/LandingPage";
import actionList from "client/shell/actions";
import { RootState } from "client/shell/store";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
 
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
  const accessTokenExpired:string = useSelector((state: RootState) => state.login.accessTokenExpired);
  const reloadPage:string = useSelector((state: RootState) => state.login.reloadPage);

  useEffect(() => {
   
    if(accessTokenExpired && localStorage.getItem("refreshJwt") != null)
    {
      actionList.updateAccessToken({"grant_type":"refresh_token","refresh_token":localStorage.getItem("refreshJwt")});
    }
  }, [accessTokenExpired]);

  useEffect(() => {
   
    if(reloadPage)
    {
      location.reload();
    }
  }, [reloadPage]);


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
    
      <LandingPage></LandingPage>
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
