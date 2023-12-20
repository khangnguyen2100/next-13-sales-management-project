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
  title?: string;
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
    title,
  } = props;
  return (
    <Button
      type={type}
      loading={loading || undefined}
      className={clsx(
        'transition-lg border-none px-7  py-4 text-center text-lg font-semibold hover:text-white mdd:px-4 mdd:py-2',
        color === 'primary'
          ? 'bg-primary text-white'
          : color === 'secondary'
          ? 'bg-secondary text-typo-1'
          : 'bg-transparent text-typo-1',
        className,
      )}
      onClick={onClick}
      title={title}
    >
      {href ? (
        <Link
          href={href}
          className='block h-full w-full text-center text-inherit'
          title={title}
        >
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};

export default ButtonLink;
