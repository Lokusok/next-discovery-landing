import React from 'react';

import style from './style.module.scss';

import Place from './Place';

import { places } from '@/data/mock';

import { useLocale } from 'next-intl';

import { LanguagesType } from '../../../../types';

export default function Places() {
  const locale = useLocale();

  return (
    <section className={style.places}>
      <div className={style.container}>
        <div className={style.placesRow}>
          {places[locale as LanguagesType].map((place) => (
            <Place key={place.title} className={style.place} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}
