import { findRenderedPage, metadataFromHtml, readRenderedHtml } from "./renderedSite";

const page = findRenderedPage("");
const html = page ? readRenderedHtml(page) : "";

export const metadata = metadataFromHtml(html, "DESTROY");

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
