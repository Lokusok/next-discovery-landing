import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

import Fancybox from '@/components/features/Fancybox';

import { useTranslations, useLocale } from 'next-intl';

export default function Teaser() {
  const t = useTranslations('Index.teaser');
  const locale = useLocale();

  return (
    <section className={style.teaser}>
      <div className={style.container}>
        <div className={style.teaserRow}>
          <div className={style.teaserBlock}>
            <Image
              className={style.teaserImage}
              src="/images/teaser-image.jpg"
              alt={t('title')}
              fill
            />

            <Fancybox className={style.teaserInfoWrapper}>
              <div
                tabIndex={0}
                data-fancybox
                data-src="/videos/teaser.mp4"
                className={style.teaserInfo}
                role="button"
                aria-label={
                  locale === 'ru' ? 'Воспроизвести видео' : 'Play video'
                }
              >
                <h2 className={style.title}>{t('title')}</h2>
                <p className={style.descr}>{t('subtitle')}</p>
              </div>
            </Fancybox>
          </div>
        </div>
      </div>
    </section>
  );
}
