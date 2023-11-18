import React from 'react';

import style from './style.module.scss';

import Image from 'next/image';

type Props = {
  imageUrl: string;
  quote: string;
  name: string;
};

export default function Photographer({ imageUrl, quote, name }: Props) {
  return (
    <article className={style.photographer}>
      <img className={style.avatar} src={imageUrl} alt={name} />
      <p className={style.quote}>{quote}</p>
      <span className={style.name}>{name}</span>
    </article>
  );
}
