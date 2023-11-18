import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import 'reset-css';

import './globals.scss';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Путешествия по России',
  description: 'Настоящая страна не в выпусках новостей, а здесь.',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
