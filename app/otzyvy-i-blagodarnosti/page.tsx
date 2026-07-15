import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы и благодарности - DESTROY",
  description: "Отзывы клиентов и благодарственные письма заказчиков DESTROY.",
  alternates: { canonical: "/blagodarnosti/" },
  robots: { index: false, follow: true },
};

export default function ReviewsRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/blagodarnosti/" />
      <script dangerouslySetInnerHTML={{ __html: "location.replace('/blagodarnosti/');" }} />
      <main>
        <a href="/blagodarnosti/">Перейти к отзывам и благодарностям</a>
      </main>
    </>
  );
}
