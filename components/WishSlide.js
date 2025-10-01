// /components/WishSlide.js
import styles from './WishSlide.module.css';

const WishSlide = ({ title, message }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default WishSlide;