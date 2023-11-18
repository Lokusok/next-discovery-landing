import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';
import Video from './Video';

export default function Videos() {
  return (
    <section className={style.videos}>
      <div className="container">
        <div className={style.videosRow}>
          <SectionHeader
            className={style.header}
            title="В глубины Земли и в дальний космос"
            subtitle="Видео от студии Stereotactic о местах в России, где ведутся фундаментальные исследования"
          />

          <div className={style.videosLine}>
            <Video
              imageUrl="/images/video-preview-1.jpg"
              title="Colors of Kamchatka"
              subtitle="Director: Pavel Karykhalin"
              videoSource="/videos/video-1.mp4"
            />
            <Video
              imageUrl="/images/video-preview-2.jpg"
              title="Обсерватория | Observatory"
              subtitle="Director: Alexander Khudokon"
              videoSource="/videos/video-2.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
