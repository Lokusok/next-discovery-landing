import React from 'react';

import style from './style.module.scss';

import Link from 'next/link';

import classNames from 'classnames';

import { LanguagesType } from '../../../../types';

type Props = {
  locale: LanguagesType;
};

export default function LanguageSwitcher({ locale }: Props) {
  return (
    <div className={style.root}>
      <Link
        href="/ru"
        className={classNames(style.btnLang, {
          [style.btnLangActive]: locale === 'ru',
        })}
      >
        Ru
      </Link>
      <Link
        href="/en"
        className={classNames(style.btnLang, {
          [style.btnLangActive]: locale === 'en',
        })}
      >
        En
      </Link>
    </div>
  );
}
