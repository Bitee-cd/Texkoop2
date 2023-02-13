const nextTranslate = require("next-translate");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };
module.exports = {
  ...nextTranslate(),
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        
        // pathname: '/images/**',
      },

    ],
    // domains: [
    //   'res.cloudinary.com'
    // ],
  },
};
// module.exports = nextConfig;
