// next.config.mjs
export default {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.nextsoftgroup.com/:path*',  // Redirect to the www version
        permanent: true,
      },
    ]
  },
}
