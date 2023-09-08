import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ButtonLink from '@/components/common/ButtonLink';
import HeroBanner from '@/components/common/HeroBanner';
import BannerImg from 'public/images/home/banner.jpg';
import PlayVideoIcon from 'public/icons/play-video.svg';

const HomeHeroBanner = () => {
  return (
    <HeroBanner imageSrc={BannerImg} height='large'>
      <div className='mb-3 flex items-center gap-x-[7px]'>
        <div className='h-3 w-3 bg-secondary'></div>
        <p className='text-lg text-white'>
          Chào mừng bạn đến với
          <span className='font-semibold text-secondary'> BeeSmart</span>
        </p>
      </div>
      <h1 className='text-5xl font-bold leading-[1.1] text-white md:text-[60px]'>
        <span className='block'>Phần mềm</span>
        <span className='block'>
          <span className='text-secondary'>Quản lí </span>
          bán hàng
        </span>
        <span className='block'>phổ biến nhất</span>
      </h1>
      <div className='mt-9 flex items-center gap-x-8'>
        <ButtonLink color='secondary' type='button' href='/sign-up'>
          Dùng Thử Miễn Phí
        </ButtonLink>
        <Link
          className='transition-sm group flex items-center gap-x-3'
          href={'/'}
        >
          <Image
            src={PlayVideoIcon}
            width={60}
            height={60}
            alt='play icon'
            className=' transition-sm group-hover:scale-[1.05]'
          />
          <div className='flex flex-col'>
            <p className='text-lg font-medium text-white'>Khám Phá Ngay</p>
            <div className='transition-sm mt-[-1px] h-[2px] w-0 bg-white group-hover:w-full'></div>
          </div>
        </Link>
      </div>
    </HeroBanner>
  );
};

export default HomeHeroBanner;
