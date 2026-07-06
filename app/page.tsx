"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Check, Hammer, MapPin, Phone } from "lucide-react";
import contentData from "../data/pages.json";

const homeContent = contentData.pages.find((page) => page.slug === "")?.content ?? "";

const services = [
  {
    title: "Демонтаж квартир под ключ",
    text: "Аккуратно разбираем отделку, перегородки, стяжку, сантехнику и инженерные элементы перед ремонтом.",
    href: "/demontazh-kvartir-pod-klyuch/",
  },
  {
    title: "Демонтаж домов и построек",
    text: "Сносим частные дома, дачи, гаражи, пристройки и хозяйственные строения с погрузкой и вывозом мусора.",
    href: "/demontazh-doma/",
  },
  {
    title: "Демонтаж стен и перегородок",
    text: "Работаем с кирпичом, бетоном, гипсолитом, пеноблоком и другими материалами с соблюдением безопасности.",
    href: "/demontazh-sten-i-peregorodok/",
  },
  {
    title: "Вывоз строительного мусора",
    text: "Подаем контейнеры, выполняем погрузку, вывозим отходы после демонтажа на официальные полигоны.",
    href: "/pogruzka-i-vyvoz-musora/",
  },
];

const prices = [
  ["Демонтаж перегородок", "от 250 ₽/м²"],
  ["Демонтаж стяжки", "от 350 ₽/м²"],
  ["Демонтаж плитки", "от 280 ₽/м²"],
  ["Демонтаж сантехкабины", "от 14 000 ₽"],
  ["Вывоз мусора", "от 5 500 ₽"],
];

const faq = [
  ["Можно ли рассчитать стоимость без выезда?", "Да. Для предварительной оценки достаточно фото, площади, адреса и краткого описания задачи."],
  ["Вы работаете с вывозом мусора?", "Да. Можем выполнить демонтаж, погрузку и вывоз строительного мусора в рамках одной заявки."],
  ["Работаете по Москве и области?", "Да. Основная зона работ - Москва и Московская область, выезд согласуем при расчете."],
  ["Можно ли выполнить срочный демонтаж?", "Да. При наличии свободной бригады можем выйти на объект в ближайшие дни."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero__bg">
          <Image src="/images/hero.webp" alt="Демонтажные работы в Москве" fill priority sizes="100vw" />
        </div>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <motion.p className="eyebrow" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.45 }}>
            Москва и Московская область
          </motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55, delay: 0.05 }}>
            Демонтажные услуги любой сложности без лишних переплат
          </motion.h1>
          <motion.p className="hero__lead" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55, delay: 0.12 }}>
            Демонтаж квартир, домов, стен, полов, конструкций и вывоз строительного мусора. Работаем под ключ: расчет, бригада, техника, уборка и вывоз.
          </motion.p>
          <motion.div className="hero__actions" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55, delay: 0.2 }}>
            <a className="button button--primary" href="#calc">
              Рассчитать стоимость <Calculator size={18} />
            </a>
            <a className="button button--ghost" href="tel:+74991106077">
              <Phone size={18} /> +7 (499) 110-60-77
            </a>
          </motion.div>
        </div>
      </section>

      <section className="ticker" aria-label="Преимущества">
        <span>Бесплатный расчет</span>
        <span>Вывоз мусора</span>
        <span>Работа под ключ</span>
        <span>Договор и смета</span>
        <span>Москва и область</span>
      </section>

      <section className="section">
        <div className="container section__head">
          <p className="eyebrow">Услуги</p>
          <h2>Работы по демонтажу независимо от сложности</h2>
        </div>
        <div className="container service-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Hammer className="service-card__icon" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href={service.href}>
                Подробнее <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <p className="eyebrow">Подход</p>
            <h2>Демонтажные работы в Москве и Московской области</h2>
            <p>
              Перед началом работ оцениваем конструкцию, доступ к объекту, объем мусора, ограничения по шуму и сроки. После этого готовим понятную смету и подбираем бригаду, инструмент и контейнер.
            </p>
            <ul className="check-list">
              <li><Check size={18} />Защищаем общие зоны и аккуратно выносим мусор</li>
              <li><Check size={18} />Работаем в квартирах, домах, офисах и коммерческих помещениях</li>
              <li><Check size={18} />Фиксируем стоимость до начала работ</li>
            </ul>
          </motion.div>
          <motion.div className="image-card" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <Image src="/images/worker.webp" alt="Специалист по демонтажу DESTROY" width={720} height={560} />
          </motion.div>
        </div>
      </section>

      <section className="section" id="calc">
        <div className="container calc">
          <div>
            <p className="eyebrow">Калькулятор</p>
            <h2>Узнайте стоимость демонтажа онлайн за 2 минуты</h2>
            <p>Опишите объект, и менеджер подготовит предварительный расчет. Точная цена зависит от материала, площади, этажа, доступа и вывоза мусора.</p>
          </div>
          <form className="calc__form">
            <input aria-label="Имя" placeholder="Ваше имя" />
            <input aria-label="Телефон" placeholder="+7 (___) ___-__-__" />
            <select aria-label="Тип работ" defaultValue="">
              <option value="" disabled>Тип работ</option>
              <option>Демонтаж квартиры</option>
              <option>Демонтаж дома</option>
              <option>Демонтаж стен</option>
              <option>Вывоз мусора</option>
            </select>
            <textarea aria-label="Комментарий" placeholder="Адрес, площадь, что нужно демонтировать" />
            <button type="button">Получить расчет</button>
          </form>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container section__head">
          <p className="eyebrow">Цены</p>
          <h2>Средняя стоимость демонтажных работ за м² в Москве</h2>
        </div>
        <div className="container price-list">
          {prices.map(([name, value]) => (
            <div className="price-row" key={name}>
              <span>{name}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container process">
          {["Заявка и консультация", "Осмотр или расчет по фото", "Смета и договор", "Демонтаж и вывоз"].map((step, index) => (
            <div className="process__item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <p>Согласуем детали, фиксируем сроки и выполняем работы без лишних задержек.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container section__head">
          <p className="eyebrow">Портфолио</p>
          <h2>Примеры выполненных работ</h2>
        </div>
        <div className="container portfolio">
          {["project1.jpg", "project2.jpg", "project3.jpg"].map((img, index) => (
            <div className="portfolio__item" key={img}>
              <Image src={`/images/${img}`} alt={`Работа DESTROY ${index + 1}`} width={560} height={420} />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container faq">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Часто задаваемые вопросы наших клиентов</h2>
          </div>
          <div className="faq__list">
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {homeContent ? (
        <section className="section section--muted">
          <article className="container wp-content wp-content--home" dangerouslySetInnerHTML={{ __html: homeContent }} />
        </section>
      ) : null}

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" href="/">
        <Image src="/images/logo.png" alt="DESTROY" width={153} height={48} priority />
      </Link>
      <nav className="header__nav">
        <Link href="/demontazh-kvartir-pod-klyuch/">Услуги</Link>
        <Link href="/prajs-list/">Цены</Link>
        <Link href="/portfolio-rabot/">Портфолио</Link>
        <Link href="/o-kompanii/">О компании</Link>
        <Link href="/contakts/">Контакты</Link>
      </nav>
      <a className="header__phone" href="tel:+74991106077">
        <Phone size={17} /> +7 (499) 110-60-77
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Image src="/images/logo-white.png" alt="DESTROY" width={153} height={48} />
          <p>Демонтажные услуги под ключ в Москве и Московской области.</p>
        </div>
        <div>
          <strong>Услуги</strong>
          <Link href="/demontazh-doma/">Демонтаж домов</Link>
          <Link href="/demontazh-sten-i-peregorodok/">Демонтаж стен</Link>
          <Link href="/pogruzka-i-vyvoz-musora/">Вывоз мусора</Link>
        </div>
        <div>
          <strong>Контакты</strong>
          <a href="tel:+74991106077">+7 (499) 110-60-77</a>
          <span><MapPin size={16} /> Москва и область</span>
        </div>
      </div>
    </footer>
  );
}
