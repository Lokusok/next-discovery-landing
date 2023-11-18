import React from 'react';

import style from './style.module.scss';

type Props = {
  videoSource: string;
  isVisible: boolean;
};

const Source = React.forwardRef<HTMLVideoElement, Props>(function Source(
  { videoSource, isVisible },
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
      ></video>
    </>
  );
});

export default Source;
