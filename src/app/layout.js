import { Cinzel, Cormorant_Garamond, Mulish } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-mulish',
  display: 'swap',
});

export const metadata = {
  title: 'Kimera Audiovisual',
  description:
    'A rede social do audiovisual brasileiro — onde artistas e estudantes compartilham obras, constroem redes e fazem história.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${cormorant.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}
