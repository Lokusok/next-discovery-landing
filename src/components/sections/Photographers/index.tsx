import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';

import Photographer from './Photographer';

import { photograhers } from '@/data/mock';

export default function Photographers() {
  return (
    <section className={style.photographers}>
      <div className="container">
        <div className={style.photographersRow}>
          <SectionHeader
            className={style.header}
            title="Фотографы, снимающие Россию"
            subtitle="Природа и люди вдохновили их работы, удостоенные наград на международных конкурсах"
          />

          <div className={style.photographersLine}>
            {photograhers.map((photographer, index) => (
              <Photographer key={index} {...photographer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
