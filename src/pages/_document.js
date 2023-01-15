import { Html, Head, Main, NextScript } from 'next/document'
import { DefaultSeo } from 'next-seo';

export default function Document() {
  return (
    <Html className='bg-super-frame w-screen overflow-x-hidden' lang="en">
      <Head>
        <meta charSet="UTF-8" />

        <meta name='application-name' content='Co-Founder App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Super Clubs' />
        {/* <meta name='description' content='Join super clubs' /> */}
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#101728' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#101728' />

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Avenir" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Sen" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito%20Sans" rel="stylesheet"></link>

        <link rel='apple-touch-icon' href='/co-founder.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/co-founder.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/co-founder.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/co-founder.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='/co-founder.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/co-founder.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://dropform.xyz' />

        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://dropform.xyz',
            site_name: 'Co-Founder App',
            title: 'Co-Founder App',
            description: 'Join Co-Founder App',
            images: [
              {
                url: 'https://dropform.xyz/images/co-founder.png',
                type: 'image/png',
              }
            ]
          }}
        
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
