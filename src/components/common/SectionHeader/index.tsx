import React from 'react';

import style from './style.module.scss';

import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';

import classNames from 'classnames';

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  variant?: 'default' | 'big';
};

export default function SectionHeader({
  className,
  title,
  subtitle,
  variant,
}: Props) {
  return (
    <div className={classNames(className, style.sectionHeader)}>
      <SectionTitle className={style.title} variant={variant}>
        {title}
      </SectionTitle>
      <SectionSubTitle>{subtitle}</SectionSubTitle>
    </div>
  );
}
