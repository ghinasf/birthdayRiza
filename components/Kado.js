// /components/Kado.js
'use client';
import { useState } from 'react';
import styles from './Kado.module.css';
import Image from 'next/image';

const Kado = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      {!isOpen ? (
        <div className={styles.closedKado} onClick={handleOpen}>
          <h2>Klik aku buat buka!</h2>
        </div>
      ) : (
        <div className={styles.openKado}>
          <Image 
            src="/cake.gif" 
            alt="Birthday Cake" 
            width={300} 
            height={300} 
            unoptimized 
          />
          <p className={styles.message}>Yeayyy Happy Birthday Kakak Rizaaa!</p>
          <button className={styles.nextButton} onClick={onNext}>
            Next yaa, ada kejutan
          </button>
        </div>
      )}
    </div>
  );
};

export default Kado;