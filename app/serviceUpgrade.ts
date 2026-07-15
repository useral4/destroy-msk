import { existsSync } from "node:fs";
import { join } from "node:path";

type ServiceFaq = {
  q: string;
  a: string;
};

type ServiceCase = {
  title: string;
  meta: string;
  text: string;
  href: string;
  image: string;
};

type ServiceGroup = {
  points: string[];
  gallery: string[];
  cases: ServiceCase[];
  faq: ServiceFaq[];
};

export type ServiceUpgradeInput = {
  slug: string;
  title: string;
  description: string;
  points?: string[];
  gallery?: string[];
  faq?: ServiceFaq[];
};

const universalGallery = [
  "/wp-content/uploads/2025/10/22_1.jpeg.webp",
  "/wp-content/uploads/2025/10/24_10.jpeg.webp",
  "/wp-content/uploads/2025/10/25_3.jpeg.webp",
  "/wp-content/uploads/2025/10/25_6.jpeg.webp",
  "/wp-content/uploads/2026/01/photo_4_2026-01-30_13-56-36.jpg",
  "/wp-content/uploads/2026/01/photo_10_2026-01-30_13-56-49.jpg",
];

const commonFaq: ServiceFaq[] = [
  {
    q: "Можно ли предварительно рассчитать стоимость по фото?",
    a: "Да. Пришлите фото, площадь и адрес объекта. Менеджер назовет ориентир, а точную смету подготовит после бесплатного осмотра.",
  },
  {
    q: "Вы работаете по договору?",
    a: "Да. В договоре фиксируем состав работ, стоимость, сроки и порядок сдачи объекта.",
  },
  {
    q: "Что происходит со строительным мусором?",
    a: "Команда собирает и упаковывает отходы, выносит их, организует контейнер и передачу мусора на разрешенную площадку.",
  },
  {
    q: "Можно ли проводить работы в жилом доме?",
    a: "Да. Согласуем график шумных работ, защищаем общие зоны и соблюдаем требования управляющей компании.",
  },
  {
    q: "Кто предоставляет инструмент и технику?",
    a: "Все необходимое привозим с собой. Состав оборудования зависит от материала, объема и условий доступа на объект.",
  },
];

const groups: Record<string, ServiceGroup> = {
  apartments: {
    points: [
      "Полный демонтаж отделки, перегородок, полов и потолков",
      "Защита лифта, лестничной площадки и сохраняемых элементов",
      "Разбор сантехники, встроенной мебели и инженерных сетей",
      "Погрузка и вывоз строительного мусора",
      "Фото- и видеоотчеты по ходу работ",
      "Финальная уборка и сдача подготовленного помещения",
    ],
    gallery: [
      "/wp-content/uploads/2025/10/vyvoz-staroj-mebeli.jpg.webp",
      "/wp-content/uploads/2025/10/whatsapp-image-2024-04-04-at-6.59-6.jpg",
      "/wp-content/uploads/2025/10/22_21.jpeg.webp",
      "/wp-content/uploads/2025/10/22_12.jpeg.webp",
      "/wp-content/uploads/2025/10/24_9.jpeg.webp",
      "/wp-content/uploads/2025/10/25_6.jpeg.webp",
    ],
    cases: [
      {
        title: "Квартира 44 м²",
        meta: "Комплексный демонтаж",
        text: "Разобрали отделку и перегородки, собрали и вывезли строительный мусор.",
        href: "/kompleksnyj-demontazh-kvartiry-44m2/",
        image: "/wp-content/uploads/2025/10/22_1.jpeg.webp",
      },
      {
        title: "Квартира 75 м²",
        meta: "Под ключ с вывозом",
        text: "Выполнили полный цикл работ и подготовили помещение к следующему этапу ремонта.",
        href: "/kompleksnyj-demontazh-kvartiry-75m2-s-vyvozom-musora/",
        image: "/wp-content/uploads/2025/10/24_10.jpeg.webp",
      },
      {
        title: "Квартира 90 м²",
        meta: "Демонтаж и логистика",
        text: "Организовали поэтапный разбор, вынос и контейнерный вывоз отходов.",
        href: "/kompleksnyj-demontazh-kvartiry-90m2-s-vyvozom-musora/",
        image: "/wp-content/uploads/2025/10/25_3.jpeg.webp",
      },
    ],
    faq: commonFaq,
  },
  interior: {
    points: [
      "Подбор инструмента под материал и толщину конструкции",
      "Локальный или полный демонтаж без повреждения сохраняемых зон",
      "Пылезащита дверных проемов, мебели и общих зон",
      "Контроль коммуникаций и скрытой проводки",
      "Сбор, фасовка и вынос тяжелого строительного боя",
      "Подготовка основания под последующие работы",
    ],
    gallery: [
      "/wp-content/uploads/2026/01/photo_10_2026-01-30_13-57-41.jpg",
      "/wp-content/uploads/2025/11/photo_2025-09-30_21-56-07.jpg",
      "/wp-content/uploads/2025/10/demontazh-betonnoj-styazhki-30sm_4.jpeg.webp",
      "/wp-content/uploads/2025/10/demontazh-shtukaturki-180m2-_3.jpeg.webp",
      "/wp-content/uploads/2025/10/25_6-2.jpeg.webp",
      "/wp-content/uploads/2025/10/24_12-2.jpeg.webp",
    ],
    cases: [
      {
        title: "Штукатурка 180 м²",
        meta: "Стены и потолок",
        text: "Сняли старое покрытие, упаковали бой и организовали вывоз с объекта.",
        href: "/demontazh-shtukaturki-180m2-s-vyvozom-musora/",
        image: "/wp-content/uploads/2025/10/demontazh-shtukaturki-180m2-_3.jpeg.webp",
      },
      {
        title: "Стяжка 88 м²",
        meta: "С вывозом мусора",
        text: "Разобрали основание, вынесли тяжелый бой и подготовили перекрытие.",
        href: "/demontazh-styazhki-88m2-s-vyvozom-musora/",
        image: "/wp-content/uploads/2025/11/photo_2025-09-30_21-56-07.jpg",
      },
      {
        title: "Перегородки 100 м²",
        meta: "Аккуратный демонтаж",
        text: "Сохранили необходимые конструкции и вывезли образовавшийся мусор.",
        href: "/demontazh-peregorodok-100m2-s-vyvozom-musora/",
        image: "/wp-content/uploads/2024/07/omsk-demontazh-sten-peregorodok-podokonnikov_111707.jpeg",
      },
    ],
    faq: commonFaq,
  },
  outdoor: {
    points: [
      "Осмотр подъездных путей и подбор подходящей техники",
      "Ручной или механизированный разбор конструкций",
      "Сортировка металла, древесины и строительного боя",
      "Погрузка отходов мини-погрузчиком или экскаватором",
      "Контейнерный вывоз и законная утилизация",
      "Планировка и уборка территории после завершения",
    ],
    gallery: [
      "/wp-content/uploads/2025/10/demontazh-bani-65-s-vyvozom-musora_1.jpeg.webp",
      "/wp-content/uploads/2025/10/demontazh-bani-65-s-vyvozom-musora_2.jpeg.webp",
      "/wp-content/uploads/2025/10/demontazh-bani-65-s-vyvozom-musora_3.jpeg.webp",
      "/wp-content/uploads/2025/10/demontazh-letnego-domika-64_1.jpeg.webp",
      "/wp-content/uploads/2025/10/demontazh-letnego-domika-64_3.jpeg.webp",
      "/wp-content/uploads/2025/10/28_16.jpeg.webp",
    ],
    cases: [
      {
        title: "Баня 65 м²",
        meta: "Разбор с вывозом",
        text: "Поэтапно разобрали строение, погрузили материалы и очистили участок.",
        href: "/demontazh-bani-65-s-vyvozom-musora/",
        image: "/wp-content/uploads/2025/10/demontazh-bani-65-s-vyvozom-musora_1.jpeg.webp",
      },
      {
        title: "Каркасный дом 40 м²",
        meta: "Демонтаж под ключ",
        text: "Организовали разбор дома и вывоз строительных отходов с участка.",
        href: "/demontazh-karkasnogo-doma-40m2-s-vyvozom-musora/",
        image: "/wp-content/uploads/2025/10/demontazh-letnego-domika-64_1.jpeg.webp",
      },
      {
        title: "Кирпичный дом 225 м²",
        meta: "Механизированный демонтаж",
        text: "Привлекли технику, разделили материалы и подготовили территорию.",
        href: "/demontazh-kirpichnogo-doma-225m2/",
        image: "/wp-content/uploads/2026/01/photo_4_2026-01-30_13-56-36.jpg",
      },
    ],
    faq: commonFaq,
  },
  structures: {
    points: [
      "Инженерный осмотр и план производства работ",
      "Подбор техники и последовательности демонтажа",
      "Ограждение опасных зон и контроль безопасности",
      "Поэтапная разборка несущих и ограждающих конструкций",
      "Сортировка и погрузка демонтированных материалов",
      "Вывоз отходов и подготовка площадки",
    ],
    gallery: universalGallery,
    cases: [
      {
        title: "Школа",
        meta: "Крупный объект",
        text: "Провели демонтажные работы по согласованному плану и графику.",
        href: "/nashi-obekty/demontazh-shkoly/",
        image: "/wp-content/uploads/2026/01/photo_4_2026-01-30_13-56-36.jpg",
      },
      {
        title: "ТЦ после пожара",
        meta: "Аварийные конструкции",
        text: "Удалили поврежденные элементы и подготовили объект к восстановлению.",
        href: "/nashi-obekty/demontazh-tc-posle-pozhara/",
        image: "/wp-content/uploads/2025/10/22_11.jpeg.webp",
      },
      {
        title: "Ресторан 650 м²",
        meta: "Коммерческое помещение",
        text: "Выполнили комплексный демонтаж с учетом ограничений действующего здания.",
        href: "/demontazh-restorana-650m2-pod-klyuch/",
        image: "/wp-content/uploads/2026/01/photo_10_2026-01-30_13-56-49.jpg",
      },
    ],
    faq: commonFaq,
  },
  waste: {
    points: [
      "Предварительная оценка объема по фото или на объекте",
      "Разбор крупногабаритной мебели и конструкций",
      "Фасовка, вынос и защита общих зон",
      "Подача контейнера подходящего объема",
      "Погрузка вручную или с помощью техники",
      "Передача отходов на разрешенную площадку",
    ],
    gallery: [
      "/wp-content/uploads/2025/09/vyvoz-staroj-mebeli-1024x768.jpg.webp",
      "/wp-content/uploads/2025/10/18_8.jpeg.webp",
      "/wp-content/uploads/2025/10/11_8.jpeg.webp",
      "/wp-content/uploads/2025/10/9_9.jpeg.webp",
      "/wp-content/uploads/2025/10/22_21.jpeg.webp",
      "/wp-content/uploads/2025/10/25_6.jpeg.webp",
    ],
    cases: [
      {
        title: "Квартира 90 м²",
        meta: "Вывоз после демонтажа",
        text: "Организовали вынос, погрузку и несколько рейсов без хранения мусора во дворе.",
        href: "/demontazh-kvartiry-90m2-s-vyvozom-musora/",
        image: "/wp-content/uploads/2025/10/22_21.jpeg.webp",
      },
      {
        title: "Старая мебель",
        meta: "Разбор и утилизация",
        text: "Разобрали крупные предметы, вынесли с этажа и погрузили в транспорт.",
        href: "/demontazh-mebeli-s-utilizacziej/",
        image: "/wp-content/uploads/2025/09/vyvoz-staroj-mebeli-1024x768.jpg.webp",
      },
      {
        title: "Контейнер 20 м³",
        meta: "Крупный объем",
        text: "Подобрали контейнер под объем и организовали вывоз по согласованному графику.",
        href: "/kontejner-dlya-musora-20-kubov/",
        image: "/wp-content/uploads/2025/10/18_8.jpeg.webp",
      },
    ],
    faq: commonFaq,
  },
  trees: {
    points: [
      "Оценка наклона, состояния ствола и опасной зоны",
      "Спил аварийных деревьев целиком или частями",
      "Работа рядом с домом, забором и коммуникациями",
      "Распил древесины и сбор веток",
      "Корчевание или дробление пней",
      "Вывоз порубочных остатков и уборка участка",
    ],
    gallery: [
      "/media/tree-removal-poster.jpg",
      "/wp-content/uploads/2025/10/28_16.jpeg.webp",
      "/wp-content/uploads/2025/10/28_12-1.jpeg.webp",
      "/wp-content/uploads/2025/10/25_8.jpeg.webp",
      "/wp-content/uploads/2025/10/24_10.jpeg.webp",
      "/wp-content/uploads/2025/10/18_7.jpeg.webp",
    ],
    cases: [
      {
        title: "Аварийное дерево",
        meta: "Пример расчета",
        text: "Стоимость зависит от высоты, наклона, доступа автовышки и наличия строений рядом.",
        href: "/calc/",
        image: "/media/tree-removal-poster.jpg",
      },
      {
        title: "Расчистка участка",
        meta: "Комплекс работ",
        text: "Спил, распил, корчевание и вывоз можно объединить в одну смету.",
        href: "/raschistka-uchastkov/",
        image: "/wp-content/uploads/2025/10/28_16.jpeg.webp",
      },
      {
        title: "Корчевание пней",
        meta: "Подготовка площадки",
        text: "Метод выбираем по диаметру пня, подъезду техники и будущему назначению участка.",
        href: "/calc/",
        image: "/wp-content/uploads/2025/10/28_12-1.jpeg.webp",
      },
    ],
    faq: [
      {
        q: "Можно ли спилить дерево рядом с домом или проводами?",
        a: "Да, после осмотра. Дерево разбирают частями с контролируемым спуском фрагментов; при необходимости привлекают автовышку.",
      },
      {
        q: "Вы корчуете пни после спила?",
        a: "Да. Пень можно выкопать техникой, удалить вручную или раздробить в зависимости от доступа и дальнейших планов на участок.",
      },
      ...commonFaq.slice(0, 3),
    ],
  },
};

const serviceGroupBySlug: Record<string, keyof typeof groups> = {
  "demontazh-kvartir-pod-klyuch": "apartments",
  "demontazh-kvartir-i-kommercheskih-pomeshhenij": "apartments",
  "demontazh-stalinok-i-hrushhevok": "apartments",
  "demontazh-sten-i-peregorodok": "interior",
  "demontazh-pola-i-styazhki": "interior",
  "demontazh-santehniki": "interior",
  "demontazh-shtukaturki": "interior",
  "demontazh-styazhki": "interior",
  "demontazh-trotuarnoj-plitki-bordyurov": "interior",
  "demontazh-doma": "outdoor",
  "demontazh-bassejnov": "outdoor",
  "demontazh-zabora": "outdoor",
  "razbor-vethih-stroenij": "outdoor",
  "raschistka-uchastkov": "outdoor",
  "demontazh-zdanij-i-sooruzhenij": "structures",
  "demontazh-krupnyh-konstrukczij": "structures",
  "snos-zdanij": "structures",
  "pogruzka-i-vyvoz-musora": "waste",
  "vyvoz-i-utilizacziya-mebeli": "waste",
  "kontejner-dlya-musora-8-kubov": "waste",
  "kontejner-dlya-musora-20-kubov": "waste",
  "kontejner-dlya-musora-27-kubov": "waste",
  "spil-i-udalenie-derevev": "trees",
};

export const renderedServiceSlugs = new Set(Object.keys(serviceGroupBySlug));

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

function normalizeImage(src: string) {
  return src
    .replace(/^https?:\/\/destroy-msk\.ru/i, "")
    .replace(/^https?:\/\/destroy-msk-1\.onrender\.com/i, "");
}

function extractImages(body: string) {
  const images: string[] = [];
  const imageTag = /<img\b[^>]*>/gi;

  for (const match of body.matchAll(imageTag)) {
    const tag = match[0];
    const src = tag.match(/\bdata-src=["']([^"']+)["']/i)?.[1] || tag.match(/\bsrc=["']([^"']+)["']/i)?.[1] || "";
    const normalized = normalizeImage(src);

    const localPath = normalized.split(/[?#]/, 1)[0];

    if (
      normalized &&
      localPath.startsWith("/") &&
      existsSync(join(process.cwd(), "public", localPath.slice(1))) &&
      !normalized.startsWith("data:") &&
      !/logo|max\.svg|whatsapp\.svg|vector-3\.svg|a-1-|paper|favicon/i.test(normalized)
    ) {
      images.push(normalized);
    }
  }

  return unique(images);
}

function renderGallery(images: string[], title: string) {
  return `<div class="destroy-upgrade-gallery">${images
    .slice(0, 6)
    .map(
      (src) =>
        `<figure class="destroy-upgrade-gallery__item"><img src="${escapeHtml(src)}" alt="${escapeHtml(title)}" loading="lazy" decoding="async"></figure>`,
    )
    .join("")}</div>`;
}

function renderCases(cases: ServiceCase[]) {
  return `<div class="destroy-upgrade-cases">${cases
    .map(
      (item) => `<article class="destroy-upgrade-case">
        <a href="${escapeHtml(item.href)}" aria-label="${escapeHtml(item.title)}"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async"></a>
        <div><span>${escapeHtml(item.meta)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><a href="${escapeHtml(item.href)}">Смотреть объект</a></div>
      </article>`,
    )
    .join("")}</div>`;
}

function renderFaq(items: ServiceFaq[]) {
  return `<div class="destroy-upgrade-faq">${items
    .slice(0, 6)
    .map((item) => `<details><summary>${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p></details>`)
    .join("")}</div>`;
}

export function renderServiceUpgrade(input: ServiceUpgradeInput) {
  const groupKey = serviceGroupBySlug[input.slug] || "interior";
  const group = groups[groupKey];
  const points = unique([...(input.points || []), ...group.points]).slice(0, 8);
  const gallery = unique([...(input.gallery || []), ...group.gallery, ...universalGallery]).slice(0, 8);
  const faq = [...(input.faq || []), ...group.faq].filter(
    (item, index, items) => items.findIndex((candidate) => candidate.q === item.q) === index,
  );
  const videoMedia =
    input.slug === "spil-i-udalenie-derevev"
      ? { video: "/media/tree-removal-process.mp4", poster: "/media/tree-removal-poster.jpg" }
      : input.slug === "razbor-vethih-stroenij"
        ? { video: "/media/demolition-process.mp4", poster: "/media/demolition-process-poster.jpg" }
        : null;
  const videoBlock = videoMedia
    ? `<div class="destroy-upgrade-video">
        <video controls playsinline preload="metadata" poster="${videoMedia.poster}"><source src="${videoMedia.video}" type="video/mp4">Ваш браузер не поддерживает видео.</video>
        <div><span>Видео процесса</span><h3>${escapeHtml(input.title)}</h3><p>Ролик показывает характер работ и используется как иллюстрация. Видео с объектов DESTROY по вашей задаче менеджер отправит вместе с примерами смет.</p><a href="#заявка">Запросить видео похожего объекта</a></div>
      </div>`
    : "";

  return `<section class="destroy-service-upgrade" aria-label="Информация об услуге">
    <section class="destroy-upgrade-section destroy-upgrade-overview">
      <div class="destroy-upgrade-heading"><h2>Что входит в работу</h2><p>${escapeHtml(input.description)}</p></div>
      <ul class="destroy-upgrade-points">${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    </section>

    <section class="destroy-upgrade-section destroy-upgrade-media">
      <div class="destroy-upgrade-heading"><span>${videoMedia ? "Фото и видео" : "Фотографии работ"}</span><h2>Процесс и результат</h2><p>${videoMedia ? "Фотографии из портфолио DESTROY и тематическое видео помогают заранее оценить объем и организацию работ." : "Фотографии из портфолио DESTROY показывают реальные объекты, характер демонтажа и результат выполненных работ."}</p></div>
      ${renderGallery(gallery, input.title)}
      ${videoBlock}
    </section>

    <section class="destroy-upgrade-section">
      <div class="destroy-upgrade-heading"><span>Портфолио</span><h2>Реальные выполненные объекты</h2><p>Показываем не только красивый результат, но и площадь, состав работ, логистику и вывоз отходов.</p></div>
      ${renderCases(group.cases)}
    </section>

    <section class="destroy-upgrade-section">
      <div class="destroy-upgrade-heading"><span>Прозрачный процесс</span><h2>Как проходит работа</h2></div>
      <div class="destroy-upgrade-steps">
        <article><span>01</span><h3>Заявка</h3><p>Уточняем задачу, адрес и удобный способ связи.</p></article>
        <article><span>02</span><h3>Осмотр</h3><p>Оцениваем объем, доступ, технику и контейнер.</p></article>
        <article><span>03</span><h3>Смета</h3><p>Фиксируем стоимость, сроки и состав работ.</p></article>
        <article><span>04</span><h3>Работы</h3><p>Выполняем демонтаж и отправляем отчеты.</p></article>
        <article><span>05</span><h3>Сдача</h3><p>Убираем объект, вывозим отходы и сдаем результат.</p></article>
      </div>
    </section>

    <section class="destroy-upgrade-disposal">
      <div><span>Вывоз и утилизация</span><h2>После демонтажа не остается гора мусора</h2></div>
      <p>Заранее рассчитываем объем отходов, подаем контейнер 8, 20 или 27 м³, организуем погрузку и передаем мусор на разрешенную площадку. Эта часть работ может быть сразу включена в общую смету.</p>
      <a href="/pogruzka-i-vyvoz-musora/">Подробнее о вывозе</a>
    </section>

    <section class="destroy-upgrade-section destroy-upgrade-faq-section">
      <div class="destroy-upgrade-heading"><span>FAQ</span><h2>Частые вопросы</h2></div>
      ${renderFaq(faq)}
    </section>

    <section class="destroy-upgrade-request">
      <div><span>Бесплатный расчет</span><h2>Пришлите фото объекта и получите смету</h2><p>Менеджер уточнит детали и предложит оптимальный состав работ, технику и схему вывоза.</p></div>
      <div><a href="#заявка">Оставить заявку</a><a href="tel:+79160067777">+7 (916) 006-77-77</a></div>
    </section>
  </section>`;
}

function extractTitle(body: string) {
  const value = body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "Демонтажные работы";
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export function renderRenderedServiceUpgrade(slug: string, body: string) {
  if (!renderedServiceSlugs.has(slug)) return "";

  const title = extractTitle(body);
  const description =
    "Организуем работы под ключ: до начала согласуем точный объем, сроки, стоимость, порядок вывоза и требования к объекту.";

  return renderServiceUpgrade({
    slug,
    title,
    description,
    gallery: extractImages(body),
  });
}

export function renderRenderedServiceHero(slug: string, body: string) {
  if (!renderedServiceSlugs.has(slug)) return "";

  const title = extractTitle(body);
  const group = groups[serviceGroupBySlug[slug] || "interior"];
  const image = unique([...extractImages(body), ...group.gallery, ...universalGallery])[0];

  return `<section class="destroy-rendered-service-hero">
    <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" loading="eager" fetchpriority="high" decoding="async">
    <div class="destroy-rendered-service-hero__shade"></div>
    <div class="destroy-rendered-service-hero__content">
      <h1>${escapeHtml(title)}</h1>
      <p>Профессиональный демонтаж с фиксированной сметой, фотоотчетами, погрузкой и вывозом строительного мусора.</p>
      <div><a href="#заявка">Оставить заявку</a><a href="/calc/">Рассчитать стоимость</a></div>
    </div>
  </section>`;
}

export function renderReviewsUpgrade() {
  const letters = [
    "/wp-content/uploads/2025/11/blagodarstvennoe-pismo-2_page-0001-3-1-724x1024.jpg",
    "/wp-content/uploads/2025/11/blagodarstvennoe-rustehelektro_page-0001-1-670x1024.jpg",
    "/wp-content/uploads/2025/11/demontazh_page-0001-1-724x1024.jpg",
  ];

  return `<section class="destroy-service-upgrade destroy-reviews-upgrade">
    <section class="destroy-upgrade-section destroy-review-intro">
      <div class="destroy-upgrade-heading"><span>Проверенный опыт</span><h1>Отзывы и благодарности</h1><p>Письма от организаций и отзывы частных клиентов подтверждают сроки, качество работ и аккуратную сдачу объектов.</p></div>
      <div class="destroy-client-names" aria-label="Заказчики"><span>YAKIMAL</span><span>РусТехЭлектро</span><span>НМИЦ им. А. Н. Рыжих</span></div>
    </section>
    <section class="destroy-upgrade-section">
      <div class="destroy-upgrade-heading"><span>Отзывы клиентов</span><h2>Что отмечают заказчики</h2></div>
      <div class="destroy-review-cards">
        <blockquote><p>Работы выполнили в согласованный срок, после демонтажа все убрали и организовали вывоз.</p><footer>Частный заказчик, Москва</footer></blockquote>
        <blockquote><p>Оперативно решили вопросы на объекте, команда работала аккуратно и профессионально.</p><footer>ООО «Якимал»</footer></blockquote>
        <blockquote><p>Обязательства выполнены своевременно, без нарушения договоренностей.</p><footer>НМИЦ им. А. Н. Рыжих</footer></blockquote>
      </div>
    </section>
    <section class="destroy-upgrade-section">
      <div class="destroy-upgrade-heading"><span>Документы</span><h2>Благодарственные письма</h2></div>
      <div class="destroy-review-letters">${letters.map((src) => `<a href="${src}" data-fancybox="reviews"><img src="${src}" alt="Благодарственное письмо" loading="lazy" decoding="async"></a>`).join("")}</div>
    </section>
    <section class="destroy-upgrade-request">
      <div><span>Обсудить объект</span><h2>Получите расчет и примеры похожих работ</h2><p>Пришлем релевантные фото, видео и сметы по вашему типу объекта.</p></div>
      <div><a href="#заявка">Оставить заявку</a><a href="tel:+79160067777">+7 (916) 006-77-77</a></div>
    </section>
  </section>`;
}

export function renderServiceUpgradeStyles() {
  return `<style id="destroy-service-upgrade-css">
    .destroy-service-upgrade{width:min(1180px,calc(100% - 100px));max-width:1180px;margin:0 auto;padding:28px 0 70px;color:#111;font-family:Manrope,Arial,sans-serif;box-sizing:border-box}
    .elementor .destroy-service-upgrade{width:100%;max-width:1180px}
    .destroy-service-upgrade *{box-sizing:border-box}
    .destroy-unified-service{display:block;background:#fff;padding:24px 0 0}
    .destroy-rendered-service-hero{position:relative;width:min(1180px,calc(100% - 100px));min-height:430px;margin:0 auto 42px;display:flex;align-items:flex-end;overflow:hidden;border-radius:20px;background:#211b1b;color:#fff;isolation:isolate}
    .destroy-rendered-service-hero>img{position:absolute;inset:0;z-index:0;display:block;width:100%;height:100%;object-fit:cover}
    .destroy-rendered-service-hero__shade{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(0,0,0,.84),rgba(0,0,0,.48) 58%,rgba(0,0,0,.18)),linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.7))}
    .destroy-rendered-service-hero__content{position:relative;z-index:2;max-width:790px;padding:52px 50px;font-family:Manrope,Arial,sans-serif}
    .destroy-rendered-service-hero__content>span{display:block;margin:0 0 12px;color:#e11c1c;font:800 12px/1.2 Manrope,Arial,sans-serif;text-transform:uppercase}
    .destroy-rendered-service-hero h1{max-width:760px;margin:0 0 18px;color:#fff!important;font:700 32px/1.25 Merriweather,Georgia,serif!important;text-transform:uppercase;letter-spacing:0}
    .destroy-rendered-service-hero p{max-width:700px;margin:0;color:rgba(255,255,255,.9)!important;font:500 16px/1.5 Manrope,Arial,sans-serif!important}
    .destroy-rendered-service-hero__content>div{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
    .destroy-rendered-service-hero a{display:inline-flex;min-height:46px;align-items:center;justify-content:center;padding:12px 22px;border-radius:8px;background:#c91515;color:#fff!important;font:800 13px/1.2 Manrope,Arial,sans-serif;text-decoration:none;text-transform:uppercase}
    .destroy-rendered-service-hero a:last-child{background:#fff;color:#111!important}
    .destroy-upgrade-section{padding:64px 0;border-top:1px solid #e8e8e8}
    .destroy-upgrade-heading{max-width:820px;margin:0 auto 30px;text-align:center}
    .destroy-upgrade-heading>span,.destroy-upgrade-video span,.destroy-upgrade-disposal span,.destroy-upgrade-request span{display:block;margin:0 0 10px;color:#c91515;font:800 12px/1.2 Manrope,Arial,sans-serif;text-transform:uppercase}
    .destroy-upgrade-heading h1,.destroy-upgrade-heading h2,.destroy-upgrade-disposal h2,.destroy-upgrade-request h2{margin:0 0 16px;color:#000;font:700 28px/1.25 Merriweather,Georgia,serif;text-transform:uppercase;letter-spacing:0}
    .destroy-upgrade-heading p,.destroy-upgrade-video p,.destroy-upgrade-disposal p,.destroy-upgrade-request p,.destroy-upgrade-case p,.destroy-upgrade-steps p,.destroy-upgrade-faq p{margin:0;color:#303030;font:500 16px/1.55 Manrope,Arial,sans-serif}
    .destroy-upgrade-overview{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:58px;align-items:start;border-top:0}
    .destroy-upgrade-overview .destroy-upgrade-heading{margin:0;text-align:left}
    .destroy-upgrade-points{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}
    .destroy-upgrade-points li{position:relative;display:flex;min-height:72px;align-items:center;padding:17px 18px 17px 48px;border:1px solid #e2e2e2;border-radius:8px;background:#fff;font:700 14px/1.4 Manrope,Arial,sans-serif}
    .destroy-upgrade-points li:before{content:"";position:absolute;left:18px;top:50%;width:17px;height:17px;border:1px solid #c91515;border-radius:50%;transform:translateY(-50%)}
    .destroy-upgrade-points li:after{content:"";position:absolute;left:23px;top:50%;width:7px;height:4px;border-left:2px solid #c91515;border-bottom:2px solid #c91515;transform:translateY(-65%) rotate(-45deg)}
    .destroy-upgrade-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .destroy-upgrade-gallery__item{aspect-ratio:4/3;margin:0;overflow:hidden;border-radius:8px;background:#eee}
    .elementor .destroy-upgrade-gallery__item>img,.destroy-upgrade-gallery__item>img{display:block!important;width:100%!important;height:100%!important;min-height:100%!important;object-fit:cover!important;object-position:center!important;transition:transform .35s ease}
    .destroy-upgrade-gallery__item:hover img{transform:scale(1.025)}
    .destroy-upgrade-video{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr);gap:36px;align-items:center;margin-top:32px;padding:30px;background:#f3f3f3;border-radius:8px}
    .destroy-upgrade-video video{display:block;width:100%;height:auto;aspect-ratio:16/9;border-radius:8px;background:#171717;object-fit:contain}
    .destroy-upgrade-video h3{margin:0 0 14px;color:#111;font:700 24px/1.25 Merriweather,Georgia,serif;text-transform:uppercase}
    .destroy-upgrade-video a,.destroy-upgrade-case a,.destroy-upgrade-disposal a{display:inline-flex;margin-top:20px;color:#c91515!important;font:800 13px/1.2 Manrope,Arial,sans-serif;text-decoration:none;text-transform:uppercase}
    .destroy-upgrade-cases{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
    .destroy-upgrade-case{overflow:hidden;border:1px solid #e4e4e4;border-radius:8px;background:#fff}
    .destroy-upgrade-case>a{display:block;margin:0}
    .elementor .destroy-upgrade-case>a>img,.destroy-upgrade-case>a>img{display:block!important;width:100%!important;height:240px!important;object-fit:cover!important;object-position:center!important}
    .destroy-upgrade-case>div{padding:22px}
    .destroy-upgrade-case span{display:block;margin-bottom:8px;color:#c91515;font:800 11px/1.2 Manrope,Arial,sans-serif;text-transform:uppercase}
    .destroy-upgrade-case h3{margin:0 0 10px;color:#111;font:700 20px/1.25 Merriweather,Georgia,serif;text-transform:uppercase}
    .destroy-upgrade-steps{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1px;background:#dfdfdf}
    .destroy-upgrade-steps article{min-height:220px;padding:22px;background:#fff}
    .destroy-upgrade-steps span{display:block;margin-bottom:28px;color:#c91515;font:800 26px/1 Manrope,Arial,sans-serif}
    .destroy-upgrade-steps h3{margin:0 0 10px;color:#111;font:800 16px/1.3 Manrope,Arial,sans-serif;text-transform:uppercase}
    .destroy-upgrade-disposal{display:grid;grid-template-columns:1fr 1.15fr auto;gap:36px;align-items:center;padding:38px 42px;border-radius:8px;background:#362d2d;color:#fff}
    .destroy-upgrade-disposal h2,.destroy-upgrade-disposal p{color:#fff}
    .destroy-upgrade-disposal a{align-items:center;justify-content:center;margin:0;border-radius:8px;background:#c91515;color:#fff!important;padding:15px 20px;text-align:center}
    .destroy-upgrade-faq{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
    .destroy-upgrade-faq details{padding:18px 20px;border:1px solid #e5e5e5;border-radius:8px;background:#fff}
    .destroy-upgrade-faq summary{cursor:pointer;color:#111;font:800 15px/1.4 Manrope,Arial,sans-serif}
    .destroy-upgrade-faq p{margin-top:12px;color:#505050}
    .destroy-upgrade-request{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;margin-top:24px;padding:38px 42px;border-radius:8px;background:#f1f1f1}
    .destroy-upgrade-request>div:last-child{display:grid;gap:10px;min-width:250px}
    .destroy-upgrade-request a{display:flex;min-height:48px;align-items:center;justify-content:center;border:1px solid #c91515;border-radius:8px;color:#c91515!important;font:800 13px/1.2 Manrope,Arial,sans-serif;text-align:center;text-decoration:none;text-transform:uppercase}
    .destroy-upgrade-request a:first-child{background:#c91515;color:#fff!important}
    .destroy-client-names{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:#ddd}
    .destroy-client-names span{display:flex;min-height:90px;align-items:center;justify-content:center;padding:18px;background:#f7f7f7;color:#222;font:800 18px/1.25 Manrope,Arial,sans-serif;text-align:center}
    .destroy-review-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
    .destroy-review-cards blockquote{margin:0;padding:26px;border:1px solid #e4e4e4;border-radius:8px;background:#fff}
    .destroy-review-cards blockquote:before{content:"“";display:block;height:35px;color:#c91515;font:700 54px/1 Georgia,serif}
    .destroy-review-cards footer{margin-top:18px;color:#111;font:800 13px/1.35 Manrope,Arial,sans-serif}
    .destroy-review-letters{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:start}
    .destroy-review-letters a{display:block;overflow:hidden;border:1px solid #ddd;border-radius:8px;background:#fff}
    .destroy-review-letters img{display:block;width:100%;height:480px;object-fit:cover;object-position:top}
    @media(max-width:1440px){
      .destroy-rendered-service-hero{width:min(1180px,calc(100% - 100px))}
    }
    @media(max-width:1200px){
      .destroy-rendered-service-hero{width:calc(100% - 50px)}
    }
    @media(max-width:900px){
      .destroy-service-upgrade{width:calc(100% - 40px)}
      .destroy-rendered-service-hero{width:calc(100% - 40px);min-height:400px}
      .destroy-rendered-service-hero__content{padding:38px 28px}
      .destroy-rendered-service-hero h1{font-size:28px!important}
      .destroy-upgrade-section{padding:48px 0}
      .destroy-upgrade-overview,.destroy-upgrade-video,.destroy-upgrade-disposal,.destroy-upgrade-request{grid-template-columns:1fr}
      .destroy-upgrade-points,.destroy-upgrade-faq{grid-template-columns:1fr}
      .destroy-upgrade-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}
      .destroy-upgrade-cases,.destroy-client-names,.destroy-review-cards,.destroy-review-letters{grid-template-columns:1fr}
      .elementor .destroy-upgrade-case>a>img,.destroy-upgrade-case>a>img{height:260px!important}
      .destroy-upgrade-steps{grid-template-columns:1fr 1fr}
      .destroy-upgrade-disposal,.destroy-upgrade-request{padding:28px}
      .destroy-upgrade-request>div:last-child{min-width:0}
      .destroy-review-letters img{height:auto;max-height:560px;object-fit:contain}
    }
    @media(max-width:600px){
      .destroy-service-upgrade{width:calc(100% - 20px);padding-bottom:40px}
      .destroy-rendered-service-hero{width:calc(100% - 20px);min-height:390px;margin-top:10px;border-radius:18px}
      .destroy-rendered-service-hero__content{padding:30px 22px}
      .destroy-rendered-service-hero h1{font-size:27px!important;overflow-wrap:anywhere}
      .destroy-rendered-service-hero__content>div{display:grid}
      .destroy-upgrade-heading h1,.destroy-upgrade-heading h2,.destroy-upgrade-disposal h2,.destroy-upgrade-request h2{font-size:24px}
      .destroy-upgrade-gallery{grid-template-columns:1fr}
      .elementor .destroy-upgrade-case>a>img,.destroy-upgrade-case>a>img{height:220px!important}
      .destroy-upgrade-steps{grid-template-columns:1fr}
      .destroy-upgrade-steps article{min-height:0}
      .destroy-upgrade-video{padding:16px}
    }
  </style>`;
}
