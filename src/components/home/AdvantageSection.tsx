import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import Image1 from 'public/images/home/home-1.jpg';
import vCheckIcon from 'public/icons/v-check-secondary.svg';
import starIcon from 'public/icons/star.svg';
import { CircularProgress } from '@/components/lib/mui';

import HeadingWithDot from '../common/HeadingWithDot';

type CircularItemProps = {
  heading: string;
  description: string;
  value: number;
};
const CircularItem = (props: CircularItemProps) => {
  const { heading, description, value } = props;
  return (
    <div className='col-span-1 flex gap-3 bg-section-1 p-7'>
      <div className='flex-center relative h-[80px] w-[80px] shrink-0 rounded-full bg-section-2'>
        <CircularProgress
          color='success'
          value={value}
          size={80}
          variant={'determinate'}
          thickness={3}
          sx={{
            color: '#40DDB6',
            [`& .MuiCircularProgress-circle
          `]: {
              strokeLinecap: 'round',
            },
          }}
        />
        <div className='abs-center'>
          <h3 className='text-xl font-semibold text-white'>{value}%</h3>
        </div>
      </div>
      <div className='text-white'>
        <p>{description}</p>
        <h3 className='text-lg'>{heading}</h3>
      </div>
    </div>
  );
};
const AdvantageSection = () => {
  return (
    <div className='flex w-full items-center gap-y-10 overflow-hidden bg-section-2 lg:justify-end lgd:flex-col'>
      {/* content */}
      <div className='text-white lg:py-10 lg:pl-4 lg:pr-12 xl:pr-[92px] lgd:px-4 lgd:pt-10'>
        {/* header */}
        <div className='lg:max-w-[572px]'>
          <HeadingWithDot color='white' variant='secondary' align='start'>
            Tại sao lại chọn KioViet
          </HeadingWithDot>
          <h2 className='text-3xl font-bold mdd:text-2xl'>
            Chúng tôi cung cấp giải pháp để phát triển doanh nghiệp của bạn
          </h2>
          <p className='text-whitet mt-2 text-lg'>
            Trải nghiệm BeeSmart ngay hôm nay mang lại nhiều lợi ích độc đáo cho
            doanh nghiệp của bạn
          </p>
        </div>
        {/* circular progress */}
        {/* <div className='mt-9 grid grid-cols-2 gap-4 lg:max-w-[610px] smd:grid-cols-1'>
          <CircularItem
            heading='Đã đánh giá & phản hồi'
            description='Khách hàng'
            value={95}
          />
          <CircularItem
            heading='Đã hoàn thành'
            description='Dự án'
            value={85}
          />
        </div> */}
        {/* check list */}
        <div className='mt-9 grid grid-cols-2 gap-x-5 gap-y-6  mobile:grid-cols-1'>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='font-quicksand text-lg font-bold text-white '>
              Quản lý Hiệu Quả
            </p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='font-quicksand text-lg font-bold text-white '>
              Tiết Kiệm Thời Gian
            </p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='font-quicksand text-lg font-bold text-white '>
              Đặt Hàng Thông Minh
            </p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='font-quicksand text-lg font-bold text-white '>
              Linh Hoạt và Tích Hợp Dễ Dàng
            </p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='font-quicksand text-lg font-bold text-white '>
              Phân Tích Thông Minh
            </p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='font-quicksand text-lg font-bold text-white '>
              Hỗ Trợ Khách Hàng Nhanh Chóng
            </p>
          </div>
        </div>
      </div>
      {/* image */}
      <div className='lg:w-[50%] xl:w-[45%]'>
        <Image
          src={Image1}
          width={868}
          height={500}
          alt='home-1'
          className='w-full object-cover'
        />
      </div>
    </div>
  );
};

export default AdvantageSection;
