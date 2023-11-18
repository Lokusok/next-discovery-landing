import React from 'react';

import style from './style.module.scss';
import SectionHeader from '@/components/common/SectionHeader';

export default function Recommendations() {
  return (
    <div className={style.recommendations}>
      <div className="container">
        <div className={style.recommendationsRow}>
          <SectionHeader
            className={style.header}
            title="А также"
            subtitle="места, рекомендованные нашими фотографами"
          />
        </div>
      </div>
    </div>
  );
}
