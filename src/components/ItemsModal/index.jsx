import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './itemsModal.module.scss';
import { getExcurs } from '../../redux/slices/excursSlice';

export const ItemsModal = ({ close }) => {
  const { excurs } = useSelector((state) => state.excurs);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getExcurs());
  }, []);

  console.log(excurs);
  return (
    <section className={`${styles.itemsModal}`}>
      <div className={`${styles.top} flex gap-20 a-i-c j-c-b`}>
        <h2 className={`${styles.title}`}>Программы экскурсий</h2>
        <button onClick={close} className={`${styles.btn}`} type="button">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.3335 16C6.3335 21.3388 10.6614 25.6667 16.0002 25.6667C21.3389 25.6667 25.6668 21.3388 25.6668 16C25.6668 10.6613 21.3389 6.33334 16.0002 6.33334C10.6614 6.33334 6.3335 10.6613 6.3335 16Z"
              fill="#48484A"
            />
            <path
              d="M19 19L13 13"
              stroke="#242428"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 19L19 13"
              stroke="#242428"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
