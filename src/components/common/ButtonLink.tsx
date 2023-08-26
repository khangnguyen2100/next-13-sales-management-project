import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color: 'primary' | 'secondary';
  className?: string;
  href?: string;
  type?: 'submit' | 'button';
};

const ButtonLink = (props: Props) => {
  const {
    children,
    color = 'primary',
    className,
    href = '/',
    type = 'button',
  } = props;
  return (
    <button
      type={type}
      className={clsx(
        'px-7 py-4 text-center  text-lg font-semibold',
        color === 'primary'
          ? 'bg-primary text-white'
          : 'bg-secondary text-typo-1',
        className,
      )}
    >
      {type === 'button' ? (
        <Link href={href}>{children}</Link>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default ButtonLink;
