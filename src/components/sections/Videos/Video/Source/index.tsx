import React from 'react';

import style from './style.module.scss';

type Props = {
  videoSource: string;
  isVisible: boolean;
  onLoadedMetadata: () => void;
};

const Source = React.forwardRef<HTMLVideoElement, Props>(function Source(
  { videoSource, isVisible, onLoadedMetadata },
  videoRef
) {
  return (
    <>
      <video
        className={style.video}
        style={{ display: isVisible ? 'block' : 'none' }}
        ref={videoRef}
        src={videoSource}
        controls={true}
        onLoadedMetadata={onLoadedMetadata}
      ></video>
    </>
  );
});

export default Source;
