import React from 'react';

import style from './style.module.scss';

import classNames from 'classnames';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function SectionSubTitle({ className, children }: Props) {
  return <h2 className={classNames(className, style.subtitle)}>{children}</h2>;
}
