// components/Envelope.js
'use client';
import { useState } from 'react';
import styles from './Envelope.module.css';

const Envelope = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.envelopeContainer}>
      {!isOpen ? (
        <div className={styles.closedEnvelope} onClick={handleToggle}>
          <div className={styles.flap}></div>
          <div className={styles.body}></div>
          <p className={styles.label}>Klik untuk Buka</p>
        </div>
      ) : (
        <div className={styles.openEnvelope}>
          <p className={styles.message}>{message}</p>
          <button onClick={handleToggle} className={styles.closeButton}>
            Tutup
          </button>
        </div>
      )}
    </div>
  );
};

export default Envelope;