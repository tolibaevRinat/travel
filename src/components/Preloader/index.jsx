import styles from './preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={`${styles.root}`}>
      <img src="preloader.gif" alt=" " />
    </div>
  );
};
