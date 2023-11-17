import React from 'react';

import style from './style.module.scss';

import Place from './Place';

import { places } from '@/data/mock';

export default function Places() {
  return (
    <section className={style.places}>
      <div className="container container-md">
        <div className={style.placesRow}>
          {places.map((place) => (
            <Place key={place.title} className={style.place} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}
