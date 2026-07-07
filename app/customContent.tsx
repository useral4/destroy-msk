import type { Metadata } from "next";
import CustomCalculator from "./CustomCalculator";

type CustomKind = "service" | "hub" | "object" | "video" | "reviews" | "calculator";

type Faq = {
  q: string;
  a: string;
};

type CustomPage = {
  slug: string;
  title: string;
  description: string;
  kind: CustomKind;
  eyebrow: string;
  heroImage: string;
  intro: string;
  points: string[];
  gallery: string[];
  related?: { title: string; href: string; text?: string; image?: string }[];
  facts?: { label: string; value: string }[];
  faq?: Faq[];
};

const img = {
  hero: "/wp-content/uploads/2025/09/orig.jpg",
  apartment: "/wp-content/uploads/2023/05/10.jpg",
  wall: "/wp-content/uploads/2024/07/omsk-demontazh-sten-peregorodok-podokonnikov_111707.jpeg",
  concrete: "/wp-content/uploads/2024/07/1670020336_1-bigfoto-name-p-almaznaya-rezka-betonnikh-proemov-1.jpg",
  object: "/wp-content/uploads/2026/01/photo_4_2026-01-30_13-56-36.jpg",
  objectAlt: "/wp-content/uploads/2026/01/photo_10_2026-01-30_13-56-49.jpg",
  site: "/wp-content/uploads/2025/10/24_10.jpeg",
  house: "/wp-content/uploads/2025/10/25_8.jpeg",
  fire: "/wp-content/uploads/2025/10/22_11.jpeg",
  furniture: "/wp-content/uploads/2025/09/vyvoz-staroj-mebeli-1024x768.jpg.webp",
  letter1: "/wp-content/uploads/2025/09/blagodarstvennoe-pismo.jpg",
  letter2: "/wp-content/uploads/2025/09/uvazhaemyj-aleksej-nikolaevich.jpg",
};

const commonFaq: Faq[] = [
  {
    q: "Вывоз мусора можно включить в заявку?",
    a: "Да. Мы подбираем контейнер, грузчиков и вывозим строительный мусор после работ.",
  },
  {
    q: "Можно ли рассчитать стоимость по фото?",
    a: "Предварительно да. Для точной сметы менеджер уточняет площадь, доступ техники, этажность и состав работ.",
  },
  {
    q: "Работаете по Москве и области?",
    a: "Да, основной регион работ - Москва и Московская область, включая объекты до 60 км от МКАД.",
  },
];

export const customPages: CustomPage[] = [
  {
    slug: "novye-uslugi",
    title: "Новые услуги DESTROY",
    description:
      "Новые направления DESTROY: расчистка участков, спил деревьев, разбор ветхих строений, демонтаж плитки, бордюров и другие услуги.",
    kind: "hub",
    eyebrow: "Раздел услуг",
    heroImage: img.site,
    intro:
      "Собрали направления из нового ТЗ в отдельный раздел: здесь клиент быстро выбирает нужную услугу, смотрит примеры работ и оставляет заявку на расчет.",
    points: [
      "Расчистка участков и благоустройство территории",
      "Спил и удаление деревьев",
      "Разбор ветхих строений",
      "Демонтаж заборов, штукатурки, стяжки, мебели, плитки и бордюров",
    ],
    gallery: [img.site, img.house, img.concrete],
    related: [
      { title: "Расчистка участков", href: "/raschistka-uchastkov/", image: img.site },
      { title: "Спил и удаление деревьев", href: "/spil-i-udalenie-derevev/", image: img.house },
      { title: "Разбор ветхих строений", href: "/razbor-vethih-stroenij/", image: img.objectAlt },
      { title: "Демонтаж тротуарной плитки и бордюров", href: "/demontazh-trotuarnoj-plitki-bordyurov/", image: img.concrete },
      { title: "Демонтаж заборов", href: "/demontazh-zabora/", image: img.object },
      { title: "Вывоз и утилизация мебели", href: "/vyvoz-i-utilizacziya-mebeli/", image: img.furniture },
    ],
  },
  {
    slug: "raschistka-uchastkov",
    title: "Расчистка участков и благоустройство территории",
    description:
      "Расчистка участков от мусора, зарослей и старых конструкций в Москве и Московской области. Работа техникой, вывоз мусора, подготовка под строительство.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.site,
    intro:
      "Расчищаем частные, промышленные и коммерческие территории: убираем мусор, демонтируем легкие конструкции, вывозим отходы и готовим участок под дальнейшие работы.",
    points: [
      "Расчистка участка от мусора и строительных остатков",
      "Удаление зарослей, сухостоя и мелких конструкций",
      "Подготовка участка под строительство или благоустройство",
      "Работа мини-погрузчиком, экскаватором и другой техникой",
      "Вывоз мусора контейнерами 8, 20 и 27 кубов",
    ],
    gallery: [img.site, img.object, img.objectAlt],
    related: [
      { title: "Погрузка и вывоз мусора", href: "/pogruzka-i-vyvoz-musora/" },
      { title: "Контейнер 20 кубов", href: "/kontejner-dlya-musora-20-kubov/" },
      { title: "Демонтаж дома", href: "/demontazh-doma/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "spil-i-udalenie-derevev",
    title: "Спил и удаление деревьев",
    description:
      "Спил аварийных деревьев, валка деревьев на участке, корчевание пней и вывоз порубочных остатков в Москве и Московской области.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.house,
    intro:
      "Удаляем деревья на участках и рядом со строениями. Организуем безопасный спил, распил, погрузку, вывоз веток и корчевание пней.",
    points: [
      "Спил аварийных деревьев частями",
      "Валка деревьев на свободной территории",
      "Корчевание пней и зачистка площадки",
      "Вывоз порубочных остатков",
      "Работа рядом с заборами, домами и коммуникациями",
    ],
    gallery: [img.house, img.site, img.object],
    related: [
      { title: "Расчистка участков", href: "/raschistka-uchastkov/" },
      { title: "Разбор ветхих строений", href: "/razbor-vethih-stroenij/" },
      { title: "Наши объекты", href: "/nashi-obekty/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "razbor-vethih-stroenij",
    title: "Разбор ветхих строений",
    description:
      "Демонтаж старых домов, сараев, дачных построек и хозяйственных строений с вывозом мусора.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.house,
    intro:
      "Разбираем старые дома, сараи, бытовки, пристройки и хозяйственные постройки. Сохраняем подъезды, аккуратно сортируем мусор и готовим площадку под дальнейшее использование.",
    points: [
      "Демонтаж старых и дачных домов",
      "Разбор сараев, бытовок и хозяйственных построек",
      "Фото до и после, фиксация результата",
      "Ручной демонтаж или техника по условиям объекта",
      "Погрузка, вывоз и уборка территории",
    ],
    gallery: [img.house, img.objectAlt, img.site],
    related: [
      { title: "Демонтаж дома", href: "/demontazh-doma/" },
      { title: "Демонтаж сарая", href: "/demontazh-saraya/" },
      { title: "Портфолио ветхих строений", href: "/category/portfolio/demontazh-vethih-stroenij/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "demontazh-trotuarnoj-plitki-bordyurov",
    title: "Демонтаж тротуарной плитки и бордюров",
    description:
      "Демонтаж тротуарной плитки, бордюрного камня и оснований с погрузкой и вывозом мусора.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.concrete,
    intro:
      "Снимаем плитку, бордюры и старое основание под дорожки, парковки и входные группы. Работаем вручную или техникой, мусор вывозим контейнерами.",
    points: [
      "Демонтаж плитки, бордюров и бетонного основания",
      "Сортировка материала при необходимости сохранения",
      "Подготовка площадки под новое покрытие",
      "Погрузка боя, песка и строительного мусора",
      "Расчет по площади, толщине основания и доступу техники",
    ],
    gallery: [img.concrete, img.wall, img.object],
    related: [
      { title: "Демонтаж пола и стяжки", href: "/demontazh-pola-i-styazhki/" },
      { title: "Погрузка и вывоз мусора", href: "/pogruzka-i-vyvoz-musora/" },
      { title: "Калькулятор стоимости", href: "/calc/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "nashi-video",
    title: "Наши видео",
    description:
      "Видео реальных демонтажных работ DESTROY: квартиры, дома, коммерческие помещения, школы, пожары и сантехнические кабины.",
    kind: "video",
    eyebrow: "Реальные работы",
    heroImage: img.objectAlt,
    intro:
      "Собрали видеокаталог работ, чтобы клиент мог увидеть процесс демонтажа без поиска по социальным сетям. Сейчас раздел подготовлен под загрузку роликов по категориям.",
    points: [
      "Квартиры и коммерческие помещения",
      "Дома, ветхие строения и участки",
      "Школы и крупные объекты",
      "Демонтаж после пожара",
      "Сантехнические кабины и внутренние работы",
    ],
    gallery: [img.objectAlt, img.object, img.wall],
    related: [
      { title: "Квартиры", href: "/category/portfolio/demontazh-v-kvartirah/" },
      { title: "Коммерческие помещения", href: "/category/portfolio/demontazh-kommercheskih-pomeshhenij/" },
      { title: "Сантехнические кабины", href: "/category/portfolio/demontazh-santehnicheskih-komnat/" },
    ],
  },
  {
    slug: "otzyvy-i-blagodarnosti",
    title: "Отзывы и благодарности",
    description:
      "Отзывы клиентов, благодарственные письма и материалы, повышающие доверие к DESTROY.",
    kind: "reviews",
    eyebrow: "Доверие",
    heroImage: img.letter1,
    intro:
      "Раздел объединяет благодарственные письма, отзывы клиентов и ссылки на выполненные объекты. Основная галерея благодарностей уже доступна на сайте.",
    points: [
      "Благодарственные письма заказчиков",
      "Отзывы по демонтажу квартир, домов и коммерческих помещений",
      "Переход к существующей галерее благодарностей",
      "Материалы для подтверждения опыта компании",
    ],
    gallery: [img.letter1, img.letter2, "/wp-content/uploads/2026/01/otzyv1.jpg"],
    related: [
      { title: "Благодарности", href: "/blagodarnosti/" },
      { title: "Портфолио работ", href: "/portfolio-rabot/" },
      { title: "Наши объекты", href: "/nashi-obekty/" },
    ],
  },
  {
    slug: "nashi-obekty",
    title: "Наши объекты",
    description:
      "Ключевые проекты DESTROY: демонтаж школы, ТЦ после пожара, сталинки, сантехнической кабины и кирпичного здания.",
    kind: "hub",
    eyebrow: "SEO-раздел",
    heroImage: img.object,
    intro:
      "Отдельный раздел под крупные и показательные проекты. Такие страницы помогают клиентам быстро найти похожий опыт и дают дополнительные точки входа из поиска.",
    points: [
      "Фото до и после",
      "Площадь, сроки и состав работ",
      "Перелинковка с услугами и портфолио",
      "Форма заявки на каждом объекте",
    ],
    gallery: [img.object, img.objectAlt, img.fire],
    related: [
      { title: "Демонтаж школы", href: "/nashi-obekty/demontazh-shkoly/", image: img.object },
      { title: "Демонтаж ТЦ после пожара", href: "/nashi-obekty/demontazh-tc-posle-pozhara/", image: img.fire },
      { title: "Демонтаж сталинки", href: "/nashi-obekty/demontazh-stalinki/", image: img.apartment },
      { title: "Демонтаж сантехнической кабины", href: "/nashi-obekty/demontazh-santehnicheskoj-kabiny/", image: img.wall },
      { title: "Разбор кирпичного здания", href: "/nashi-obekty/razbor-kirpichnogo-zdaniya/", image: img.concrete },
    ],
  },
  {
    slug: "nashi-obekty/demontazh-shkoly",
    title: "Демонтаж школы",
    description: "Страница объекта: демонтаж школы с фото, сроками, этапами и вывозом мусора.",
    kind: "object",
    eyebrow: "Ключевой объект",
    heroImage: img.object,
    intro:
      "Комплексный демонтаж школьного объекта требует четкого графика, безопасного зонирования, вывоза большого объема мусора и контроля техники на территории.",
    points: ["Демонтаж внутренних конструкций", "Разбор покрытий и перегородок", "Погрузка и вывоз мусора", "Работа по согласованному графику"],
    facts: [
      { label: "Тип", value: "Социальный объект" },
      { label: "Срок", value: "По графику заказчика" },
      { label: "Вывоз", value: "Контейнеры 20/27 м3" },
    ],
    gallery: [img.object, img.objectAlt, img.wall],
    related: [{ title: "Демонтаж зданий", href: "/demontazh-zdanij-i-sooruzhenij/" }],
  },
  {
    slug: "nashi-obekty/demontazh-tc-posle-pozhara",
    title: "Демонтаж ТЦ после пожара",
    description: "Демонтаж торгового центра после пожара: разбор поврежденных конструкций, вывоз и уборка.",
    kind: "object",
    eyebrow: "Ключевой объект",
    heroImage: img.fire,
    intro:
      "После пожара важно быстро удалить опасные элементы, разобрать поврежденные конструкции и подготовить помещение к обследованию или восстановлению.",
    points: ["Разбор обгоревших конструкций", "Сортировка мусора", "Вынос и погрузка", "Подготовка к восстановлению"],
    facts: [
      { label: "Тип", value: "Коммерческий объект" },
      { label: "Особенность", value: "Работа после пожара" },
      { label: "Вывоз", value: "Строительный мусор" },
    ],
    gallery: [img.fire, img.objectAlt, img.concrete],
    related: [{ title: "Коммерческие помещения", href: "/demontazh-kvartir-i-kommercheskih-pomeshhenij/" }],
  },
  {
    slug: "nashi-obekty/demontazh-stalinki",
    title: "Демонтаж сталинки",
    description: "Комплексный демонтаж в сталинском доме: полы, перегородки, штукатурка и вывоз мусора.",
    kind: "object",
    eyebrow: "Ключевой объект",
    heroImage: img.apartment,
    intro:
      "В сталинских домах часто встречаются толстые слои штукатурки, старые перекрытия, тяжелые перегородки и сложная логистика вывоза.",
    points: ["Демонтаж штукатурки", "Разбор полов и перегородок", "Вынос мешков", "Аккуратная работа в жилом доме"],
    facts: [
      { label: "Тип", value: "Квартира в сталинке" },
      { label: "Работы", value: "Под ключ" },
      { label: "Мусор", value: "Вывоз включается в смету" },
    ],
    gallery: [img.apartment, img.wall, img.concrete],
    related: [{ title: "Демонтаж сталинок и хрущевок", href: "/demontazh-stalinok-i-hrushhevok/" }],
  },
  {
    slug: "nashi-obekty/demontazh-santehnicheskoj-kabiny",
    title: "Демонтаж сантехнической кабины",
    description: "Пример объекта по демонтажу сантехнической кабины с вывозом мусора.",
    kind: "object",
    eyebrow: "Ключевой объект",
    heroImage: img.wall,
    intro:
      "Демонтаж сантехнической кабины выполняется с учетом стояков, вентиляции, соседних помещений и последующего ремонта.",
    points: ["Разбор стен кабины", "Демонтаж сантехники", "Защита коммуникаций", "Вывоз боя и мусора"],
    facts: [
      { label: "Тип", value: "Санузел" },
      { label: "Срок", value: "Обычно 1 день" },
      { label: "Формат", value: "С вывозом мусора" },
    ],
    gallery: [img.wall, img.concrete, img.object],
    related: [{ title: "Демонтаж сантехники", href: "/demontazh-santehniki/" }],
  },
  {
    slug: "nashi-obekty/razbor-kirpichnogo-zdaniya",
    title: "Разбор кирпичного здания",
    description: "Разбор кирпичного здания техникой и вручную: этапы, вывоз мусора, подготовка площадки.",
    kind: "object",
    eyebrow: "Ключевой объект",
    heroImage: img.concrete,
    intro:
      "Кирпичные здания разбираем вручную, техникой или комбинированно. Подбираем подход по плотности застройки, подъездам и состоянию конструкций.",
    points: ["Обследование и план работ", "Разбор стен и перекрытий", "Погрузка кирпича и боя", "Финишная зачистка участка"],
    facts: [
      { label: "Тип", value: "Кирпичное здание" },
      { label: "Техника", value: "По условиям объекта" },
      { label: "Результат", value: "Чистая площадка" },
    ],
    gallery: [img.concrete, img.objectAlt, img.site],
    related: [{ title: "Демонтаж зданий и сооружений", href: "/demontazh-zdanij-i-sooruzhenij/" }],
  },
  {
    slug: "calc",
    title: "Калькулятор стоимости демонтажа",
    description:
      "Удобный калькулятор демонтажных работ: тип объекта, площадь, состав работ и вывоз мусора с предварительной стоимостью.",
    kind: "calculator",
    eyebrow: "Предварительный расчет",
    heroImage: img.hero,
    intro:
      "Выберите тип объекта, площадь, состав работ и необходимость вывоза мусора. Калькулятор покажет ориентировочную стоимость, а менеджер уточнит смету по фото или после замера.",
    points: ["Тип объекта", "Площадь", "Состав демонтажа", "Вывоз мусора", "PDF/заявка менеджеру"],
    gallery: [img.hero, img.object, img.concrete],
  },
];

export function getCustomPages() {
  return customPages;
}

export function findCustomPage(slug: string) {
  return customPages.find((page) => page.slug === slug);
}

export function metadataFromCustomPage(page: CustomPage): Metadata {
  return {
    title: `${page.title} - DESTROY`,
    description: page.description,
  };
}

export function CustomContentPage({ page }: { page: CustomPage }) {
  if (page.kind === "calculator") return <CalculatorPage page={page} />;
  return <MarketingPage page={page} />;
}

function Header() {
  return (
    <header className="custom-header">
      <a href="/" className="custom-logo" aria-label="DESTROY">
        <img src="/wp-content/uploads/2025/10/logo.png" alt="DESTROY" />
      </a>
      <nav aria-label="Навигация">
        <a href="/portfolio-rabot/">Портфолио</a>
        <a href="/nashi-obekty/">Наши объекты</a>
        <a href="/nashi-video/">Видео</a>
        <a href="/calc/">Калькулятор</a>
        <a href="/contakts/">Контакты</a>
      </nav>
      <a className="custom-phone" href="tel:+79160067777">
        +7 (916)-006-77-77
      </a>
    </header>
  );
}

function MarketingPage({ page }: { page: CustomPage }) {
  return (
    <>
      <CustomStyles />
      <Header />
      <main className="custom-page">
        <section className="custom-hero">
          <img src={page.heroImage} alt="" />
          <div className="custom-hero__shade" />
          <div className="custom-hero__content">
            <span>{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <div className="custom-actions">
              <a href="#custom-request">Оставить заявку</a>
              <a href="/calc/">Рассчитать стоимость</a>
            </div>
          </div>
        </section>

        <section className="custom-section custom-grid-2">
          <div>
            <h2>Что входит в работу</h2>
            <p>
              Страница добавлена по ТЗ как отдельная точка входа для клиентов из поиска и рекламы.
              Ниже собраны услуги, этапы, примеры и быстрый путь к заявке.
            </p>
          </div>
          <ul className="custom-checks">
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        {page.facts ? (
          <section className="custom-facts" aria-label="Параметры объекта">
            {page.facts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </section>
        ) : null}

        <section className="custom-section">
          <h2>Фото и примеры работ</h2>
          <div className="custom-gallery">
            {page.gallery.map((src) => (
              <img key={src} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </section>

        <section className="custom-section custom-grid-3">
          <div>
            <h2>Этапы работ</h2>
          </div>
          {["Осмотр и расчет", "Демонтаж", "Погрузка и вывоз"].map((step, index) => (
            <article className="custom-step" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
              <p>
                {index === 0
                  ? "Уточняем объем, доступ, сроки, необходимость техники и контейнера."
                  : index === 1
                    ? "Выполняем работы аккуратно, с учетом конструкций, коммуникаций и соседних помещений."
                    : "Собираем мусор, грузим в контейнер и оставляем объект готовым к следующему этапу."}
              </p>
            </article>
          ))}
        </section>

        {page.related?.length ? (
          <section className="custom-section">
            <h2>Связанные разделы</h2>
            <div className="custom-related">
              {page.related.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.image ? <img src={item.image} alt="" loading="lazy" /> : null}
                  <strong>{item.title}</strong>
                  {item.text ? <span>{item.text}</span> : null}
                </a>
              ))}
            </div>
          </section>
        ) : null}

        {page.faq?.length ? (
          <section className="custom-section">
            <h2>Ответы на частые вопросы</h2>
            <div className="custom-faq">
              {page.faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {page.kind === "video" ? <VideoCategories /> : null}

        <RequestForm />
      </main>
      <Footer />
    </>
  );
}

function VideoCategories() {
  const categories = [
    "Квартиры",
    "Дома",
    "Коммерческие помещения",
    "Школы",
    "Демонтаж после пожара",
    "Сантехнические кабины",
  ];
  return (
    <section className="custom-section">
      <h2>Категории видео</h2>
      <div className="custom-video-grid">
        {categories.map((category) => (
          <article key={category}>
            <div className="custom-play">▶</div>
            <h3>{category}</h3>
            <p>Подготовлено место под загрузку реальных роликов работ DESTROY.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CalculatorPage({ page }: { page: CustomPage }) {
  return (
    <>
      <CustomStyles />
      <Header />
      <main className="custom-page">
        <section className="custom-hero custom-hero--compact">
          <img src={page.heroImage} alt="" />
          <div className="custom-hero__shade" />
          <div className="custom-hero__content">
            <span>{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </section>

        <CustomCalculator />

        <section className="custom-section custom-grid-3">
          {["1. Выберите объект", "2. Укажите площадь", "3. Оставьте заявку"].map((step) => (
            <article className="custom-step" key={step}>
              <h3>{step}</h3>
              <p>Менеджер уточнит детали и подготовит расчет под ваш объект.</p>
            </article>
          ))}
        </section>

        <RequestForm />
      </main>
      <Footer />
    </>
  );
}

function RequestForm() {
  return (
    <section className="custom-request" id="custom-request">
      <div>
        <span>Заявка</span>
        <h2>Получить консультацию и расчет</h2>
        <p>Оставьте контакты, менеджер уточнит задачу, запросит фото объекта и подготовит смету.</p>
      </div>
      <form>
        <input name="name" placeholder="Ваше имя" required />
        <input name="phone" placeholder="Ваш телефон" required />
        <textarea name="task" placeholder="Что нужно демонтировать?" rows={3} />
        <button type="submit">Отправить заявку</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="custom-footer">
      <img src="/wp-content/uploads/2025/10/logo-white.png" alt="DESTROY" />
      <div>
        <a href="/privacy-policy/">Политика конфиденциальности</a>
        <a href="/personal-data/">Согласие на обработку персональных данных</a>
      </div>
    </footer>
  );
}

function CustomStyles() {
  return (
    <style>{`
      .custom-header{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:22px;padding:16px clamp(18px,4vw,64px);background:rgba(255,255,255,.94);backdrop-filter:blur(14px);box-shadow:0 10px 28px rgba(0,0,0,.06)}
      .custom-logo img{width:150px;height:auto;display:block}.custom-header nav{display:flex;gap:22px;align-items:center;flex-wrap:wrap}.custom-header a{color:#111;text-decoration:none;font:700 14px/1.2 Manrope,Arial,sans-serif}.custom-phone{color:#c91515!important}
      .custom-page{font-family:Manrope,Arial,sans-serif;color:#111;background:#fff}.custom-hero{position:relative;min-height:560px;display:flex;align-items:flex-end;overflow:hidden}.custom-hero--compact{min-height:460px}.custom-hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.custom-hero__shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.78))}.custom-hero__content{position:relative;max-width:980px;padding:0 clamp(18px,6vw,90px) 64px;color:#fff}.custom-hero span,.custom-request span{display:inline-flex;margin-bottom:14px;color:#fff;background:#c91515;border-radius:999px;padding:9px 16px;font-weight:800}.custom-hero h1{margin:0 0 18px;font-family:Georgia,serif;font-size:clamp(36px,6vw,72px);line-height:1.02}.custom-hero p{max-width:760px;margin:0;font-size:20px;line-height:1.5}.custom-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}.custom-actions a,.custom-calc-result a,.custom-request button{border:0;border-radius:999px;background:#c91515;color:#fff!important;text-decoration:none;padding:15px 24px;font-weight:900}.custom-actions a:nth-child(2){background:#fff;color:#111!important}
      .custom-section{padding:70px clamp(18px,6vw,90px)}.custom-section h2{margin:0 0 22px;font-family:Georgia,serif;font-size:clamp(30px,4vw,48px);line-height:1.08}.custom-section p{font-size:18px;line-height:1.6;color:#333}.custom-grid-2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:44px;align-items:start}.custom-grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.custom-checks{display:grid;gap:12px;margin:0;padding:0;list-style:none}.custom-checks li{position:relative;padding:18px 18px 18px 48px;border-bottom:1px solid #eee;font-weight:800}.custom-checks li:before{content:"";position:absolute;left:12px;top:20px;width:18px;height:18px;border-radius:50%;background:#c91515}.custom-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.custom-gallery img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:20px}.custom-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:#2f2727;color:#fff;padding:0 clamp(18px,6vw,90px)}.custom-facts div{padding:34px 28px;background:#382f2f}.custom-facts span{display:block;opacity:.68;margin-bottom:10px}.custom-facts strong{font-size:22px}.custom-step{border:1px solid #eee;border-radius:20px;padding:28px;background:#fff;box-shadow:0 16px 38px rgba(0,0,0,.06)}.custom-step span{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#c91515;color:#fff;font-weight:900}.custom-step h3{margin:18px 0 10px;font-size:22px}.custom-step p{font-size:16px}.custom-related,.custom-video-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.custom-related a,.custom-video-grid article{min-height:160px;border-radius:20px;background:#f5f5f5;color:#111;text-decoration:none;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden}.custom-related img{width:100%;height:170px;object-fit:cover;border-radius:14px;margin-bottom:16px}.custom-related strong{font-size:20px}.custom-faq{display:grid;gap:12px}.custom-faq details{border:1px solid #eee;border-radius:16px;padding:20px}.custom-faq summary{font-weight:900;cursor:pointer}.custom-play{display:grid;place-items:center;width:54px;height:54px;border-radius:50%;background:#c91515;color:#fff;margin-bottom:16px}
      .custom-request{margin:70px clamp(18px,6vw,90px);padding:48px;border-radius:24px;background:#362d2d;color:#fff;display:grid;grid-template-columns:1fr 1.1fr;gap:36px}.custom-request h2{margin:0 0 14px;font-size:40px;line-height:1.1}.custom-request p{color:rgba(255,255,255,.75);line-height:1.6}.custom-request form{display:grid;gap:14px}.custom-request input,.custom-request textarea,.custom-calculator input,.custom-calculator select{width:100%;box-sizing:border-box;border:0;border-radius:999px;background:#fff;color:#111;padding:16px 20px;font:600 16px/1.2 Manrope,Arial,sans-serif}.custom-request textarea{border-radius:22px}
      .custom-calculator{display:grid;grid-template-columns:1.1fr .9fr;gap:26px;padding:70px clamp(18px,6vw,90px);background:#362d2d;color:#fff}.custom-calc-panel{display:grid;gap:18px}.custom-calc-panel label{display:grid;gap:9px;color:rgba(255,255,255,.78);font-weight:800}.custom-checkline{display:flex!important;align-items:center;gap:12px}.custom-checkline input{width:20px!important;height:20px}.custom-calc-panel button{border:0;border-radius:999px;background:#c91515;color:#fff;padding:17px 24px;font-weight:900;font-size:16px}.custom-calc-result{border-radius:24px;background:#fff;color:#111;padding:36px;display:flex;flex-direction:column;justify-content:center}.custom-calc-result span{color:#777;font-weight:800}.custom-calc-result strong{font-size:54px;line-height:1.1;margin:12px 0}.custom-footer{display:flex;align-items:center;justify-content:space-between;gap:24px;background:#171313;color:#fff;padding:34px clamp(18px,6vw,90px)}.custom-footer img{width:150px}.custom-footer div{display:flex;gap:20px;flex-wrap:wrap}.custom-footer a{color:#fff;text-decoration:none}
      @media(max-width:900px){.custom-header{align-items:flex-start;flex-direction:column}.custom-header nav{gap:12px}.custom-grid-2,.custom-grid-3,.custom-gallery,.custom-related,.custom-video-grid,.custom-request,.custom-calculator,.custom-facts{grid-template-columns:1fr}.custom-hero{min-height:520px}.custom-hero p{font-size:17px}.custom-section{padding:48px 18px}.custom-request{margin:48px 18px;padding:28px}.custom-calculator{padding:48px 18px}.custom-calc-result strong{font-size:40px}.custom-footer{align-items:flex-start;flex-direction:column}}
    `}</style>
  );
}
