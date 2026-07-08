import { notFound } from "next/navigation";
import { CustomContentPage, findCustomPage, getCustomPages, metadataFromCustomPage } from "../customContent";
import { findRenderedPage, getRenderedPages, metadataFromHtml, readRenderedHtml } from "../renderedSite";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const renderedFirstSlugs = new Set(["nashi-video", "nashi-obekty", "novye-uslugi"]);

export function generateStaticParams() {
  const params = [
    ...getRenderedPages().filter((page) => page.slug).map((page) => page.slug),
    ...getCustomPages().map((page) => page.slug),
  ];

  return Array.from(new Set(params))
    .filter(Boolean)
    .map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: Props) {
  const path = (await params).slug.join("/");
  const renderedFirstPage = renderedFirstSlugs.has(path) ? findRenderedPage(path) : undefined;

  if (renderedFirstPage) {
    return metadataFromHtml(readRenderedHtml(renderedFirstPage), "DESTROY");
  }

  const customPage = findCustomPage(path);

  if (customPage) {
    return metadataFromCustomPage(customPage);
  }

  const page = findRenderedPage(path);

  if (!page) {
    return metadataFromHtml("", "DESTROY");
  }

  return metadataFromHtml(readRenderedHtml(page), "DESTROY");
}

export default async function RenderedContentPage({ params }: Props) {
  const path = (await params).slug.join("/");
  const renderedFirstPage = renderedFirstSlugs.has(path) ? findRenderedPage(path) : undefined;

  if (renderedFirstPage) {
    return <div dangerouslySetInnerHTML={{ __html: readRenderedHtml(renderedFirstPage) }} />;
  }

  const customPage = findCustomPage(path);

  if (customPage) {
    return <CustomContentPage page={customPage} />;
  }

  const page = findRenderedPage(path);

  if (!page) {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: readRenderedHtml(page) }} />;
}
