import React from 'react';

import style from './style.module.scss';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerRow}>
          <nav className={style.nav}>
            <ul className={style.list}>
              <li className={style.listItem}>
                <Link className={style.listLink} href="#">
                  Карты
                </Link>
              </li>
              <li className={style.listItem}>
                <Link className={style.listLink} href="#">
                  Погода
                </Link>
              </li>
              <li className={style.listItem}>
                <Link className={style.listLink} href="#">
                  Расписание
                </Link>
              </li>
              <li className={style.listItem}>
                <Link className={style.listLink} href="#">
                  Календарь
                </Link>
              </li>
              <li className={style.listItem}>
                <Link className={style.listLink} href="#">
                  Путешествия
                </Link>
              </li>
            </ul>
          </nav>

          <span className={style.copyright}>&copy; 2023 Lokusok</span>
        </div>
      </div>
    </footer>
  );
}
