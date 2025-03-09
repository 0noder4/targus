/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_BACKEND_HOST,
        port: process.env.NEXT_PUBLIC_BACKEND_PORT,
        pathname: "/uploads/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
