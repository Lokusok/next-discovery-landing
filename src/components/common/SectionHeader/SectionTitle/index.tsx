import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

type Props = {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'big' | 'small';
};

export default function SectionTitle({ className, children, variant }: Props) {
  return (
    <h2
      className={classNames(className, style.title, {
        [style.bigLnh]: variant === 'big',
      })}
    >
      {children}
    </h2>
  );
}
