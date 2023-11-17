import React from 'react';

import style from './style.module.scss';
import logoStyle from '../Logo/style.module.scss';

import Link from 'next/link';

import Logo from '../Logo';
import LanguageSwitcher from '../../features/LanguageSwitcher';

export default function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerRow}>
          <Link className={logoStyle.logoLink} href="/">
            <Logo />
          </Link>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
