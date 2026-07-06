import { notFound } from "next/navigation";
import { findRenderedPage, getRenderedPages, metadataFromHtml, readRenderedHtml } from "../renderedSite";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getRenderedPages()
    .filter((page) => page.slug)
    .map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: Props) {
  const path = (await params).slug.join("/");
  const page = findRenderedPage(path);

  if (!page) {
    return metadataFromHtml("", "DESTROY");
  }

  return metadataFromHtml(readRenderedHtml(page), "DESTROY");
}

export default async function RenderedContentPage({ params }: Props) {
  const path = (await params).slug.join("/");
  const page = findRenderedPage(path);

  if (!page) {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: readRenderedHtml(page) }} />;
}
