// app/page.js
'use client';
import { useState, useRef } from 'react';
import Slide1 from '../components/Slide1';
import Kado from '../components/Kado';
import EnvelopeGallery from '../components/EnvelopeGallery';
import styles from './page.module.css'; // Buat file ini

export default function Home() {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  const handleStart = () => {
    setStep(1);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return <Slide1 onStart={handleStart} />;
      case 1:
        return (
          <>
            <h1>Selamat tanggal 2 oktober Kakakkk!</h1>
            <p>Hmmmm ada apa yaa?</p>
            <button onClick={handleNext}>Ayo next</button>
          </>
        );
      case 2:
        return <Kado onNext={handleNext} />;
      case 3:
        return <EnvelopeGallery onNext={handleNext} />; // Panggil komponen baru
      case 4:
        return (
          <div className={styles.finalScreen}>
            <h1>Makasii yaa udah diliat sampe akhir, bahagia selalu dan selamat merayakan hari kelahiran!</h1>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main>
      <audio ref={audioRef} src="/music.mp3" loop />
      {renderContent()}
    </main>
  );
}