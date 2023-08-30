import HeroBanner from '@/components/common/HeroBanner';
import BannerImg from 'public/images/services/banner.jpg';

const ServicesBanner = () => {
  return (
    <HeroBanner imageSrc={BannerImg}>
      <div className='mb-3 flex items-center gap-x-[7px]'>
        <div className='h-3 w-3 bg-secondary'></div>
        <p className='text-lg text-white'>Our Services</p>
      </div>
      <h1 className='text-5xl font-bold leading-[1.1] text-white md:text-[60px]'>
        {'We’re Offering'}
      </h1>
      <p className='mt-5 text-lg text-typo-2'>
        Collaboratively administrate empowered markets plug and play networks
        dynamically procrastinated
      </p>
    </HeroBanner>
  );
};

export default ServicesBanner;
