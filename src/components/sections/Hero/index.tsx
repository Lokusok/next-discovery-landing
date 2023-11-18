import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className="container container-md">
        <div className={style.heroRow}>
          <div className={style.textInfo}>
            <h1 className={style.title}>Путешествия по России</h1>
            <p className={style.description}>
              Настоящая страна не в выпусках новостей, а здесь.
            </p>
          </div>

          <div className={style.wrapperImage}>
            <Image
              className={style.heroImage}
              src="/images/hero.jpg"
              alt="Маршруты"
              width="0"
              height="0"
              sizes="100vw"
            />
            <span className={style.wrapperNote}>ваша полка — верхняя</span>
          </div>
        </div>
      </div>
    </section>
  );
}
