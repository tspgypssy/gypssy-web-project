
import { ImagePreviewModal } from "client/modules/trip-detail/components/enter-trip-details/image-preview/ImagePreviewModal";
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
  
  const { tripdetail } = router.query as {
    tripdetail: string
  };

  const { modal } = router.query;
  
  useEffect(() => {
      actionList.getTripDetails({tripdetail:tripdetail});
     
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
    
      <TripDetailsPage></TripDetailsPage>
      { modal === 'image-preview' && <ImagePreviewModal /> }
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
