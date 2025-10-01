// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Happy Birthday, Riza!",
  description: "Sebuah website sederhana untuk merayakan ulang tahun Riza. Dibuat dengan Next.js dan Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}