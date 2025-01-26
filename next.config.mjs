/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'aceternity.com',
      'images.unsplash.com',
      'assets.aceternity.com',
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "nextsoftgroup.com",
          },
        ],
        destination: "https://www.nextsoftgroup.com/",
        permanent: true,
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "www.nextsoftgroup.com",
          },
        ],
        destination: "https://www.nextsoftgroup.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
