/**
 * Backend URL for API calls (GraphQL, etc.). Uses BROWSER host in browser,
 * BACKEND host on server (so Docker containers can reach each other).
 */
const navigateBackend = (path: string) => {
  const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL;
  const port = process.env.NEXT_PUBLIC_BACKEND_PORT;
  const host =
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER
      ? process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER
      : process.env.NEXT_PUBLIC_BACKEND_HOST;
  return `${protocol}://${host}:${port}${path}`;
};

/**
 * Backend URL for images. Same on server and client (avoids hydration mismatch).
 * @param path - Image path (e.g. /uploads/foo.png)
 * @param forBrowser - If true, use host reachable from browser (e.g. localhost in Docker).
 *   Use for images loaded directly (SVG image href, raw img src). Default: false (Next.js Image).
 */
export const getBackendImageUrl = (path: string, forBrowser = false) => {
  const protocol = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL;
  const port = process.env.NEXT_PUBLIC_BACKEND_PORT;
  const host = forBrowser
    ? process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER ||
      process.env.NEXT_PUBLIC_BACKEND_HOST
    : process.env.NEXT_PUBLIC_BACKEND_HOST;
  return `${protocol}://${host}:${port}${path}`;
};

export default navigateBackend;
