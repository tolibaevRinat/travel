import React from 'react';

import styles from './reviewsItem.module.scss';
export const ReviewsItem = ({ color, author, status, date, description }) => {
  return (
    <li>
      <article className={`${styles.item}`}>
        <div className={`${styles.top} flex a-i-c gap-10`}>
          <div style={{ background: `${color}` }} className={`${styles.avatar} f-cen`}>
            {author[0]}
          </div>
          <div className="flex f-d-col">
            <div className={`${styles.name}`}>{author}</div>
            <div className={`${styles.status}`}>{status}</div>
          </div>
        </div>

        <div className={`${styles.center} flex a-i-c`}>
          <div className="flex a-i-c gap-2">
            {[...new Array(5)].map((_, index) => (
              <img key={index} src="icons/star.svg" alt=" " />
            ))}
          </div>
          <div className={`${styles.date}`}>{date}</div>
        </div>

        <p className={`${styles.text}`}>{description}</p>
      </article>
    </li>
  );
};
