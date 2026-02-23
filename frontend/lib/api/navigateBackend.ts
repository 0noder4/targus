const isBrowser = typeof window !== "undefined";
const useBrowserHost =
  isBrowser && process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER;

/** Protocol for browser URLs. Defaults to http when HOST_BROWSER is set so GraphQL/images work without Caddy. */
const browserProtocol =
  process.env.NEXT_PUBLIC_BACKEND_PROTOCOL_BROWSER ??
  (process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER
    ? "http"
    : process.env.NEXT_PUBLIC_BACKEND_PROTOCOL);

/** Port for browser URLs. Defaults to 1337 for local dev when HOST_BROWSER is set. */
const browserPort =
  process.env.NEXT_PUBLIC_BACKEND_PORT_BROWSER ??
  (process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER
    ? process.env.NEXT_PUBLIC_BACKEND_PORT || "1337"
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
 * Backend URL for images. Uses relative path when path starts with / so requests
 * go through the Next.js app (rewrite to backend), same on server and client (no hydration mismatch).
 * @param path - Image path (e.g. /uploads/foo.png)
 * @param forBrowser - If true and path is not relative, use host reachable from browser.
 */
export const getBackendImageUrl = (path: string, forBrowser = false) => {
  const normalizedPath = path.startsWith("http") ? new URL(path).pathname : path;
  if (normalizedPath.startsWith("/")) {
    return normalizedPath;
  }
  const protocol = forBrowser
    ? browserProtocol
    : process.env.NEXT_PUBLIC_BACKEND_PROTOCOL;
  const port = forBrowser ? browserPort : process.env.NEXT_PUBLIC_BACKEND_PORT;
  const host = forBrowser
    ? process.env.NEXT_PUBLIC_BACKEND_HOST_BROWSER ||
      process.env.NEXT_PUBLIC_BACKEND_HOST
    : process.env.NEXT_PUBLIC_BACKEND_HOST;
  const portPart = port ? `:${port}` : "";
  return `${protocol}://${host}${portPart}/${normalizedPath}`;
};

export default navigateBackend;
