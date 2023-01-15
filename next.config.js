const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer(withPWA({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
	pwa: {
		dest: 'public',
		register: false,
		skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
	},
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 86400,
    domains: [
      's3.amazonaws.com',
      'staging-quark-bucket.s3.us-east-2.amazonaws.com',
      'amazonaws.com',
      'brahmastack-productions3bucketd59854f0-1isfpjblnmapv.s3.us-east-2.amazonaws.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,
  output: 'standalone'
 
}));
