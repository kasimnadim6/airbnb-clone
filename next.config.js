/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'firebasestorage.googleapis.com'],
  },
  env: {
    map_access_token:
      'pk.eyJ1Ijoia2FzaW1uYWRpbSIsImEiOiJjbDlvaHk0NXEwaWc4M29rYjJ5ZzRwczV5In0.9TyiK-8q0lSTpIEzcyTFCg',
  },
};
