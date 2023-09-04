import BannerImg from 'public/images/about_us/Banner.jpg';

import HeroBanner from '../common/HeroBanner';
function AboutUsBanner() {
  return (
    <HeroBanner imageSrc={BannerImg} height='small'>
      <div className='mb-3 flex items-center gap-x-[7px]'>
        <div className='h-3 w-3 bg-secondary'></div>
        <p className='text-lg text-white'>Về chúng tôi</p>
      </div>
      <h1 className='text-5xl font-bold leading-[1.1] text-white md:text-[60px]'>
        Thông tin về chúng tôi
      </h1>
      <div className='mt-9 text-lg text-white '>
        Collaboratively administrate empowered markets plug and play networks
        dynamically procrastinated
      </div>
    </HeroBanner>
  );
}

export default AboutUsBanner;
