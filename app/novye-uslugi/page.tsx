import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги DESTROY",
  alternates: {
    canonical: "/uslugi/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RemovedNewServicesPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/uslugi/" />
      <script dangerouslySetInnerHTML={{ __html: "location.replace('/uslugi/');" }} />
      <main>
        <a href="/uslugi/">Перейти к услугам</a>
      </main>
    </>
  );
}
