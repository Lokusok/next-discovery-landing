import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';

import Photographer from './Photographer';

import { photograhers } from '@/data/mock';

import { useTranslations, useLocale } from 'next-intl';

import { LanguagesType } from '../../../../types';

export default function Photographers() {
  const t = useTranslations('Index.photographers');
  const locale = useLocale();

  return (
    <section className={style.photographers}>
      <div className="container">
        <div className={style.photographersRow}>
          <SectionHeader
            className={style.header}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <div className={style.photographersLine}>
            {photograhers[locale as LanguagesType].map(
              (photographer, index) => (
                <Photographer key={index} {...photographer} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
