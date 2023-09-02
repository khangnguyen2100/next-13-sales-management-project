import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import HeadingWithDot from './HeadingWithDot';

type Props = {
  imageSrc: StaticImageData;
  height?: 'small' | 'medium' | 'large';
  heading: string;
  title: string;
  description?: string;
};
const HeightLookUp: Record<string, string> = {
  small: 'h-[458px] mdd:h-[50vh]',
  medium: 'h-[650px] mdd:h-[55vh]',
  large: 'h-[815px] mdd:h-[65vh]',
};
const Banner = (props: Props) => {
  const { imageSrc, height = 'small', heading, title, description } = props;

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
      />
      {/* content */}
      <div className='absolute inset-y-0 left-0 h-full w-full bg-section-2/90 backdrop-blur-[9.5px] lg:w-2/3 xl:w-[46%]'>
        <div className='absolute left-4 top-1/2 translate-y-[-50%] md:left-1/2 md:min-w-[550px] md:translate-x-[-50%]'>
          <HeadingWithDot color='white' variant='secondary' align='start'>
            {heading}
          </HeadingWithDot>
          <h1 className='mb-2 text-[60px] text-white lgd:text-5xl mdd:text-4xl'>
            {title}
          </h1>
          <p className='font-medium text-typo-2'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
