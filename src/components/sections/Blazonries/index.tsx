import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';

import Blazonry from './Blazonry';

import { blazonries } from '@/data/mock';

export default function Blazonries() {
  return (
    <section className={style.blazonries}>
      <div className="container">
        <div className={style.blazonriesRow}>
          <SectionHeader
            className={style.header}
            title="Природа на гербах российских городов"
            variant="small"
          />

          <div className={style.blazonriesLine}>
            {blazonries.map((blazonry, index) => (
              <Blazonry key={index} {...blazonry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
