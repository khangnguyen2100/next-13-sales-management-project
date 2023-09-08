import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color: 'primary' | 'secondary' | 'transparent';
  className?: string;
  href?: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
};

const ButtonLink = (props: Props) => {
  const {
    children,
    color = 'primary',
    className,
    href,
    type = 'button',
    onClick,
  } = props;
  return (
    <button
      type={type}
      className={clsx(
        'px-7 py-4 text-center  text-lg font-semibold',
        color === 'primary'
          ? 'bg-primary text-white'
          : color === 'secondary'
          ? 'bg-secondary text-typo-1'
          : 'bg-transparent text-typo-1',
        className,
      )}
      onClick={onClick}
    >
      {href ? <Link href={href}>{children}</Link> : <>{children}</>}
    </button>
  );
};

export default ButtonLink;
