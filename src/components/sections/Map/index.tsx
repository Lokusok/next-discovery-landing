import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';

import Link from 'next/link';

import classNames from 'classnames';
import { useTranslations, useLocale } from 'next-intl';

import dynamic from 'next/dynamic';

const MapLayer = dynamic(() => import('./MapLayer'), {
  ssr: false,
});

export default function Map() {
  const t = useTranslations('Index.map');
  const locale = useLocale();

  return (
    <section className={style.map}>
      <div className={style.mapRow}>
        <div className={style.headerWrapper}>
          <div className="container">
            <SectionHeader
              className={style.header}
              title={t('title')}
              variant="small"
            />
            <span className={style.subtitle}>
              78.0648° {locale === 'ru' ? 'с.ш.' : 'n.lt.'} 14.2335°{' '}
              {locale === 'ru' ? 'в.д.' : 's.lt.'}
            </span>
          </div>
        </div>

        <div className={style.mapLayer}>
          <MapLayer />
        </div>

        <div className={classNames('container', style.info)}>
          <div className={style.infoTextWrapper}>
            <p className={style.infoText}>{t('description')}</p>
          </div>

          <div className={style.infoLink}>
            <span className={style.infoLinkTitle}>URL</span>
            <Link className={style.infoLinkHref} href="#" target="_blank">
              {t('linkText')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
