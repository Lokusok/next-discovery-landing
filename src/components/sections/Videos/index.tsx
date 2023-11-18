import React from 'react';

import style from './style.module.scss';

import SectionHeader from '@/components/common/SectionHeader';
import Video from './Video';

import { videos } from '@/data/mock';

export default function Videos() {
  return (
    <section className={style.videos}>
      <div className="container">
        <div className={style.videosRow}>
          <SectionHeader
            className={style.header}
            variant="big"
            title="В глубины Земли и в дальний космос"
            subtitle="Видео от студии Stereotactic о местах в России, где ведутся фундаментальные исследования"
          />

          <div className={style.videosLine}>
            {videos.map((video, index) => (
              <Video key={index} {...video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
