"use client";

import { useMemo, useState } from "react";

const objectRate = {
  flat: 900,
  house: 1200,
  commercial: 1100,
  site: 750,
};

const workRate = {
  light: 0.75,
  standard: 1,
  hard: 1.45,
  tech: 1.75,
};

const objectLabels = {
  flat: "квартира / помещение",
  house: "дом / строение",
  commercial: "коммерческий объект",
  site: "участок / территория",
};

const workLabels = {
  light: "легкий демонтаж",
  standard: "стандартный демонтаж",
  hard: "сложный демонтаж",
  tech: "работа техникой",
};

type ObjectKey = keyof typeof objectRate;
type WorkKey = keyof typeof workRate;

export default function CustomCalculator() {
  const [objectType, setObjectType] = useState<ObjectKey>("flat");
  const [area, setArea] = useState(50);
  const [workType, setWorkType] = useState<WorkKey>("standard");
  const [trash, setTrash] = useState(true);

  const total = useMemo(() => {
    const meters = Math.max(1, Number(area) || 1);
    let value = objectRate[objectType] * meters * workRate[workType];
    if (trash) value += meters * 350;
    return Math.round(value / 100) * 100;
  }, [area, objectType, trash, workType]);

  const formatted = new Intl.NumberFormat("ru-RU").format(total);
  const meters = Math.max(1, Number(area) || 1);

  return (
    <section className="custom-calculator" id="calc-widget">
      <div className="custom-calc-panel">
        <label>
          Тип объекта
          <select value={objectType} onChange={(event) => setObjectType(event.target.value as ObjectKey)}>
            <option value="flat">Квартира / помещение</option>
            <option value="house">Дом / строение</option>
            <option value="commercial">Коммерческий объект</option>
            <option value="site">Участок / территория</option>
          </select>
        </label>
        <label>
          Площадь, м2
          <input
            type="number"
            min="1"
            value={area}
            onChange={(event) => setArea(Number(event.target.value))}
          />
        </label>
        <label>
          Состав работ
          <select value={workType} onChange={(event) => setWorkType(event.target.value as WorkKey)}>
            <option value="light">Легкий демонтаж</option>
            <option value="standard">Стандартный демонтаж</option>
            <option value="hard">Сложный демонтаж</option>
            <option value="tech">Работа техникой</option>
          </select>
        </label>
        <label className="custom-checkline">
          <input type="checkbox" checked={trash} onChange={(event) => setTrash(event.target.checked)} />
          Нужен вывоз мусора
        </label>
      </div>
      <div className="custom-calc-result">
        <span>Предварительно</span>
        <strong>от {formatted} ₽</strong>
        <p>
          Расчет ориентировочный: {meters} м2, {objectLabels[objectType]}, {workLabels[workType]}
          {trash ? ", вывоз мусора включен." : ", без вывоза мусора."}
        </p>
        <a href="#custom-request">Получить точную смету</a>
      </div>
    </section>
  );
}
