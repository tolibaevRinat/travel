import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { useMediaQuery } from 'react-responsive';

import styles from './footer.module.scss';

export const Footer = () => {
  const isMobile = useMediaQuery({ minWidth: 767.98 });
  return (
    <section className={`${styles.root}`}>
      <div className={`${styles.body} container flex f-d-col`}>
        <a className={`${styles.logo}`} href="#!">
          Gerey-Tuz
        </a>
        <Accordion transition transitionTimeout={300}>
          <AccordionItem header="Навигация" disabled={isMobile} initialEntered={isMobile}>
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

          <AccordionItem header="Адрес" disabled={isMobile} initialEntered={isMobile}>
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

          <AccordionItem header="Контакты" disabled={isMobile} initialEntered={isMobile}>
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

          <AccordionItem header="Контакты" disabled={isMobile} initialEntered={isMobile}>
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
        <h3 className={`${styles.subtitle}`}>
          @2020 ООО Агрофирма «Герей-Тюз». Все права защищены.
        </h3>
      </div>
    </section>
  );
};
