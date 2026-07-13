import type { Metadata } from "next";
import CustomCalculator from "./CustomCalculator";
import { findRenderedPage, readRenderedHtml } from "./renderedSite";

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

const workPhotos = {
  territory: [
    "/wp-content/uploads/2025/10/28_16.jpeg",
    "/wp-content/uploads/2025/10/28_12-1.jpeg",
    "/wp-content/uploads/2025/10/25_8.jpeg",
    "/wp-content/uploads/2025/10/24_10.jpeg",
  ],
  houses: [
    "/wp-content/uploads/2025/10/demontazh-bani-65-s-vyvozom-musora_3.jpeg",
    "/wp-content/uploads/2025/10/18_7.jpeg",
    "/wp-content/uploads/2025/10/fvfyvfvfyvyf.jpg",
    "/wp-content/uploads/2025/10/yfvfyvfyv.jpg",
    "/wp-content/uploads/2025/10/yfvyfvfyvfy.jpg",
  ],
  floors: [
    "/wp-content/uploads/2025/10/25_3-1.jpeg",
    "/wp-content/uploads/2025/10/25_6-2.jpeg",
    "/wp-content/uploads/2025/10/24_12-2.jpeg",
    "/wp-content/uploads/2025/10/25_11-2.jpeg",
    "/wp-content/uploads/2025/10/25_10-2.jpeg",
  ],
  screed: [
    "/wp-content/uploads/2026/01/photo_10_2026-01-30_13-57-41.jpg",
    "/wp-content/uploads/2025/11/photo_2025-09-30_21-56-07.jpg",
    "/wp-content/uploads/2025/10/1.jpg",
    "/wp-content/uploads/2025/10/demontazh-betonnoj-styazhki-30sm_4.jpeg",
    "/wp-content/uploads/2025/10/photo_1_2025-10-02_14-12-19-2.jpg",
  ],
  plaster: [
    "/wp-content/uploads/2026/01/photo_10_2026-01-30_13-56-49.jpg",
    "/wp-content/uploads/2025/11/photo_2025-11-01_13-49-53.jpg",
    "/wp-content/uploads/2025/10/demontazh-shtukaturki-180m2-_3.jpeg",
    img.wall,
  ],
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
      { title: "Демонтаж штукатурки", href: "/demontazh-shtukaturki/", image: img.wall },
      { title: "Демонтаж стяжки", href: "/demontazh-styazhki/", image: img.concrete },
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
    gallery: workPhotos.territory,
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
    gallery: [img.house, img.site, ...workPhotos.houses.slice(0, 3)],
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
    gallery: workPhotos.houses,
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
    gallery: [img.concrete, ...workPhotos.floors.slice(0, 4)],
    related: [
      { title: "Демонтаж пола и стяжки", href: "/demontazh-pola-i-styazhki/" },
      { title: "Погрузка и вывоз мусора", href: "/pogruzka-i-vyvoz-musora/" },
      { title: "Калькулятор стоимости", href: "/calc/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "demontazh-zabora",
    title: "Демонтаж заборов",
    description:
      "Демонтаж металлических, деревянных, бетонных и кирпичных заборов в Москве и Московской области с погрузкой и вывозом мусора.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.object,
    intro:
      "Аккуратно разбираем старые заборы на участках, промышленных территориях и коммерческих объектах. Сохраняем подъездные пути, сортируем металл и строительный бой, при необходимости привлекаем технику.",
    points: [
      "Демонтаж профлиста, сетки, деревянных секций и ворот",
      "Разбор бетонных и кирпичных столбов",
      "Срезка металлоконструкций и погрузка лома",
      "Вывоз мусора контейнерами или самосвалом",
      "Подготовка линии участка под новый забор",
    ],
    gallery: [img.object, img.site, img.concrete, ...workPhotos.territory.slice(0, 2)],
    related: [
      { title: "Расчистка участков", href: "/raschistka-uchastkov/" },
      { title: "Спил и удаление деревьев", href: "/spil-i-udalenie-derevev/" },
      { title: "Калькулятор стоимости", href: "/calc/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "demontazh-shtukaturki",
    title: "Демонтаж штукатурки",
    description:
      "Снятие старой штукатурки со стен и потолков, подготовка оснований под ремонт, погрузка и вывоз строительного мусора.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.wall,
    intro:
      "Снимаем штукатурку в квартирах, офисах, коммерческих помещениях и домах. Работаем ручным инструментом и перфораторами, защищаем сохранившиеся зоны и вывозим весь строительный мусор после демонтажа.",
    points: [
      "Демонтаж штукатурки со стен и потолков",
      "Очистка кирпича, бетона и перегородок",
      "Подготовка поверхности под новую отделку",
      "Пылезащита, упаковка и погрузка мусора",
      "Расчет по площади, толщине слоя и сложности доступа",
    ],
    gallery: workPhotos.plaster,
    related: [
      { title: "Демонтаж стен и перегородок", href: "/demontazh-sten-i-peregorodok/" },
      { title: "Демонтаж пола и стяжки", href: "/demontazh-pola-i-styazhki/" },
      { title: "Погрузка и вывоз мусора", href: "/pogruzka-i-vyvoz-musora/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "demontazh-styazhki",
    title: "Демонтаж стяжки",
    description:
      "Демонтаж цементной, бетонной и армированной стяжки пола с выносом, погрузкой и вывозом строительного мусора.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.concrete,
    intro:
      "Разбираем старую стяжку в квартирах, офисах, торговых и производственных помещениях. Подбираем инструмент под толщину слоя, контролируем шумные работы и подготавливаем основание под новый пол.",
    points: [
      "Демонтаж стяжки любой толщины",
      "Работа с армированными и бетонными основаниями",
      "Сбор, вынос и погрузка боя в контейнер",
      "Алмазная резка и локальный демонтаж при необходимости",
      "Предварительная цена по площади и толщине стяжки",
    ],
    gallery: workPhotos.screed,
    related: [
      { title: "Демонтаж пола и стяжки", href: "/demontazh-pola-i-styazhki/" },
      { title: "Демонтаж тротуарной плитки", href: "/demontazh-trotuarnoj-plitki-bordyurov/" },
      { title: "Калькулятор стоимости", href: "/calc/" },
    ],
    faq: commonFaq,
  },
  {
    slug: "vyvoz-i-utilizacziya-mebeli",
    title: "Вывоз и утилизация мебели",
    description:
      "Разбор, вынос, погрузка и утилизация старой мебели после демонтажа, ремонта, переезда или освобождения помещения.",
    kind: "service",
    eyebrow: "Новая услуга",
    heroImage: img.furniture,
    intro:
      "Освобождаем квартиры, офисы, магазины и коммерческие помещения от старой мебели. При необходимости разбираем крупные шкафы, кухни и перегородки, затем выносим, грузим и отправляем на утилизацию.",
    points: [
      "Разбор шкафов, кухонь, диванов и офисной мебели",
      "Вынос с этажей и погрузка в транспорт",
      "Утилизация мебели и сопутствующего мусора",
      "Работа после ремонта, демонтажа или переезда",
      "Расчет по объему, этажности и наличию лифта",
    ],
    gallery: [img.furniture, img.apartment, img.objectAlt],
    related: [
      { title: "Погрузка и вывоз мусора", href: "/pogruzka-i-vyvoz-musora/" },
      { title: "Демонтаж квартир", href: "/demontazh-kvartir-pod-klyuch/" },
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
    eyebrow: "Портфолио",
    heroImage: img.object,
    intro:
      "Реальные выполненные объекты DESTROY: крупные демонтажные работы, помещения после пожара, школы, квартиры и коммерческие объекты.",
    points: [
      "Демонтаж школы",
      "Демонтаж ТЦ после пожара",
      "Демонтаж сталинки",
      "Демонтаж сантехнической кабины",
      "Разбор кирпичного здания",
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
  return customPages.filter((page) => page.slug !== "novye-uslugi");
}

export function findCustomPage(slug: string) {
  return getCustomPages().find((page) => page.slug === slug);
}

export function metadataFromCustomPage(page: CustomPage): Metadata {
  return {
    title: `${page.title} - DESTROY`,
    description: page.description,
  };
}

export function CustomContentPage({ page }: { page: CustomPage }) {
  return <div dangerouslySetInnerHTML={{ __html: renderElementorCustomPage(page) }} />;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getElementorShell() {
  const home = findRenderedPage("");
  const source = home ? readRenderedHtml(home) : "";
  const headerIndex = source.search(/<header\b[^>]*elementor-location-header/i);
  const footerIndex = source.search(/<footer\b[^>]*elementor-location-footer/i);
  const header = hydrateShellImages(headerIndex >= 0 ? source.slice(headerIndex).match(/<header\b[\s\S]*?<\/header>/i)?.[0] ?? "" : "");
  const footer = hydrateShellImages(footerIndex >= 0 ? source.slice(footerIndex).match(/<footer\b[\s\S]*?<\/footer>/i)?.[0] ?? "" : "");
  const assets =
    source
      .match(/<link\b[^>]*rel=[\"']stylesheet[\"'][^>]*>|<style\b[^>]*>[\s\S]*?<\/style>/gi)
      ?.filter((asset) => !/::-webkit-scrollbar|scrollbar-color|scrollbar-width/i.test(asset))
      .join("") ?? "";

  return {
    assets,
    header,
    footer,
  };
}

function hydrateShellImages(markup: string) {
  return markup
    .replace(/\ssrc=(['"])data:image\/[^'"]*\1(?=[^>]*\sdata-src=)/gi, "")
    .replace(/\sdata-src=(['"])(.*?)\1/gi, " src=$1$2$1")
    .replace(/\sdata-srcset=(['"])(.*?)\1/gi, " srcset=$1$2$1")
    .replace(/\blazyload\b/gi, "");
}

function renderList(items: string[], className: string) {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderGallery(page: CustomPage) {
  if (!page.gallery.length) return "";

  return `
    <section class="elementor-element elementor-element-fc35a16 elementor-widget elementor-widget-html destroy-elementor-section destroy-service-works" data-id="fc35a16" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
      <h2 class="h2">${page.kind === "object" ? "Фото объекта" : "Наши работы"}</h2>
      <div class="swiper mySwiper destroy-rendered-works__slider" aria-label="${escapeHtml(page.title)}">
        <div class="swiper-wrapper">
          ${page.gallery
            .map(
              (src) =>
                `<div class="swiper-slide"><img src="${escapeHtml(src)}" alt="${escapeHtml(page.title)}" loading="lazy" decoding="async"></div>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function renderRelated(page: CustomPage) {
  if (!page.related?.length) return "";

  return `
    <section class="elementor-element elementor-widget elementor-widget-html destroy-elementor-section">
      <h2 class="h2">Связанные услуги</h2>
      <div class="destroy-related-grid">
        ${page.related
          .map(
            (item) =>
              `<a class="destroy-related-card" href="${escapeHtml(item.href)}">${
                item.image ? `<img src="${escapeHtml(item.image)}" alt="" loading="lazy" decoding="async">` : ""
              }<span>${escapeHtml(item.title)}</span>${item.text ? `<p>${escapeHtml(item.text)}</p>` : ""}</a>`,
          )
          .join("")}
      </div>
    </section>`;
}

function renderFacts(page: CustomPage) {
  if (!page.facts?.length) return "";

  return `
    <section class="destroy-facts" aria-label="Параметры объекта">
      ${page.facts
        .map((fact) => `<div><span>${escapeHtml(fact.label)}</span><strong>${escapeHtml(fact.value)}</strong></div>`)
        .join("")}
    </section>`;
}

function renderFaq(page: CustomPage) {
  if (!page.faq?.length) return "";

  return `
    <section class="elementor-element elementor-widget elementor-widget-html destroy-elementor-section">
      <h2 class="h2">Ответы на частые вопросы</h2>
      <div class="destroy-faq">
        ${page.faq
          .map((item) => `<details><summary>${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p></details>`)
          .join("")}
      </div>
    </section>`;
}

function renderRequestForm() {
  return `
    <section class="elementor-element elementor-widget elementor-widget-html destroy-elementor-section destroy-service-request" id="custom-request">
      <div class="destroy-request-text">
        <h2 class="h2">Оставьте заявку</h2>
        <p>Менеджер уточнит задачу, запросит фото объекта и подготовит расчет стоимости.</p>
      </div>
      <form class="wpcf7-form init">
        <span class="wpcf7-form-control-wrap"><input class="wpcf7-form-control wpcf7-text" name="your-name" placeholder="Ваше имя" type="text" required></span>
        <span class="wpcf7-form-control-wrap"><input class="wpcf7-form-control wpcf7-text" name="your-phone" placeholder="+7 (___) ___-__-__" type="text" required></span>
        <span class="wpcf7-form-control-wrap"><textarea class="wpcf7-form-control wpcf7-textarea" name="task" placeholder="Что нужно демонтировать?" rows="3"></textarea></span>
        <input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Отправить заявку">
        <div class="wpcf7-response-output" aria-hidden="true"></div>
      </form>
    </section>`;
}

function renderElementorCustomPage(page: CustomPage) {
  const shell = getElementorShell();
  const eyebrow = page.kind === "service" ? "Услуги" : page.eyebrow;
  const steps = ["Осмотр и расчет", "Демонтаж", "Погрузка и вывоз"];

  const content = `
    <main class="elementor elementor-destroy-custom destroy-elementor-custom" data-elementor-type="wp-page">
      <div class="destroy-service-container">
          <section class="elementor-element elementor-widget elementor-widget-html destroy-service-hero" data-element_type="widget" data-widget_type="html.default">
            <div class="destroy-service-hero__image" style="background-image:url('${escapeHtml(page.heroImage)}')"></div>
            <div class="destroy-service-hero__shade"></div>
            <div class="destroy-service-hero__content">
              <span>${escapeHtml(eyebrow)}</span>
              <h1>${escapeHtml(page.title)}</h1>
              <p>${escapeHtml(page.intro)}</p>
              <div class="destroy-service-actions">
                <a href="#custom-request">Оставить заявку</a>
                <a href="/calc/">Рассчитать стоимость</a>
              </div>
            </div>
          </section>

          <section class="elementor-element elementor-widget elementor-widget-html destroy-elementor-section destroy-service-intro">
            <div>
              <h2 class="h2">Что входит в работу</h2>
              <p>${escapeHtml(page.description)}</p>
            </div>
            ${renderList(page.points, "destroy-check-list")}
          </section>

          ${renderFacts(page)}
          ${renderGallery(page)}

          <section class="elementor-element elementor-widget elementor-widget-html destroy-elementor-section">
            <h2 class="h2">Этапы работ</h2>
            <div class="destroy-steps">
              ${steps
                .map(
                  (step, index) => `<article><span>${index + 1}</span><h3>${step}</h3><p>${
                    index === 0
                      ? "Уточняем объем, доступ, сроки, необходимость техники и контейнера."
                      : index === 1
                        ? "Выполняем работы аккуратно, с учетом конструкций, коммуникаций и соседних помещений."
                        : "Собираем мусор, грузим в контейнер и оставляем объект готовым к следующему этапу."
                  }</p></article>`,
                )
                .join("")}
            </div>
          </section>

          ${renderRelated(page)}
          ${renderFaq(page)}
          ${renderRequestForm()}
      </div>
    </main>`;

  return `${shell.assets}${renderElementorCustomStyles()}${shell.header}${content}${shell.footer}`;
}

function renderElementorCustomStyles() {
  return `<style id="destroy-elementor-custom-css">
    html:has(.destroy-elementor-custom){overflow-x:hidden!important;overflow-y:auto!important}
    body:has(.destroy-elementor-custom){height:auto!important;min-height:100%!important;overflow-x:hidden!important;overflow-y:visible!important}
    body:has(.destroy-elementor-custom)>div:not([hidden]){height:auto!important;min-height:0!important;max-height:none!important;overflow:visible!important}
    .destroy-elementor-custom{width:100%!important;max-width:none!important;overflow:visible!important;background:#fff;color:#111}
    .destroy-service-container{width:min(1180px,calc(100% - 64px));max-width:1180px;margin:0 auto;padding:0;box-sizing:border-box}
    .destroy-service-hero{position:relative;min-height:430px;display:flex;align-items:flex-end;overflow:hidden;border-radius:20px;background:#211b1b;margin:0 0 50px;isolation:isolate}
    .destroy-service-hero__image{position:absolute;inset:0;background-size:cover;background-position:center;z-index:0}
    .destroy-service-hero__shade{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.44) 54%,rgba(0,0,0,.28)),linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.72))}
    .destroy-service-hero__content{position:relative;z-index:2;max-width:760px;padding:54px 46px;color:#fff}
    .destroy-service-hero span{display:block;margin:0 0 14px;color:#c91515;font:800 13px/1.2 Arial,Helvetica,sans-serif;text-transform:uppercase}
    .destroy-service-hero h1{margin:0 0 16px;color:#fff;font-family:Georgia,"Times New Roman",serif;font-size:46px;line-height:1.05;font-weight:800;text-transform:uppercase;letter-spacing:0}
    .destroy-service-hero p{max-width:720px;margin:0;color:rgba(255,255,255,.88);font:500 17px/1.5 Arial,Helvetica,sans-serif}
    .destroy-service-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px}
    .destroy-service-actions a,.destroy-service-request .wpcf7-submit{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:8px;background:#c91515;color:#fff!important;text-decoration:none;padding:14px 24px;font:800 13px/1 Arial,Helvetica,sans-serif;text-transform:uppercase}
    .destroy-service-actions a:nth-child(2){background:#fff;color:#111!important}
    .destroy-elementor-section{padding:0 0 54px;margin:0}
    .destroy-elementor-section .h2{margin:0 0 28px;color:#111;font-family:Georgia,"Times New Roman",serif;font-size:36px;line-height:1.15;font-weight:800;text-align:center;text-transform:uppercase}
    .destroy-service-intro{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:34px;align-items:start}
    .destroy-service-intro p,.destroy-steps p,.destroy-faq p,.destroy-request-text p{font:500 16px/1.55 Arial,Helvetica,sans-serif;color:#333}
    .destroy-check-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}
    .destroy-check-list li{position:relative;min-height:54px;box-sizing:border-box;padding:15px 16px 15px 44px;border:1px solid #ececec;border-radius:8px;background:#fff;font:700 13px/1.35 Arial,Helvetica,sans-serif}
    .destroy-check-list li:before{content:"";position:absolute;left:16px;top:18px;width:15px;height:15px;border:1px solid #c91515;border-radius:4px}
    .destroy-check-list li:after{content:"";position:absolute;left:21px;top:23px;width:5px;height:5px;border-radius:50%;background:#c91515}
    .destroy-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;margin:0 0 54px;background:#302828;color:#fff}
    .destroy-facts div{padding:24px;background:#392f2f}.destroy-facts span{display:block;margin-bottom:8px;color:rgba(255,255,255,.68);font:700 13px/1.3 Arial,Helvetica,sans-serif}.destroy-facts strong{font:800 18px/1.3 Arial,Helvetica,sans-serif}
    .destroy-service-works .swiper-wrapper{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(280px,31%);gap:40px;overflow-x:auto;overflow-y:hidden;padding:0 2px 16px;scroll-snap-type:x mandatory}
    .destroy-service-works .swiper-slide{scroll-snap-align:center}.destroy-service-works img{display:block;width:100%;height:360px;object-fit:cover;border-radius:20px;background:#f2f2f2}
    .destroy-steps,.destroy-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
    .destroy-steps article{border:1px solid #ececec;border-radius:8px;padding:24px;background:#fff}.destroy-steps span{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:#c91515;color:#fff;font-weight:900}.destroy-steps h3{margin:16px 0 8px;color:#111;font:800 18px/1.2 Arial,Helvetica,sans-serif}
    .destroy-related-card{display:flex;min-height:250px;flex-direction:column;justify-content:flex-end;border-radius:8px;background:#f4f4f4;color:#111;text-decoration:none;overflow:hidden;padding:20px}.destroy-related-card img{width:calc(100% + 40px);height:170px;object-fit:cover;margin:-20px -20px 16px}.destroy-related-card span{font:800 17px/1.25 Arial,Helvetica,sans-serif}
    .destroy-faq{display:grid;gap:10px}.destroy-faq details{border:1px solid #ececec;border-radius:8px;background:#fff;padding:16px}.destroy-faq summary{font:800 16px/1.3 Arial,Helvetica,sans-serif;cursor:pointer}
    .destroy-service-request{display:grid;grid-template-columns:1fr 1.05fr;gap:30px;margin:0 0 58px;padding:36px;border-radius:8px;background:#362d2d;color:#fff}.destroy-service-request .h2{color:#fff;text-align:left}.destroy-request-text p{color:rgba(255,255,255,.75)}.destroy-service-request form{display:grid;gap:12px}.destroy-service-request input,.destroy-service-request textarea{width:100%;box-sizing:border-box;border:0;border-radius:8px;background:#fff;color:#111;padding:14px 18px;font:500 15px/1.2 Arial,Helvetica,sans-serif}
    @media(max-width:900px){.destroy-service-container{width:calc(100% - 32px);max-width:none}.destroy-service-hero{min-height:420px;margin-bottom:36px}.destroy-service-hero__content{padding:34px 22px}.destroy-service-hero h1{font-size:32px}.destroy-service-intro,.destroy-check-list,.destroy-facts,.destroy-steps,.destroy-related-grid,.destroy-service-request{grid-template-columns:1fr}.destroy-elementor-section{padding-bottom:38px}.destroy-service-works .swiper-wrapper{grid-auto-columns:minmax(250px,86%);gap:18px}.destroy-service-works img{height:300px}.destroy-service-request{padding:24px}}
  </style>`;
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

        {page.kind === "service" || page.kind === "object" ? (
          <WorksSlider page={page} />
        ) : (
          <section className="custom-section">
            <h2>Фото и примеры работ</h2>
            <div className="custom-gallery">
              {page.gallery.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" />
              ))}
            </div>
          </section>
        )}

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
    { title: "Квартиры", image: img.apartment },
    { title: "Дома", image: img.house },
    { title: "Коммерческие помещения", image: img.objectAlt },
    { title: "Школы", image: img.object },
    { title: "Демонтаж после пожара", image: img.fire },
    { title: "Сантехнические кабины", image: img.wall },
  ];
  return (
    <section className="custom-section">
      <h2>Категории видео</h2>
      <div className="custom-video-grid">
        {categories.map((category) => (
          <article key={category.title} style={{ backgroundImage: `url(${category.image})` }}>
            <div className="custom-play">▶</div>
            <h3>{category.title}</h3>
            <p>Подготовлено место под загрузку реальных роликов работ DESTROY.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorksSlider({ page }: { page: CustomPage }) {
  const title =
    page.kind === "object" ? `Фото объекта: ${page.title}` : `Наши работы: ${page.title.toLowerCase()}`;

  return (
    <section
      className="elementor-element elementor-element-fc35a16 elementor-widget elementor-widget-html custom-section custom-works"
      data-id="fc35a16"
      data-element_type="widget"
      data-e-type="widget"
      data-widget_type="html.default"
    >
      <h2 className="h2">{title}</h2>
      <div className="swiper mySwiper custom-works__slider" aria-label={title}>
        <div className="swiper-wrapper">
          {page.gallery.map((src) => (
            <div className="swiper-slide" key={src}>
              <img src={src} alt={page.title} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="swiper-nav-wrapper" aria-hidden="true">
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
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
      .custom-header{width:min(1070px,calc(100% - 32px));margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:18px 0 14px;background:#fff;color:#111}
      .custom-logo img{width:145px;height:auto;display:block}.custom-header nav{display:flex;gap:24px;align-items:center;justify-content:center;flex-wrap:wrap}.custom-header a{color:#111;text-decoration:none;font:600 11px/1.2 Arial,Helvetica,sans-serif;text-transform:uppercase;letter-spacing:0}.custom-phone{color:#c91515!important;font-weight:800!important;white-space:nowrap}
      .custom-page{width:min(1070px,calc(100% - 32px));margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#222;background:#fff}.custom-hero{position:relative;min-height:360px;display:flex;align-items:flex-end;overflow:hidden;border-radius:8px;background:#211b1b}.custom-hero--compact{min-height:330px}.custom-hero>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.custom-hero__shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.45) 55%,rgba(0,0,0,.18)),linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.7))}.custom-hero__content{position:relative;max-width:720px;padding:44px 38px;color:#fff}.custom-hero span,.custom-request span{display:block;margin:0 0 12px;color:#c91515;background:transparent;border-radius:0;padding:0;font-size:12px;line-height:1.2;font-weight:800;text-transform:uppercase}.custom-hero h1{margin:0 0 14px;color:#fff;font-family:Georgia,"Times New Roman",serif;font-size:clamp(28px,4vw,46px);line-height:1.06;font-weight:800;text-transform:uppercase;letter-spacing:0}.custom-hero p{max-width:660px;margin:0;font-size:16px;line-height:1.45;color:rgba(255,255,255,.88)}.custom-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}.custom-actions a,.custom-calc-result a,.custom-request button{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:8px;background:#c91515;color:#fff!important;text-decoration:none;padding:13px 22px;font:800 13px/1 Arial,Helvetica,sans-serif;text-transform:uppercase}.custom-actions a:nth-child(2){background:#fff;color:#111!important}
      .custom-section{padding:46px 0}.custom-section+.custom-section{border-top:1px solid #ececec}.custom-section h2,.custom-page .h2{margin:0 0 22px;color:#222;font-family:Georgia,"Times New Roman",serif;font-size:clamp(26px,3.2vw,36px);line-height:1.12;font-weight:800;text-transform:uppercase;text-align:center}.custom-section p{font-size:16px;line-height:1.55;color:#333}.custom-grid-2{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:34px;align-items:start}.custom-grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.custom-checks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:0;padding:0;list-style:none}.custom-checks li{position:relative;padding:13px 14px 13px 38px;border:1px solid #eeeeee;border-radius:8px;background:#fff;font-size:13px;font-weight:600;line-height:1.3}.custom-checks li:before{content:"";position:absolute;left:14px;top:15px;width:13px;height:13px;border:1px solid #c91515;border-radius:3px;background:#fff}.custom-checks li:after{content:"";position:absolute;left:18px;top:18px;width:5px;height:5px;border-radius:50%;background:#c91515}.custom-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.custom-gallery img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:8px}.custom-works{overflow:hidden}.custom-works__slider{position:relative;width:100%;overflow:visible}.custom-works .swiper-wrapper{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(280px,31%);gap:40px;overflow-x:auto;overflow-y:hidden;padding:0 2px 16px;scroll-snap-type:x mandatory;scrollbar-width:thin;scrollbar-color:#b01212 #f2f2f2}.custom-works .swiper-wrapper::-webkit-scrollbar{height:10px}.custom-works .swiper-wrapper::-webkit-scrollbar-thumb{background:#b01212;border-radius:999px}.custom-works .swiper-slide{scroll-snap-align:center;min-width:0}.custom-works .swiper-slide img{display:block;width:100%;height:360px;object-fit:cover;border-radius:20px;background:#f2f2f2}.custom-works .swiper-nav-wrapper{display:none}.custom-facts{width:min(1070px,calc(100% - 32px));margin:32px auto 0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:#2f2727;color:#fff}.custom-facts div{padding:24px;background:#382f2f}.custom-facts span{display:block;opacity:.68;margin-bottom:8px;font-size:13px}.custom-facts strong{font-size:18px}.custom-step{border:1px solid #ececec;border-radius:8px;padding:22px;background:#fff;box-shadow:none}.custom-step span{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#c91515;color:#fff;font-weight:900}.custom-step h3{margin:16px 0 8px;color:#222;font-size:18px;line-height:1.2;font-weight:800}.custom-step p{font-size:14px}.custom-related,.custom-video-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.custom-related a,.custom-video-grid article{position:relative;min-height:255px;border-radius:8px;background:#f2f2f2;color:#111;text-decoration:none;padding:20px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;background-size:cover;background-position:center}.custom-video-grid article:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05) 25%,rgba(0,0,0,.55) 67%,rgba(0,0,0,.9));z-index:0}.custom-video-grid article>*{position:relative;z-index:1}.custom-video-grid h3,.custom-video-grid p{color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.75)}.custom-video-grid h3{margin:0 0 8px;font-size:22px;line-height:1.2}.custom-video-grid p{margin:0;font-size:14px;color:rgba(255,255,255,.82)}.custom-related img{width:100%;height:160px;object-fit:cover;border-radius:8px;margin-bottom:14px}.custom-related strong{font-size:17px}.custom-faq{display:grid;gap:10px}.custom-faq details{border:1px solid #ececec;border-radius:8px;padding:16px;background:#fff}.custom-faq summary{font-weight:800;cursor:pointer}.custom-play{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:#c91515;color:#fff;margin-bottom:16px;font-size:14px}
      .custom-request{margin:46px 0 58px;padding:34px;border-radius:8px;background:#362d2d;color:#fff;display:grid;grid-template-columns:1fr 1.1fr;gap:30px}.custom-request h2{margin:0 0 12px;color:#fff;font-size:32px;line-height:1.12;font-family:Georgia,"Times New Roman",serif;text-transform:uppercase}.custom-request p{color:rgba(255,255,255,.75);line-height:1.55}.custom-request form{display:grid;gap:12px}.custom-request input,.custom-request textarea,.custom-calculator input,.custom-calculator select{width:100%;box-sizing:border-box;border:0;border-radius:8px;background:#fff;color:#111;padding:14px 18px;font:500 15px/1.2 Arial,Helvetica,sans-serif}.custom-request textarea{border-radius:8px}
      .custom-calculator{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;margin:44px 0;padding:34px;border-radius:8px;background:#362d2d;color:#fff}.custom-calc-panel{display:grid;gap:16px}.custom-calc-panel label{display:grid;gap:8px;color:rgba(255,255,255,.78);font-weight:700}.custom-checkline{display:flex!important;align-items:center;gap:12px}.custom-checkline input{width:18px!important;height:18px}.custom-calc-panel button{border:0;border-radius:8px;background:#c91515;color:#fff;padding:15px 22px;font-weight:900;font-size:14px;text-transform:uppercase}.custom-calc-result{border-radius:8px;background:#fff;color:#111;padding:30px;display:flex;flex-direction:column;justify-content:center}.custom-calc-result span{color:#777;font-weight:800}.custom-calc-result strong{font-size:42px;line-height:1.1;margin:10px 0}.custom-footer{display:flex;align-items:center;justify-content:space-between;gap:24px;background:#171313;color:#fff;padding:28px max(16px,calc((100% - 1070px)/2));margin-top:0}.custom-footer img{width:145px}.custom-footer div{display:flex;gap:20px;flex-wrap:wrap}.custom-footer a{color:#fff;text-decoration:none;font:600 12px/1.3 Arial,Helvetica,sans-serif}
      @media(max-width:900px){.custom-header{align-items:flex-start;flex-direction:column}.custom-header nav{gap:12px}.custom-grid-2,.custom-grid-3,.custom-gallery,.custom-related,.custom-video-grid,.custom-request,.custom-calculator,.custom-facts,.custom-checks{grid-template-columns:1fr}.custom-hero{min-height:420px}.custom-hero__content{padding:34px 22px}.custom-hero p{font-size:15px}.custom-section{padding:38px 0}.custom-request{margin:38px 0;padding:24px}.custom-calculator{padding:24px}.custom-calc-result strong{font-size:34px}.custom-footer{align-items:flex-start;flex-direction:column;padding:28px 16px}.custom-video-grid article{min-height:230px}}
    `}</style>
  );
}
