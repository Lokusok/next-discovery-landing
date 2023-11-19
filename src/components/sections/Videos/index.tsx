import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';
import Video from './Video';

import { videos } from '@/data/mock';

import { useTranslations, useLocale } from 'next-intl';

import { LanguagesType } from '../../../../types';

export default function Videos() {
  const t = useTranslations('Index.videos');
  const locale = useLocale();

  return (
    <section className={style.videos}>
      <div className="container">
        <div className={style.videosRow}>
          <SectionHeader
            className={style.header}
            variant="big"
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <div className={style.videosLine}>
            {videos[locale as LanguagesType].map((video, index) => (
              <Video key={index} {...video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
