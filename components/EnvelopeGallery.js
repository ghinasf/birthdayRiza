// components/EnvelopeGallery.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './EnvelopeGallery.module.css';

const Envelope = ({ photoSrc, message, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && onOpen) {
      onOpen();
    }
  };

  return (
    <div className={styles.envelopeContainer}>
      {!isOpen ? (
        <div className={styles.closedEnvelope} onClick={handleToggle}>
          <div className={styles.flap}></div>
          <div className={styles.body}></div>
          <p className={styles.label}>Buka Amplop</p>
        </div>
      ) : (
        <div className={styles.openEnvelope}>
          <Image src={photoSrc} alt="Riza's Photo" width={150} height={200} className={styles.photo} />
          <p className={styles.message}>{message}</p>
          <button onClick={handleToggle} className={styles.closeButton}>
            Tutup
          </button>
        </div>
      )}
    </div>
  );
};

const EnvelopeGallery = ({ onNext }) => {
  const [openedCount, setOpenedCount] = useState(0);

  // Array untuk menyimpan status apakah amplop sudah dibuka
  const [isOpened, setIsOpened] = useState(new Array(22).fill(false));

  const handleOpen = (index) => {
    // Hanya hitung jika amplop ini belum pernah dibuka
    if (!isOpened[index]) {
      const newIsOpened = [...isOpened];
      newIsOpened[index] = true;
      setIsOpened(newIsOpened);
      setOpenedCount(prevCount => prevCount + 1);
    }
  };

  // --- Daftar 23 Surat ---
  const letters = [
    { 
      photo: "/foto-riza-1.jpg", 
      message: "Kak, kita mulai dari sini. Aku enggak pernah nyangka, perkenalan yang simpel ini bisa jadi salah satu anugerah terbesar di hidup aku. Kamu adalah teman yang muncul di saat aku paling butuh, bahkan tanpa perlu diminta. Jarak memang ada, tapi rasanya enggak pernah jadi penghalang. Makasii sudah jadi energi positif yang selalu aku butuhkan. Selamat ulang tahun ke-23!" 
    },
    { 
      photo: "/foto-riza-2.jpg", 
      message: "Setiap obrolan kita, sekonyol apa pun itu, selalu punya tempat spesial. Kamu selalu bisa mengubah hari aku yang buruk jadi penuh tawa. Aku bersyukur banget kenal kamu, yang bisa diajak gila-gilaan sekaligus serius. Pertahankan senyum dan tawa itu ya, karena itu yang bikin dunia aku ikut cerah. Aku doakan di usia kamu yang baru ini, kebahagiaan kamu berlipat ganda." 
    },
    { 
      photo: "/foto-riza-3.jpg", 
      message: "Aku sadar, mungkin aku enggak selalu ada di sisi kamu secara fisik, tapi aku harap kamu tahu, aku selalu mendoakan yang terbaik buat kamu. Jangan pernah ragu untuk berbagi beban sama aku, sejauh apa pun kita. Aku bangga banget melihat semua pencapaian kamu sampai hari ini." 
    },
    { 
      photo: "/foto-riza-4.jpg", 
      message: "Teruslah jadi diri sendiri yaa kak. Dunia butuh lebih banyak orang yang tulus dan berani seperti kamu. Jangan pernah biarkan opini orang lain meredupkan cahaya kamu." 
    },
    { 
      photo: "/foto-riza-5.jpg", 
      message: "Aku kagum sama semangat pantang menyerah kamu. Kalau kamu lagi punya goal, kamu selalu berusaha keras sampai berhasil. Itu salah satu hal yang paling menginspirasi aku. Semoga di usia 23 ini, semangatnya makin membara dan kamu bisa meraih semua mimpi besar kamu." 
    },
    { 
      photo: "/foto-riza-6.jpg", 
      message: "Aku harap kamu tahu betapa berharganya kamu bagi orang-orang di sekitar kamu. Kamu adalah tempat orang bersandar dan sumber kebahagiaan. Hari ini, biarkan diri kamu yang disayangi dan dimanjakan. Happy birthday!" 
    },
    { 
      photo: "/foto-riza-7.jpg", 
      message: "Aku harap juga, di tahun ini, kamu menemukan semua jawaban atas doa-doa kamu, menemukan kedamaian dalam hati, dan selalu merasa dicintai. Semoga perjalanan kamu ke depan penuh dengan kejutan manis." 
    },
    { 
      photo: "/foto-riza-8.jpg", 
      message: "Terima kasih udah jadi teman aku yang selalu jujur. Kalau aku salah, kamu berani menegur. Itu adalah kualitas langka yang aku hargai. Karena segala bentuk hubungan itu dibangun di atas kejujuran, dan kamu mengajarkan itu sama aku." 
    },
    { 
      photo: "/foto-riza-9.jpg", 
      message: "Ingatlah selalu bahwa usia kamu sekarang hanyalah angka, tapi pengalaman dan kenangan yang udah kamu kumpulkan itu tak ternilai harganya. Nikmati setiap prosesnya yaa kak. Kamu lagi menulis buku terbaik dalam hidup kamu." 
    },
    { 
      photo: "/foto-riza-10.jpg", 
      message: "Kamu punya kualitas langka, kamu bisa menjadi pribadi yang dewasa dan bijak, tapi juga punya selera humor yang receh dan menyenangkan. Itu membuat kamu seimbang dan nyaman untuk diajak bicara. Di usia 23 ini, teruslah asah kualitas-kualitas hebat itu. Aku bangga jadi teman kamu." 
    },
    { 
      photo: "/foto-riza-11.jpg", 
      message: "Aku doakan yang terbaik untuk kesehatan kamu. Jaga diri baik-baik, jangan terlalu keras pada diri sendiri. Karena kalau kamu sehat dan bahagia, aku juga ikut senang di sini. Take care, ya!" 
    },
    { 
      photo: "/foto-riza-12.jpg", 
      message: "Semoga di usia 23 tahun ini, pintu-pintu kesempatan baru terbuka lebar buat kamu. Semoga kamu bertemu orang-orang yang mendukung kamu dan membawa kamu ke level yang lebih tinggi. You deserve the world!" 
    },
    { 
      photo: "/foto-riza-13.jpg", 
      message: "Ingatlah bahwa kamu itu kuat, kamu itu pintar, dan kamu itu dicintai. Kapan pun kamu merasa lelah, baca kembali surat-surat ini dan ingat betapa berharganya diri kamu." 
    },
    { 
      photo: "/foto-riza-14.jpg", 
      message: "Aku bahagia banget bisa merayakan momen spesial ini dengan cara aku sendiri. Meskipun ini hanya website sederhana, aku harap kamu bisa merasakan ketulusan yang aku tuangkan di dalamnya." 
    },
    { 
      photo: "/foto-riza-15.jpg", 
      message: "Di hari ulang tahun kamu ini, aku cuma mau bilang terima kasih. Terima kasih untuk kehadiran kamu yang membuat hari-hari aku lebih ceria. Aku harap kamu benar-benar menikmati momen-momen indah di usia 23 ini, karena kamu pantas mendapatkan semua kebahagiaan itu." 
    },
    { 
      photo: "/foto-riza-16.jpg", 
      message: "Selamat atas semua hal yang sudah kamu lewati dan pelajari selama ini. Setiap kegagalan adalah pelajaran berharga. Jangan pernah takut gagal, karena aku yakin kamu akan bangkit lebih kuat." 
    },
    { 
      photo: "/foto-riza-17.jpg", 
      message: "Aku harap hari kamu dipenuhi dengan kejutan manis, hadiah, dan makanan enak. Rayakan hari ini seolah-olah enggak ada hari esok! Kamu pahlawan hari ini." 
    },
    { 
      photo: "/foto-riza-18.jpg", 
      message: "Ada hal-hal yang membuat aku bangga menjadi teman kamu, salah satunya adalah kebaikan hati kamu. Semoga kebaikan itu selalu kembali sama kamu berlipat ganda." 
    },
    { 
      photo: "/foto-riza-19.jpg", 
      message: "Selalu ada satu tempat di hati yang disediakan khusus untuk kamu. Aku menghargai setiap detik yang kita habiskan untuk bercerita. Kamu istimewa." 
    },
    { 
      photo: "/foto-riza-20.jpg", 
      message: "Terima kasih sudah menjadi sosok yang sabar, pendengar yang baik, dan pemberi semangat. Kamu adalah cheerleader pribadi aku yang paling top." 
    },
    { 
      photo: "/foto-riza-21.jpg", 
      message: "Kamu itu adalah sumber motivasi yang kuat tanpa kamu sadari. Melihat bagaimana kamu terus maju dan meraih mimpi kamu, itu membuat aku ikut terpacu. Terima kasih sudah menjadi teman yang menginspirasi. Semoga kamu terus menemukan kekuatan untuk menaklukkan tantangan apa pun yang datang di tahun ini." 
    },
    { 
      photo: "/foto-riza-22.jpg", 
      message: "Selamat datang di usia 23, Kakakk! Aku tahu, banyak hal luar biasa yang menanti kamu di tahun ini. Semoga langkah kamu selalu ringan, setiap kesulitan menjadi pelajaran, dan setiap usaha kamu berbuah manis. Teruslah kejar impian kamu tanpa rasa takut. Aku bangga sekali melihat kamu tumbuh menjadi orang yang luar biasa." 
    },
    { 
      photo: "/foto-riza-23.jpg", 
      message: "Ini adalah surat penutup, dan aku harap kamu membacanya. Kamu tahu kan backsound ini dari instrumen lagu apa? yapss ini dari lagu yang berjudul sempurna yang di nyanyikan oleh Andra and The Backbone. Aku berdoa, semoga seluruh aspek kehidupan kamu, mulai dari karir, cinta, kesehatan, dan kebahagiaan, menjadi 'Sempurna' seperti judul lagu Andra and The Backbone yang lagi kamu dengar ini. Kamu sudah sempurna sebagai teman, sekarang raih kesempurnaan dalam hidup kamu. Selamat ulang tahun ke-23, Riza Nursyah" 
    },
  ];
  // --- Akhir Daftar Surat ---


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ini adalah 23 Amplop Spesial untuk 23 Tahun Kamu!</h2>
      <div className={styles.envelopeGrid}>
        {letters.map((letter, index) => (
          <Envelope 
            key={index}
            photoSrc={letter.photo} 
            message={letter.message} 
            onOpen={() => handleOpen(index)} // Kirim indeks untuk tracking
          />
        ))}
      </div>
      {openedCount >= 23 && ( // Tampilkan tombol Finish jika 23 amplop sudah dibuka
        <button onClick={onNext} className={styles.nextButton}>
          Selesai, eh tapi coba pencet lagi
        </button>
      )}
    </div>
  );
};

export default EnvelopeGallery;