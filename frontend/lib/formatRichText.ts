/**
 * Converts newlines to markdown line breaks for use with react-markdown.
 */
export const formatRichText = (text: string): string =>
  text.replace(/\n/g, "  \n");
