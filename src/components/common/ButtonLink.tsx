import { Button } from '@mui/joy';
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
  loading?: boolean;
};

const ButtonLink = (props: Props) => {
  const {
    children,
    color = 'primary',
    className,
    href,
    type = 'button',
    onClick,
    loading,
  } = props;
  return (
    <Button
      type={type}
      loading={loading || undefined}
      className={clsx(
        'border-none px-7 py-4  text-center text-lg font-semibold',
        color === 'primary'
          ? 'bg-primary text-white'
          : color === 'secondary'
          ? 'bg-secondary text-typo-1'
          : 'bg-transparent text-typo-1',
        className,
      )}
      onClick={onClick}
    >
      {href ? (
        <Link href={href} className='text-inherit'>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};

export default ButtonLink;
