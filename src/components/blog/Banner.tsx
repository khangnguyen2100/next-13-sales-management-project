import Banner from 'public/images/blog/Banner.jpg';

import HeroBanner from '../common/HeroBanner';
import HeadingWithDot from '../common/HeadingWithDot';
function BlogBanner() {
  return (
    <HeroBanner imageSrc={Banner} height='small'>
      <div className='flex flex-col'>
        <HeadingWithDot variant='secondary' color='white' align='start'>
          Tin tức
        </HeadingWithDot>
        <h1 className='text-5xl font-bold leading-[1.1] text-white md:text-[60px]'>
          Tin tức thị trường
        </h1>
      </div>
    </HeroBanner>
  );
}

export default BlogBanner;
