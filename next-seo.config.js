const title = 'Quark Social'
const description = 'Awesome Web3 community'
const url = process.env.NEXT_PUBLIC_CLIENT_BASE_URL

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: url,
    title,
    description,
    images: [
      {
        url: `${url}/images/co-founder.png`,
        alt: title,
        width: 600,
        height: 600,
        type: 'image/svg',
      },
    ],
    site_name: 'quark.social',
  },
}

export default SEO
