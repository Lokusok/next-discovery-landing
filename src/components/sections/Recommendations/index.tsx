import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';

import RecommendPlace from './RecommendPlace';

import { recommendPlaces } from '@/data/mock';

import Fancybox from '@/components/features/Fancybox';

export default function Recommendations() {
  return (
    <section className={style.recommendations}>
      <div className="container">
        <div className={style.recommendationsRow}>
          <SectionHeader
            className={style.header}
            title="А также"
            subtitle="места, рекомендованные нашими фотографами"
          />

          <Fancybox className={style.recommendationsLine}>
            {recommendPlaces.map((recommendPlace, index) => (
              <RecommendPlace key={index} {...recommendPlace} />
            ))}
          </Fancybox>
        </div>
      </div>
    </section>
  );
}
