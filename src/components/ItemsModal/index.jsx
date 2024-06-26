import React from "react";

import styles from "./itemsModal.module.scss";

export const ItemsModal = ({ close, id, img, title, age, duration, price }) => {
  return (
    <article className={`${styles.root} flex gap-40`}>
      <picture className={`${styles.img}`}>
        <source srcSet={img.webp} type="image/webp" />
        <img src={img.jpg} alt="Девушка" loading="lazy" />
      </picture>
      <div className={`${styles.content}`}>
        <h3 className={`${styles.title}`}>{title}</h3>
      </div>
    </article>
  );
};
