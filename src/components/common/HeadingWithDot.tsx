import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  variant: 'primary' | 'secondary';
  color: 'black' | 'white';
  children: ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
};
const alignContentLookUp: Record<string, string> = {
  left: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};
const HeadingWithDot = (props: Props) => {
  const { variant, color, children, className, align = 'center' } = props;
  return (
    <div
      className={clsx(
        'flex items-center gap-x-2',
        alignContentLookUp[align],
        className,
      )}
    >
      <div
        className={clsx(
          'h-3 w-3',
          variant === 'primary' ? 'bg-primary' : 'bg-secondary',
        )}
      ></div>
      <h4
        className={clsx(
          'text-center text-lg font-medium',
          color === 'black' ? 'text-typo-1' : 'text-white',
        )}
      >
        {children}
      </h4>
    </div>
  );
};

export default HeadingWithDot;
