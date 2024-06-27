import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';

import styles from './itemsModal.module.scss';

import { setCheckExcur } from '../../redux/slices/excursSlice';
import { SelectedExcurs } from '../SelectedExcurs';

export const ItemsModal = ({ id, img, title, age, duration, price, close }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const checkItem = {
      id,
      img,
      title,
      age,
      duration,
      price,
    };
    dispatch(setCheckExcur(checkItem));
  };

  const handleOpenPopup = () => {
    document.body.style.overflow = 'hidden';
  };

  return (
    <Popup
      trigger={
        <div>
          <article onClick={handleClick} className={`${styles.root} flex`}>
            <picture className={`${styles.img}`}>
              <source srcSet={img.webp} type="image/webp" />
              <img src={img.jpg} alt="Девушка" loading="lazy" />
            </picture>
            <div className={`${styles.content} flex f-d-col`}>
              <h3 className={`${styles.title}`}>{title}</h3>
              <div className={`${styles.bottom} flex j-c-b gap-20 a-i-c`}>
                <div className={`${styles.descr}`}>
                  <div>Возраст: {age}+</div>
                  <div>Время: {duration}</div>
                </div>
                <div className={`${styles.price}`}>
                  {price} Р<span>/чел</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      }
      modal
      nested
      onOpen={handleOpenPopup}
    >
      {(close) => <SelectedExcurs close={close} />}
    </Popup>
  );
};
