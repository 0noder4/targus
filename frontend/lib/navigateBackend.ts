const navigateBackend = (url: string) => {
  const BACKEND_PROTOCOL = process.env.NEXT_PUBLIC_BACKEND_PROTOCOL;
  const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;
  const BACKEND_PORT = process.env.NEXT_PUBLIC_BACKEND_PORT;

  return `${BACKEND_PROTOCOL}://${BACKEND_HOST}:${BACKEND_PORT}${url}`;
};

export default navigateBackend;
