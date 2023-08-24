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
        'text-white px-7 py-4 font-semibold text-lg text-center font-montserrat',
        color === 'primary' ? 'bg-primary' : 'bg-secondary',
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
