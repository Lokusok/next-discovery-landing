import React from 'react';

import style from './style.module.scss';
import logoStyle from '../Logo/style.module.scss';

import Link from 'next/link';

import Logo from '../Logo';
import LanguageSwitcher from '../../features/LanguageSwitcher';

import { LanguagesType } from '../../../../types';

type Props = {
  locale: LanguagesType;
};

export default function Header({ locale }: Props) {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerRow}>
          <Link className={logoStyle.logoLink} href="/">
            <Logo />
          </Link>

          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
