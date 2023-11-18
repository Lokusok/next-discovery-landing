'use client';

import React from 'react';

import ReactPlayer from 'react-player';

import style from './style.module.scss';

import { getNormallyDuration } from '@/utils/videos';

import Preview from './Preview';
import Source from './Source';

import { PreviewType, SourceType } from '../../../../../types';

type Props = {} & PreviewType & SourceType;

export default function Video(props: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = React.useState('need normally duration');
  const [isVideoVisible, setIsVideoVisible] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      setDuration(getNormallyDuration(videoRef.current.duration));
    }
  }, [videoRef]);

  const handleClickPreview = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.volume = 0.5;
      setIsVideoVisible(true);
    }
  };

  return (
    <>
      <Preview
        onClick={handleClickPreview}
        duration={duration}
        title={props.title}
        subtitle={props.subtitle}
        imageUrl={props.imageUrl}
        isHidden={isVideoVisible}
      />
      <Source
        isVisible={isVideoVisible}
        ref={videoRef}
        videoSource={props.videoSource}
      />
    </>
  );
}
