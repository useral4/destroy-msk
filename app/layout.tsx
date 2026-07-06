import type { Metadata } from "next";

const siteUrl = "https://destroy-msk.ru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Демонтажные услуги под ключ Москва и Московская область - DESTROY",
  description: "Профессиональные демонтажные услуги любой сложности. Быстро, безопасно и недорого.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
