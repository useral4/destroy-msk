import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://destroy-msk.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Демонтажные услуги под ключ в Москве - DESTROY",
    template: "%s - DESTROY",
  },
  description:
    "Демонтаж квартир, домов, стен, перегородок, полов и конструкций в Москве и Московской области. Бесплатный расчет, вывоз мусора, работа под ключ.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "DESTROY",
    title: "Демонтажные услуги под ключ в Москве - DESTROY",
    description:
      "Профессиональный демонтаж любой сложности: квартиры, дома, стены, полы, здания и вывоз строительного мусора.",
    images: [{ url: "/images/hero.webp", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
