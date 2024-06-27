import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ItemsModal } from '../ItemsModal/';
import { getExcurs } from '../../redux/slices/excursSlice';

import styles from './modal.module.scss';

export const Modal = ({ close }) => {
  const { excurs } = useSelector((state) => state.excurs);
  const { status } = useSelector((state) => state.excurs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExcurs());
  }, [dispatch]);
  return (
    <div className={`${styles.popup}`}>
      <div className={`${styles.p_top} flex gap-20 a-i-c j-c-b`}>
        <h2 className={`${styles.p_title}`}>Программы экскурсий</h2>
        <button onClick={close} className={`${styles.p_btn}`} type="button">
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
            <path d="M19 19L13 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 19L19 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={`${styles.wrapper} flex f-d-col gap-20`}>
        {status === 'success' ? (
          excurs.map((item) => <ItemsModal key={item.id} {...item} close={close} />)
        ) : (
          <h3 className={`${styles.error}`}>
            Произошла ошибка при получении данных, просим извинения :(
          </h3>
        )}
      </div>
    </div>
  );
};
