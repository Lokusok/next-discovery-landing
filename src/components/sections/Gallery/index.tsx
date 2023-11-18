import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

import Fancybox from '@/components/features/Fancybox';

export default function Gallery() {
  return (
    <section className={style.gallery}>
      <div className="container">
        <div>
          <Fancybox className={style.galleryRow}>
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-1.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />

            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-2.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-3.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-4.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-5.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-6.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-7.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-8.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-9.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-10.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-11.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              data-fancybox="gallery"
              className={style.galleryImage}
              src="/images/gallery-12.jpg"
              alt="Изображение природы"
              width="0"
              height="0"
              sizes="100vw"
            />
          </Fancybox>
        </div>
      </div>
    </section>
  );
}
