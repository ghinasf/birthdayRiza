// /components/Slide1.js
'use client';
import { useState } from 'react';
import styles from './Slide1.module.css';

const Slide1 = ({ onStart }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Are You Ready?</h1>
      <button className={styles.button} onClick={onStart}>
        Start
      </button>
    </div>
  );
};

export default Slide1;