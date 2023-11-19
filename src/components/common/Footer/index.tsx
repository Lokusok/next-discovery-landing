import React from 'react';

import style from './style.module.scss';

import Link from 'next/link';

import { LanguagesType } from '../../../../types';

const localesNav = {
  en: [
    {
      text: 'Maps',
      href: '#',
    },
    {
      text: 'Weather',
      href: '#',
    },
    {
      text: 'Schedule',
      href: '#',
    },
    {
      text: 'Calendar',
      href: '#',
    },
    {
      text: 'Tours',
      href: '#',
    },
  ],

  ru: [
    {
      text: 'Карты',
      href: '#',
    },
    {
      text: 'Погода',
      href: '#',
    },
    {
      text: 'Расписание',
      href: '#',
    },
    {
      text: 'Календарь',
      href: '#',
    },
    {
      text: 'Путешествия',
      href: '#',
    },
  ],
};

type Props = {
  locale: LanguagesType;
};

export default function Footer({ locale }: Props) {
  const links = localesNav[locale];

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerRow}>
          <nav className={style.nav}>
            <ul className={style.list}>
              {links.map((link, index) => (
                <li key={index} className={style.listItem}>
                  <Link className={style.listLink} href={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className={style.copyright}>&copy; 2023 Lokusok</span>
        </div>
      </div>
    </footer>
  );
}
