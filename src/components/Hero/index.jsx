import React from "react";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";

import { ItemsModal } from "../ItemsModal/";
import { getExcurs } from "../../redux/slices/excursSlice";

import styles from "./hero.module.scss";

export const Hero = () => {
  const { excurs } = useSelector((state) => state.excurs);
  const { status } = useSelector((state) => state.excurs);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getExcurs());
  }, [dispatch]);

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
          <h1 className={`${styles.title} title`}>
            Мы рады поделиться своей историей
          </h1>
          <p className={`${styles.text} text`}>
            Мы расскажем о всех секретах производства, заглянем за кулисы,
            покажем от начала и до конца путь создание изысканного напитка, а в
            конце накроем для Вас стол и в теплом кругу попробуем наши вина
          </p>

          <Popup
            trigger={
              <button className={`${styles.reservation} f-cen`} type="button">
                Забронировать
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className={`${styles.popup}`}>
                <div className={`${styles.p_top} flex gap-20 a-i-c j-c-b`}>
                  <h2 className={`${styles.p_title}`}>Программы экскурсий</h2>
                  <button
                    onClick={close}
                    className={`${styles.p_btn}`}
                    type="button"
                  >
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
                      <path
                        d="M19 19L13 13"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 19L19 13"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                {status === "success" ? (
                  excurs.map((item) => (
                    <ItemsModal key={item.id} {...item} close={close} />
                  ))
                ) : (
                  <h3>
                    Произошла ошибка при получении данных, просим извинения :(
                  </h3>
                )}
              </div>
            )}
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
