import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  imageSrc: StaticImageData;
  height?: 'small' | 'medium' | 'large';
};
const HeightLookUp: Record<string, string> = {
  small: 'h-[458px] mdd:h-[50vh]',
  medium: 'h-[650px] mdd:h-[55vh]',
  large: 'h-[815px] mdd:h-[65vh]',
};
const HeroBanner = (props: Props) => {
  const { children, imageSrc, height = 'small' } = props;

  return (
    <div className={clsx(HeightLookUp[height], 'relative w-full')}>
      {/* background */}
      <Image
        src={imageSrc}
        alt='image'
        fill
        quality={100}
        priority
        className='object-cover'
        placeholder='blur'
      ></Image>
      {/* content */}
      <div className='absolute inset-y-0 left-0 h-full w-full bg-section-2/90 backdrop-blur-[9.5px] lg:w-2/3 xl:w-[46%]'>
        <div className='absolute left-4 top-1/2 translate-y-[-50%] md:left-1/2 md:min-w-[550px] md:translate-x-[-50%]'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
