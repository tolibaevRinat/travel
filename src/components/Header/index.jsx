import React, { useState } from 'react';

import styles from './header.module.scss';

const menuLinks = [
  {
    title: 'О нас',
    to: '#!',
  },
  {
    title: 'Деятелтность',
    to: '#!',
  },
  {
    title: 'Наша продукция',
    to: '#!',
  },
  {
    title: 'Галерея',
    to: '#!',
  },
  {
    title: 'Экскурсии',
    to: '#!',
  },
  {
    title: 'отзывы',
    to: '#!',
  },
  {
    title: 'контакты',
    to: '#!',
  },
];

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className={`${styles.header} abs t0 l0`}>
      <div className={`${styles.wrapper} fixed t0 l0 `}>
        <div className={`${styles.body} container flex a-i-c gap-20`}>
          <a className={`${styles.logo} logo`} href="#!">
            GEREY-TUZ
          </a>
          <ul
            onClick={() => setActive(false)}
            className={`${styles.menu} ${active ? 'show' : ''} flex al-c`}
          >
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a className={`${styles.item}`} href={link.to}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setActive(!active)}
            className={`${styles.menu_icon} ${active ? 'active' : ''} rel f-d-col j-c-b `}
            type="button"
          >
            <span className="rel"></span>
            <span className="rel"></span>
            <span className="rel"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
