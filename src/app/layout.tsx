import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

import 'reset-css';

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

      <body className={inter.className}>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
