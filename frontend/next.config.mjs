/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com *.usercentrics.eu;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    connect-src 'self' https://api.targipracy.org.pl/ http://localhost:1337/ *.google-analytics.com;
    upgrade-insecure-requests;
    script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' *.usercentrics.eu *.google-analytics.com;
`;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_BACKEND_HOST,
        port: "",
        pathname: "/uploads/**",
        search: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
