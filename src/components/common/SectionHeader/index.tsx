import React from 'react';

import style from './style.module.scss';

import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import SmallTitle from './SmallTitle';

import classNames from 'classnames';

type Props = {
  className?: string;
  title: string;
  subtitle?: string;
  variant?: 'default' | 'big' | 'small';
};

export default function SectionHeader({
  className,
  title,
  subtitle,
  variant,
}: Props) {
  if (variant === 'small') {
    return <SmallTitle className={className}>{title}</SmallTitle>;
  }

  return (
    <div className={classNames(className, style.sectionHeader)}>
      <SectionTitle className={style.title} variant={variant}>
        {title}
      </SectionTitle>
      {subtitle && <SectionSubTitle>{subtitle}</SectionSubTitle>}
    </div>
  );
}
