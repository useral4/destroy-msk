import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import contentData from "../../data/pages.json";

const base = "https://destroy-msk.ru";

type PageRecord = {
  id: number;
  type: string;
  slug: string;
  title: string;
  description: string;
  canonical: string;
  date: string | null;
  featured: string | null;
  content: string;
};

const pages = (contentData.pages as PageRecord[]).filter((page) => page.slug);

type Props = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPage((await params).slug);
  const title = page?.title ?? "DESTROY";
  const description = page?.description ?? "Демонтажные услуги DESTROY в Москве и Московской области.";
  const canonical = page?.canonical?.replace("https://destroy-msk.ru", base) ?? `${base}/${(await params).slug.join("/")}/`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: [{ url: page?.featured ?? "/images/hero.webp" }],
    },
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    return (
      <main>
        <InnerHeader />
        <section className="section">
          <div className="container text-section">
            <h1>Страница не найдена</h1>
            <p>Такой страницы нет в выгрузке оригинального сайта.</p>
            <Link className="button button--primary" href="/">На главную</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <InnerHeader />
      <section className="inner-hero">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow">{page.type === "post" ? "Портфолио и статьи" : "Услуги DESTROY"}</p>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="/#calc">
                Рассчитать стоимость <ArrowRight size={18} />
              </a>
              <a className="button button--ghost" href="tel:+74991106077">
                <Phone size={18} /> Позвонить
              </a>
            </div>
          </div>
          <div className="inner-hero__image">
            <Image
              src={page.featured ?? "/images/hero.webp"}
              alt={page.title}
              width={820}
              height={600}
              priority
              unoptimized={Boolean(page.featured)}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <article className="container wp-content" dangerouslySetInnerHTML={{ __html: page.content }} />
      </section>
    </main>
  );
}

function InnerHeader() {
  return (
    <header className="inner-header">
      <Link href="/" className="inner-header__logo">
        <Image src="/images/logo-white.png" alt="DESTROY" width={153} height={48} />
      </Link>
      <nav>
        <Link href="/">Главная</Link>
        <Link href="/prajs-list/">Цены</Link>
        <Link href="/portfolio-rabot/">Портфолио</Link>
        <Link href="/o-kompanii/">О компании</Link>
        <Link href="/contakts/">Контакты</Link>
      </nav>
      <a href="tel:+74991106077">+7 (499) 110-60-77</a>
    </header>
  );
}

function getPage(slug: string[]) {
  const path = slug.join("/");
  return pages.find((page) => page.slug === path);
}
