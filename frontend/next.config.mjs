/** @type {import('next').NextConfig} */

// Backend hostnames for images (backend for SSR in Docker, *_BROWSER for client)
const imageHostnames = [
  process.env.NEXT_PUBLIC_BACKEND_HOST,
  process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER,
]
  .filter(Boolean)
  .filter((h, i, a) => a.indexOf(h) === i); // unique

const backendBase =
  `${process.env.NEXT_PUBLIC_BACKEND_PROTOCOL || "http"}://${process.env.NEXT_PUBLIC_BACKEND_HOST || "backend"}:${process.env.NEXT_PUBLIC_BACKEND_PORT || "1337"}`;

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [process.cwd()],
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${backendBase}/uploads/:path*`,
      },
    ];
  },
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
