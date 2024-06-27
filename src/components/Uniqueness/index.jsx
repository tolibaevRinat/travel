import { useEffect, useRef } from 'react';
import Popup from 'reactjs-popup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './uniqueness.module.scss';

import { Modal } from '../Modal';

const uniList = [
  {
    title: 'Уникальная локация для туризма',
    text: `Семейная винодельня в Дагестане - это редкость. Наше
 предприятие расположено в получасе езды от Махачкалы
 на пути большинства туристических маршрутов по Южному
 Дагестану и зачастую становится финальной точкой
маршрута, где туристы могут расслабиться после долгой
 поездки.`,
  },
  {
    title: 'Место созданное для вина',
    text: `Вкус и качество
закладывает сама природа. 
Дагестан обладает
 уникальным набором факторов для выращивания
 качественного сырья для вина – терруар предгорья, где и
 растет наш виноград, эксперты сравнивают с
 приморскими районами Италии и Сицилии и именно это
 определяет особое качество нашей ягоды`,
  },
  {
    title: 'История которую надо попробовать на вкус',
    text: `В ходе дегустации мы угостим
такими винами как Каберне,
Саперави, Ркацители, Рислинг и Мускат. К винам будут поданы разные сеты закусок.
Аутентичный дегустационный зал и летняя площадка
позволяют принимать группы до 30-40 человек. 
Кроме
 того, наши гости всегда могут приобрести
понравившееся вино по минимально возможной цене
прямо с винодельни.`,
  },
];

export const Uniqueness = ({ isMobile }) => {
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
          trigger: '.uniqueness',
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
    <section className={`${styles.uniqueness} uniqueness`}>
      <div className={`${styles.body} container flex f-d-col`}>
        <h2 className={`${styles.title} big-title`} ref={titleRef}>
          В чем уникальность?
        </h2>
        <ul className={`${styles.list}`}>
          {uniList.map((item, index) => (
            <li key={index} className={`${styles.item}`} ref={addToRefs}>
              <div className={`${styles.main} flex a-i-c`}>
                <div className={`${styles.number}`}>0{index + 1}</div>
                <h3 className={`${styles.subtitle}`}>{item.title}</h3>
              </div>
              <p className={`${styles.text}`}>{item.text}</p>
            </li>
          ))}
        </ul>
        <Popup
          trigger={
            <button className={`${styles.btn} f-cen`} type="button">
              К экскурсиям
            </button>
          }
          modal
          nested
          onOpen={() => (document.body.style.overflow = 'hidden')}
          onClose={() => (document.body.style.overflow = 'auto')}
        >
          <Modal />
        </Popup>
      </div>
    </section>
  );
};
