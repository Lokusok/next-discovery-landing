import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

import Fancybox from '@/components/features/Fancybox';

export default function Teaser() {
  return (
    <section className={style.teaser}>
      <div className="container">
        <div className={style.teaserRow}>
          <div className={style.teaserBlock}>
            <Image
              className={style.teaserImage}
              src="/images/teaser-image.jpg"
              alt="До Байкала «на собаках»"
              fill
            />

            <Fancybox className={style.teaserInfoWrapper}>
              <div
                tabIndex={0}
                data-fancybox
                data-src="/videos/teaser.mp4"
                className={style.teaserInfo}
                role="button"
                aria-label="Воспроизвести видео"
              >
                <h2 className={style.title}>До Байкала «на собаках»</h2>
                <p className={style.descr}>
                  По мотивам учебной темы о Транссибе и iframes — путешествие от
                  столицы до Байкала на электричках.
                </p>
              </div>
            </Fancybox>
          </div>
        </div>
      </div>
    </section>
  );
}
