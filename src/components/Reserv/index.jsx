import Popup from 'reactjs-popup';

import styles from './reserv.module.scss';
import { Modal } from '../Modal';

export const Reserv = () => {
  return (
    <section className={`${styles.reserv}`}>
      <div className={`${styles.body} container`}>
        <h2 className={`${styles.title} big-title`}>Забронируйте экскурсию прямо сейчас</h2>
        <ul className={`${styles.list} flex f-d-col `}>
          <Popup
            trigger={
              <li>
                <article className={`${styles.item} flex`}>
                  <picture className={`${styles.img} rel z-5`}>
                    <source srcSet="reserv.webp" type="image/webp" />
                    <img src="reserv.jpg" alt="Девушка" />
                  </picture>
                  <div className={`${styles.contant}`}>
                    <h3 className={`${styles.subtitle}`}>Обзорная экскурсия</h3>
                    <h4 className={`${styles.label}`}>
                      Обзорная экскурсия по территории винодельни и завода.
                    </h4>
                    <ul className={`${styles.sublist}`}>
                      <li>Знакомство с историей бренда "Герей-Тюз".</li>
                      <li>Увлекательный рассказ о всех этапах производства вин.</li>
                    </ul>
                    <div className={`${styles.bottom_list}`}>
                      <div className={`${styles.time} flex f-d-col`}>
                        Длительность:
                        <span>30 мин</span>
                      </div>
                      <div className={`${styles.age} flex f-d-col`}>
                        Возраст:
                        <span>16+</span>
                      </div>
                      <div className={`${styles.price}`}>
                        600 Р<span>/чел</span>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            }
            modal
            nested
            onOpen={() => (document.body.style.overflow = 'hidden')}
            onClose={() => (document.body.style.overflow = 'auto')}
          >
            <Modal />
          </Popup>
          <Popup
            trigger={
              <li>
                <article className={`${styles.item} flex`}>
                  <picture className={`${styles.img} rel z-5`}>
                    <source srcSet="reserv.webp" type="image/webp" />
                    <img src="reserv.jpg" alt="Девушка" />
                  </picture>
                  <div className={`${styles.contant}`}>
                    <h3 className={`${styles.subtitle}`}>Дегустация</h3>
                    <ul className={`${styles.sublist}`}>
                      <li>Знакомство с линейкой вин "Герей-Тюз".</li>
                      <li>Дегустация 5 сортов вин.</li>
                      <li>Во время дегустации будут поданы холодные закуски.</li>
                    </ul>
                    <div className={`${styles.bottom_list}`}>
                      <div className={`${styles.time} flex f-d-col`}>
                        Длительность:
                        <span>30-40 мин</span>
                      </div>
                      <div className={`${styles.age} flex f-d-col`}>
                        Возраст:
                        <span>18+</span>
                      </div>
                      <div className={`${styles.price}`}>
                        1200 Р<span>/чел</span>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            }
            modal
            nested
            onOpen={() => (document.body.style.overflow = 'hidden')}
            onClose={() => (document.body.style.overflow = 'auto')}
          >
            <Modal />
          </Popup>
          <Popup
            trigger={
              <li>
                <article className={`${styles.item} flex`}>
                  <picture className={`${styles.img} rel z-5`}>
                    <source srcSet="reserv.webp" type="image/webp" />
                    <img src="reserv.jpg" alt="Девушка" />
                  </picture>
                  <div className={`${styles.contant}`}>
                    <h3 className={`${styles.subtitle}`}>Экскурсия с дегустацией</h3>
                    <h4 className={`${styles.label}`}>
                      Обзорная экскурсия по территории винодельни и завода
                    </h4>
                    <ul className={`${styles.sublist}`}>
                      <li>Знакомство с историей бренда "Герей-Тюз"</li>
                      <li>Увлекательный рассказ о всех этапах производства вин</li>
                      <li>Дегустация 5 сортов вин</li>
                      <li>Во время дегустации будут поданы холодные закуски</li>
                    </ul>
                    <div className={`${styles.bottom_list}`}>
                      <div className={`${styles.time} flex f-d-col`}>
                        Длительность:
                        <span>1,5-2 часа</span>
                      </div>
                      <div className={`${styles.age} flex f-d-col`}>
                        Возраст:
                        <span>18+</span>
                      </div>
                      <div className={`${styles.price}`}>
                        1200 Р<span>/чел</span>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            }
            modal
            nested
            onOpen={() => (document.body.style.overflow = 'hidden')}
            onClose={() => (document.body.style.overflow = 'auto')}
          >
            <Modal />
          </Popup>
          <Popup
            trigger={
              <li>
                <article className={`${styles.item} flex`}>
                  <picture className={`${styles.img} rel z-5`}>
                    <source srcSet="reserv.webp" type="image/webp" />
                    <img src="reserv.jpg" alt="Девушка" />
                  </picture>
                  <div className={`${styles.contant}`}>
                    <h3 className={`${styles.subtitle}`}>Индивидуальная экскурсия</h3>
                    <div className={`${styles.top_items}`}>
                      <h4 className={`${styles.label}`}>Закрытая группа</h4>
                      <ul className={`${styles.sublist}`}>
                        <li>Дегустация 5+ сортов вин (подача новинок на усмотрении технолога)</li>
                        <li>Возможность проведения мероприятий, корпоративов</li>
                        <li>Возможность заказа горячей еды</li>
                        <li>Во время дегустации будут поданы холодные закуски</li>
                      </ul>
                    </div>
                    <div className={`${styles.bottom_items}`}>
                      <h4 className={`${styles.label}`}>
                        Обзорная экскурсия по территории винодельни и завода
                      </h4>
                      <ul className={`${styles.sublist}`}>
                        <li>Знакомство с историей бренда "Герей-Тюз"</li>
                        <li>Увлекательный рассказ о всех этапах производства вин</li>
                      </ul>
                    </div>
                    <div className={`${styles.bottom_list}`}>
                      <div className={`${styles.time} flex f-d-col`}>
                        Длительность:
                        <span>2 часа</span>
                      </div>
                      <div className={`${styles.age} flex f-d-col`}>
                        Возраст:
                        <span>18+</span>
                      </div>
                      <div className={`${styles.price}`}>
                        1500 Р<span>/чел</span>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            }
            modal
            nested
            onOpen={() => (document.body.style.overflow = 'hidden')}
            onClose={() => (document.body.style.overflow = 'auto')}
          >
            <Modal />
          </Popup>
        </ul>
      </div>
    </section>
  );
};
