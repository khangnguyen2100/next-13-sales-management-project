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
        BeeSmart không chỉ là một công cụ, mà là một đối tác chiến lược trong
        việc xây dựng sự thành công kinh doanh của bạn. Hãy đồng hành cùng chúng
        tôi trên hành trình đổi mới và hiệu suất!
      </div>
    </HeroBanner>
  );
}

export default AboutUsBanner;
