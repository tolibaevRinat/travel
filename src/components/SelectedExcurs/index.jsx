import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './selectedExcurs.module.scss';

export const SelectedExcurs = ({ close }) => {
  const dates = useRef([]);
  const days = useRef([]);
  const months = useRef([]);
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);
  const [hour, setHour] = useState(0);
  let [count, setCount] = useState(1);

  const allMonths = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const hours = [
    {
      id: 0,
      from: '10:00',
      to: '11:30',
    },
    {
      id: 1,
      from: '12:00',
      to: '13:30',
    },
    {
      id: 2,
      from: '14:00',
      to: '15:30',
    },
    {
      id: 3,
      from: '16:00',
      to: '17:30',
    },
  ];

  const getMonthName = (date) => allMonths[date.getMonth()];

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    setYear(currentYear);
  }, []);

  useEffect(() => {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      dates.current.push(nextDay.getDate());
      months.current.push(getMonthName(nextDay));
      days.current.push(daysOfWeek[nextDay.getDay()]);
    }
  }, []);

  const currentDay = (shortName) =>
    ({
      Вс: 'Воскресенье',
      Пн: 'Понедельник',
      Вт: 'Вторник',
      Ср: 'Среда',
      Чт: 'Четверг',
      Пт: 'Пятница',
      Сб: 'Суббота',
    }[shortName]);

  const currentMonth = (fullName) =>
    ({
      Январь: 'Янв.',
      Февраль: 'Фев.',
      Март: 'Март',
      Апрель: 'Апр.',
      Май: 'Май',
      Июнь: 'Июнь',
      Июль: 'Июль',
      Август: 'Авг.',
      Сентябрь: 'Сен.',
      Октябрь: 'Окт.',
      Ноябрь: 'Нояб.',
      Декабрь: 'Дек.',
    }[fullName]);

  const handleSubmit = () => {
    alert(
      `Спасибо за бронь. Ждём вас в ${
        hours.find((obj) => obj.id === hour).from
      } в назначенное место`,
    );
    close();
  };

  const { checkExcurs } = useSelector((state) => state.excurs);
  return (
    <section className={`${styles.root}`}>
      <div className={`${styles.top} flex a-i-c j-c-b`}>
        <h2 className={`${styles.title}`}>Выбрать время</h2>
        <button onClick={close} className={`${styles.btn}`} type="button">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="circle"
              d="M6.3335 16C6.3335 21.3388 10.6614 25.6667 16.0002 25.6667C21.3389 25.6667 25.6668 21.3388 25.6668 16C25.6668 10.6613 21.3389 6.33334 16.0002 6.33334C10.6614 6.33334 6.3335 10.6613 6.3335 16Z"
            />
            <path d="M19 19L13 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 19L19 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={`${styles.date}`}>
        <h3 className={`${styles.date_title}`}>
          {months.current[day]} {year}
        </h3>
        <div className={`${styles.date_btns} flex`}>
          {dates.current.map((date, index) => (
            <button
              key={index}
              onClick={() => setDay(index)}
              className={`${styles.date_btn} ${
                day === index ? styles.active : ''
              } flex f-d-col a-i-c`}
              type="button"
            >
              <div className="f-cen">{date}</div>
              <span>{days.current[index]}</span>
            </button>
          ))}
        </div>
        <div className={`${styles.time}`}>
          <h3 className={`${styles.time_title}`}>
            {currentDay(days.current[day])}, {months.current[day]}
          </h3>
          <div className={`${styles.time_hours} flex gap-20`}>
            {hours.map((obj, index) => (
              <button
                key={index}
                onClick={() => setHour(index)}
                className={`${styles.time_btn} ${hour === index ? styles.check : ''} f-cen`}
                type="button"
              >
                <span>
                  {obj.from} - {obj.to}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className={`${styles.count} flex a-i-c j-c-b gap-20`}>
          <h3 className={`${styles.count_title}`}>Количество взрослых</h3>
          <div className={`${styles.wrapper} flex a-i-c gap-20`}>
            <button
              onClick={() => setCount(--count)}
              disabled={count < 2}
              className={`${styles.count_btn} f-cen`}
              type="button"
            >
              -
            </button>
            <div className={`${styles.count_item} f-cen`}>{count}</div>
            <button
              onClick={() => setCount(++count)}
              className={`${styles.count_btn} f-cen`}
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <div className={`${styles.order}`}>
          <div className={`${styles.order_main}`}>
            <div className={`${styles.order_top} flex a-i-c j-c-b`}>
              <h2 className={`${styles.title}`}>Ваш заказ</h2>
            </div>
            <div className={`${styles.order_body} flex j-c-b`}>
              <div className={`${styles.order_content} flex`}>
                <picture className={`${styles.img}`}>
                  <source srcSet={checkExcurs?.img?.webp} type="image/webp" />
                  <img src={checkExcurs?.img?.jpg} alt="Девущка" />
                </picture>

                <div className={`${styles.detailes} flex f-d-col`}>
                  <div className={`${styles.subtitle}`}>{checkExcurs?.title}</div>
                  <span>
                    {dates.current[day]} {currentMonth(months.current[day])}{' '}
                    {hours.find((obj) => obj.id === hour).from}
                  </span>
                  <span>{count} чел.</span>
                </div>
              </div>
              <div className={`${styles.order_price}`}>
                {checkExcurs?.price * count} <span>₽</span>
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className={`${styles.order_btn} f-cen`} type="submit">
            Забронировать
          </button>
        </div>
      </div>
    </section>
  );
};
