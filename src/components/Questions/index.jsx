import { useEffect, useRef } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './questions.module.scss';

export const Questions = ({ isMobile }) => {
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
          trigger: '.questions',
          start: 'top 70%',
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
  const questions = [
    {
      title: 'Первый часто задаваемый вопрос',
      question:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."',
    },
    {
      title: 'Первый часто задаваемый вопрос',
      question:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."',
    },
    {
      title: 'Третий часто задаваемый вопрос',
      question:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."',
    },
    {
      title: 'Четвертый часто задаваемый вопрос',
      question:
        'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."',
    },
  ];
  return (
    <section className={`${styles.questions} questions`}>
      <div className={`${styles.body} container`}>
        <h2 className={`${styles.title} title`} ref={titleRef}>
          Часто задаваемые вопросы
        </h2>
        <Accordion transition transitionTimeout={250}>
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              ref={addToRefs}
              header={question.title}
              initialEntered={index === 0}
            >
              {question.question}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
