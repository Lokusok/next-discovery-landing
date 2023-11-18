'use client';

import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

import Fancybox from '@/components/features/Fancybox';

import { RecommendPlaceType } from '../../../../../types';

type Props = {} & RecommendPlaceType;

export default function RecommendPlace({
  imageUrl,
  title,
  description,
}: Props) {
  const imageRef = React.useRef<HTMLImageElement>(null);

  const handleClick = () => {
    console.log('click', title);
    imageRef.current?.click();
  };

  return (
    <article onClick={handleClick} className={style.place}>
      <Image
        ref={imageRef}
        data-fancybox="gallery-recommend"
        className={style.placeImage}
        src={imageUrl}
        alt={title}
        fill
      />

      <div className={style.placeRow}>
        <div className={style.placeTop}>
          <h3 className={style.title}>{title}</h3>
        </div>

        {description && (
          <div className={style.placeBottom}>
            <p className={style.descr}>{description}</p>
          </div>
        )}
      </div>
    </article>
  );
}
