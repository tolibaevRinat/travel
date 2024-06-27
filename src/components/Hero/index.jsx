import Popup from 'reactjs-popup';

import styles from './hero.module.scss';

import { Modal } from '../Modal';

export const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.body} container rel flex a-i-c j-c-b gap-20`}>
        <div className={`${styles.content}`}>
          <a className={`${styles.response} i-flex a-i-c`} href="#!">
            <div className={`${styles.count}`}>5.0</div>
            <div className={`${styles.stars} flex f-d-col a-c-s`}>
              <span>37 отзывов</span>
              <div className="flex gap-4">
                {[...new Array(5)].map((_, index) => (
                  <img key={index} src="icons/star.svg" alt=" " />
                ))}
              </div>
            </div>
          </a>
          <h1 className={`${styles.title} title`}>Мы рады поделиться своей историей</h1>
          <p className={`${styles.text} text`}>
            Мы расскажем о всех секретах производства, заглянем за кулисы, покажем от начала и до
            конца путь создание изысканного напитка, а в конце накроем для Вас стол и в теплом кругу
            попробуем наши вина
          </p>

          <Popup
            trigger={
              <button className={`${styles.reservation} f-cen`} type="button">
                Забронировать
              </button>
            }
            modal
            nested
            onOpen={() => (document.body.style.overflow = 'hidden')}
            onClose={() => (document.body.style.overflow = 'auto')}
          >
            {(close) => <Modal close={close} />}
          </Popup>
        </div>
        <div className={`${styles.img} rel f-cen`}>
          <picture className={`${styles.img} rel z-5`}>
            <source srcSet="girl.webp" type="image/webp" />
            <img src="girl.png" alt="девушка" />
          </picture>
        </div>
      </div>
    </section>
  );
};
