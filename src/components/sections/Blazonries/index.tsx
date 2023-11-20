import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';

import Blazonry from './Blazonry';

import { blazonries } from '@/data/mock';

import { useTranslations, useLocale } from 'next-intl';

import { LanguagesType } from '../../../../types';

export default function Blazonries() {
  const t = useTranslations('Index.blazonries');
  const locale = useLocale();

  return (
    <section className={style.blazonries}>
      <div className="container">
        <div className={style.blazonriesRow}>
          <SectionHeader
            className={style.header}
            title={t('title')}
            variant="small"
          />

          <ul className={style.blazonriesLine}>
            {blazonries[locale as LanguagesType].map((blazonry, index) => (
              <li key={index}>
                <Blazonry {...blazonry} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
