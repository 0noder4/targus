const isBrowser = typeof window !== "undefined";
const useBrowserHost =
  isBrowser && process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER;

/** Protocol for browser URLs (behind proxy). Defaults to https when HOST_BROWSER is set. */
const browserProtocol =
  process.env.NEXT_PUBLIC_BACKEND_PROTOCOL_BROWSER ??
  (process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER
    ? "https"
    : process.env.NEXT_PUBLIC_BACKEND_PROTOCOL);

/** Port for browser URLs. Empty = default (443 for https). */
const browserPort =
  process.env.NEXT_PUBLIC_BACKEND_PORT_BROWSER ??
  (process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER
    ? ""
    : process.env.NEXT_PUBLIC_BACKEND_PORT);

/**
 * Backend URL for API calls (GraphQL, etc.). Uses BROWSER host in browser,
 * BACKEND host on server (so Docker containers can reach each other).
 */
const navigateBackend = (path: string) => {
  const protocol = useBrowserHost ? browserProtocol : process.env.NEXT_PUBLIC_BACKEND_PROTOCOL;
  const port = useBrowserHost ? browserPort : process.env.NEXT_PUBLIC_BACKEND_PORT;
  const host = useBrowserHost
    ? process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER!
    : process.env.NEXT_PUBLIC_BACKEND_HOST;
  const portPart = port ? `:${port}` : "";
  return `${protocol}://${host}${portPart}${path}`;
};

/**
 * Backend URL for images. Same on server and client (avoids hydration mismatch).
 * @param path - Image path (e.g. /uploads/foo.png)
 * @param forBrowser - If true, use host reachable from browser (proxy on 443).
 *   Use for images loaded directly (SVG image href, raw img src). Default: false (Next.js Image).
 */
export const getBackendImageUrl = (path: string, forBrowser = false) => {
  const protocol = forBrowser
    ? browserProtocol
    : process.env.NEXT_PUBLIC_BACKEND_PROTOCOL;
  const port = forBrowser ? browserPort : process.env.NEXT_PUBLIC_BACKEND_PORT;
  const host = forBrowser
    ? process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER ||
      process.env.NEXT_PUBLIC_BACKEND_HOST
    : process.env.NEXT_PUBLIC_BACKEND_HOST;
  const portPart = port ? `:${port}` : "";
  return `${protocol}://${host}${portPart}${path}`;
};

export default navigateBackend;
