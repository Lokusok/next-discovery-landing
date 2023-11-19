import { unstable_setRequestLocale } from 'next-intl/server';

import React from 'react';

import { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import 'reset-css';

import '../globals.scss';

import { LanguagesType } from '../../../types';

const locales = ['ru', 'en'];

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

type Props = {
  children: React.ReactNode;
  params: {
    locale: LanguagesType;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  switch (locale) {
    case 'ru':
      return {
        title: 'Путешествия по России',
        description: 'Путешествия по популярным и не очень местам России.',
      };
    case 'en':
      return {
        title: 'Traveling around Russia',
        description: 'Travel to popular and not so popular places in Russia.',
      };
  }
}

export default function Layout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as LanguagesType)) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header locale={locale} />

        <main className="main">{children}</main>

        <Footer locale={locale} />
      </body>
    </html>
  );
}
