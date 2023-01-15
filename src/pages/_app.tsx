import '../styles/globals.css'
import type { AppProps, } from 'next/app'
import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from 'client/shell/store';
import ReactGA from 'react-ga';

const TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID_ENV_VARIABLE; 

ReactGA.initialize(TRACKING_ID);
console.log("env "+process.env.NEXT_PUBLIC_ENV);

function DropFormApp({ Component, pageProps }: AppProps) {
  
  const { query } = useRouter();
  const router = useRouter();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    router.events.on('routeChangeComplete', () => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    })
    return () => {
      router.events.off('routeChangeComplete', () => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      })
    }
  }, [router.events])

  return (
   
    <Provider store={store}>
            <Component {...pageProps}
                query={query}
                dispatch={store.dispatch} />    
    </Provider>
   
  )
}

export default DropFormApp