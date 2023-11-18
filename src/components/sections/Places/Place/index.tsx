import React from 'react';

import style from './style.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import classNames from 'classnames';

import { PlaceType } from '../../../../../types';

type Props = {
  className?: string;
} & PlaceType;

export default function Place({
  className,
  title,
  url,
  description,
  imageUrl,
}: Props) {
  return (
    <article className={classNames(className, style.place)}>
      <header className={style.header}>
        <h3 className={style.title}>{title}</h3>
        {url && (
          <div className={style.link}>
            <span className={style.linkText}>URL</span>
            <div>
              <Link className={style.linkUrl} href={url.origin} target="_blank">
                {url.text}
              </Link>
            </div>
          </div>
        )}
      </header>

      <div className={style.placeRow}>
        <div className={style.placeImageBlock}>
          <Image
            className={style.placeImage}
            src={imageUrl}
            alt={title}
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        <div className={style.placeDescr}>
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
