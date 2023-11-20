import React from 'react';

import style from './style.module.scss';

import PlayIcon from '@/assets/play.svg';

import Image from 'next/image';

import { PreviewType } from '../../../../../../types';

type Props = {
  onClick?: () => void;
  isHidden: boolean;
} & PreviewType;

export default function Preview({
  onClick,
  isHidden,
  duration,
  title,
  subtitle,
  imageUrl,
}: Props) {
  if (isHidden) {
    return <></>;
  }

  return (
    <div className={style.preview} onClick={onClick}>
      <div className={style.previewRow}>
        <Image className={style.previewImage} src={imageUrl} alt={title} fill />
        <div className={style.playBtn}>
          <Image src={PlayIcon} alt="" aria-hidden={true} />
        </div>

        <div className={style.info}>
          <span className={style.duration}>{duration}</span>
          <h3 className={style.title}>{title}</h3>
          <span className={style.subtitle}>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
