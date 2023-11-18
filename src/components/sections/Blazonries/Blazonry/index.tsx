import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

type Props = {
  imageUrl: string;
  title: string;
};

export default function Blazonry({ imageUrl, title }: Props) {
  return (
    <article className={style.blazonry}>
      <div className={style.imageWrapper}>
        <Image
          className={style.image}
          src={imageUrl}
          alt={`герб города ${{ title }}`}
          width="186"
          height="226"
        />
      </div>
      <h3 className={style.title}>{title}</h3>
    </article>
  );
}
