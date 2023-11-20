import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Index.hero');

  return (
    <section className={style.hero}>
      <div className={style.heroRow}>
        <div className={style.container}>
          <div className={style.textInfo}>
            <h1 className={style.title}>{t('title')}</h1>
            <p className={style.description}>{t('subtitle')}</p>
          </div>
        </div>

        <div className={style.wrapperImage}>
          <Image
            className={style.heroImage}
            src={t('imageUrl')}
            alt={t('imageAlt')}
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
          />
          <div className={style.container}>
            <span className={style.wrapperNote}>{t('underImage')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
