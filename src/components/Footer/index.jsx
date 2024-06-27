import { useEffect, useRef } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './footer.module.scss';

export const Footer = ({ isMobile }) => {
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

  itemRefs.current = [];

  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (isMobile) {
      const title = titleRef.current;

      gsap.from(title, {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reserv',
          start: 'top 80%',
        },
      });

      itemRefs.current.forEach((item, index) => {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 100%',
          },
          delay: index * 0.2, // задержка для последовательной анимации
        });
      });
    }
  }, [isMobile]);
  return (
    <section className={`${styles.root}`}>
      <div className={`${styles.body} container flex f-d-col`}>
        <a ref={titleRef} className={`${styles.logo}`} href="#!">
          Gerey-Tuz
        </a>
        <Accordion transition transitionTimeout={300}>
          <AccordionItem
            ref={addToRefs}
            header="Навигация"
            disabled={isMobile}
            initialEntered={isMobile}
          >
            <ul>
              <li>
                <a href="#!">О нас</a>
              </li>
              <li>
                <a href="#!">Деятельность</a>
              </li>
              <li>
                <a href="#!">Продукция</a>
              </li>
              <li>
                <a href="#!">Отзывы</a>
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem
            ref={addToRefs}
            header="Адрес"
            disabled={isMobile}
            initialEntered={isMobile}
          >
            <ul>
              <li>
                <a
                  className={`${styles.w} flex f-d-col`}
                  href="https://maps.app.goo.gl/pMiWnSZgTeUp3EW29"
                  target="_blank"
                >
                  <span>368530, Республика Дагестан,</span>
                  <span>Карабудахкентский район,</span>
                  <span>с. Карабудахкент,</span>
                  <span>ул. Иновова, дом 23.</span>
                </a>
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem
            ref={addToRefs}
            header="Контакты"
            disabled={isMobile}
            initialEntered={isMobile}
          >
            <ul>
              <li>
                <a href="tel:792899623931">+7 928 9962-39-31</a>
              </li>
              <li>
                <a href="mailto:info@gerey-tuz.ru">info@gerey-tuz.ru</a>
              </li>
              <li>
                <a href="tel:792899623931">Обратная связь</a>
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem
            ref={addToRefs}
            header="Контакты"
            disabled={isMobile}
            initialEntered={isMobile}
          >
            <ul>
              <li>
                <a href="#!">Вконтакте</a>
              </li>
              <li>
                <a href="#!">Telegram</a>
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
        <h3 ref={addToRefs} className={`${styles.subtitle}`}>
          @2020 ООО Агрофирма «Герей-Тюз». Все права защищены.
        </h3>
      </div>
    </section>
  );
};
