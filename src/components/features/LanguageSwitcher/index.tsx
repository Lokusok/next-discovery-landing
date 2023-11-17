import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

export default function LanguageSwitcher() {
  return (
    <div className={style.root}>
      <button className={classNames(style.btnLang, style.btnLangActive)}>
        Ru
      </button>
      <button className={style.btnLang}>En</button>
    </div>
  );
}
