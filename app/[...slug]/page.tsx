import { notFound } from "next/navigation";
import { CustomContentPage, findCustomPage, getCustomPages, metadataFromCustomPage } from "../customContent";
import { findRenderedPage, getRenderedPages, metadataFromHtml, readRenderedHtml } from "../renderedSite";

type Props = {
  params: Promise<{ slug: string[] }>;
};

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
  const page = findRenderedPage(path);

  if (page) {
    return metadataFromHtml(readRenderedHtml(page), "DESTROY");
  }

  const customPage = findCustomPage(path);

  if (customPage) {
    return metadataFromCustomPage(customPage);
  }

  return metadataFromHtml("", "DESTROY");
}

export default async function RenderedContentPage({ params }: Props) {
  const path = (await params).slug.join("/");
  const page = findRenderedPage(path);

  if (page) {
    return <div dangerouslySetInnerHTML={{ __html: readRenderedHtml(page) }} />;
  }

  const customPage = findCustomPage(path);

  if (customPage) {
    return <CustomContentPage page={customPage} />;
  }

  notFound();
}
