'use client';

import React from 'react';

import { getNormallyDuration } from '@/utils/videos';

import Preview from './Preview';
import Source from './Source';

import { VideoType } from '../../../../../types';

type Props = {} & VideoType;

export default function Video(props: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = React.useState('');
  const [isVideoVisible, setIsVideoVisible] = React.useState(false);

  const handleVideoMetadata = () => {
    if (videoRef.current) {
      setDuration(getNormallyDuration(videoRef.current.duration));
    }
  };

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
        onLoadedMetadata={handleVideoMetadata}
      />
    </>
  );
}
