import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';

import MapLayer from './MapLayer';

import Link from 'next/link';

export default function Map() {
  return (
    <section className={style.map}>
      <div className="container">
        <div className={style.mapRow}>
          <div className={style.headerWrapper}>
            <SectionHeader
              className={style.header}
              title="Баренцбург"
              variant="small"
            />
            <span className={style.subtitle}>78.0648° с.ш. 14.2335° в.д.</span>
          </div>

          <MapLayer />

          <div className={style.info}>
            <div className={style.infoTextWrapper}>
              <p className={style.infoText}>
                Арктика и соседство с Норвегией — мало кто знает о жизни самого
                западного российского посёлка, который находится на Шпицбергене.
              </p>
            </div>

            <div className={style.infoLink}>
              <span className={style.infoLinkTitle}>URL</span>
              <Link className={style.infoLinkHref} href="#" target="_blank">
                Умереть или родиться здесь практически невозможно
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
