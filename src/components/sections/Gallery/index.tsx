import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

import Fancybox from '@/components/features/Fancybox';

import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('Index.gallery');

  return (
    <section className={style.gallery}>
      <div className="container">
        <div>
          <Fancybox className={style.galleryRow}>
            {new Array(12).fill(null).map((el, index) => (
              <Image
                key={index}
                data-fancybox="gallery"
                className={style.galleryImage}
                src={`/images/gallery-${index + 1}.jpg`}
                alt={t('imageAlt')}
                width="0"
                height="0"
                sizes="100vw"
              />
            ))}
          </Fancybox>
        </div>
      </div>
    </section>
  );
}
