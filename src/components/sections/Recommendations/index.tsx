import React from 'react';

import style from './style.module.scss';

import RecommendPlace from './RecommendPlace';

import { recommendPlaces } from '@/data/mock';

import SectionHeader from '@/components/common/SectionHeader';
import Fancybox from '@/components/features/Fancybox';

import { useTranslations, useLocale } from 'next-intl';

import { LanguagesType } from '../../../../types';

export default function Recommendations() {
  const t = useTranslations('Index.recommendations');
  const locale = useLocale();

  return (
    <section className={style.recommendations}>
      <div className="container">
        <div className={style.recommendationsRow}>
          <SectionHeader
            className={style.header}
            title={t('title')}
            subtitle={t('subtitle')}
          />

          <Fancybox className={style.recommendationsLine}>
            {recommendPlaces[locale as LanguagesType].map(
              (recommendPlace, index) => (
                <RecommendPlace key={index} {...recommendPlace} />
              )
            )}
          </Fancybox>
        </div>
      </div>
    </section>
  );
}
