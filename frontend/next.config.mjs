/** @type {import('next').NextConfig} */

// Backend hostnames for images (backend for SSR in Docker, *_BROWSER for client)
const imageHostnames = [
  process.env.NEXT_PUBLIC_BACKEND_HOST,
  process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER,
]
  .filter(Boolean)
  .filter((h, i, a) => a.indexOf(h) === i); // unique

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: imageHostnames.map((hostname) => ({
      protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || "http",
      hostname,
      port: process.env.NEXT_PUBLIC_BACKEND_PORT || "1337",
      pathname: "/uploads/**",
      search: "",
    })),
  },
};

export default nextConfig;
