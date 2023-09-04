import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import IntroductionImg from 'public/images/home/introduction.jpg';
import VCheck from 'public/icons/v-check.svg';

const Introduction = () => {
  return (
    <div className='my-24 flex items-center gap-x-6 gap-y-16 lg:gap-x-[70px] mdd:flex-col'>
      {/* image side */}
      <div className='h-full bg-gray-100 md:w-1/2 xl:w-[40%]'>
        <div className='ml-auto mr-6 px-4 py-8 md:max-w-[456px] md:py-24  lg:mr-12'>
          <Image
            src={IntroductionImg}
            height={446}
            width={424}
            alt='intro'
            className='mx-auto'
          />
          <h3 className='mb-3 mt-5 text-3xl'>
            Chúng tôi sẵn sàng phát triển doanh nghiệp cùng bạn
          </h3>
          <p className='mb-5 text-typo-3'>
            Tận dụng các khuôn khổ linh hoạt để cung cấp một bản tóm tắt mạnh mẽ
            cho các tổng quan cấp cao. suy nghĩ để tiếp tục đề xuất giá trị tổng
            thể.
          </p>
          <Link
            href={'/contact'}
            className='font-inter text-lg font-semibold text-typo-1 underline'
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>
      {/* content side */}
      <div className='flex-1 px-4 md:max-w-[669px]'>
        <h2 className='mb-5 text-4xl text-typo-1 mdd:text-3xl'>
          Kioviet giúp bạn quản lí dễ dàng, bán hàng hiệu quả.
        </h2>
        <p className='text-typo-3'>
          Tận dụng các khuôn khổ linh hoạt để cung cấp một bản tóm tắt mạnh mẽ
          cho các tổng quan cấp cao. Các cách tiếp cận lặp đi lặp lại đối với
          chiến lược của công ty thúc đẩy tư duy hợp tác để tiến xa hơn về tổng
          thể.
        </p>
        <div className='mt-5 flex flex-col gap-y-3'>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={27} height={27} alt='check-icon' />
            <p className='text-lg font-medium text-typo-1'>
              Đơn giản & dễ sử dụng
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={27} height={27} alt='check-icon' />
            <p className='text-lg font-medium text-typo-1'>
              Phù hợp cho từng ngành hàng
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={27} height={27} alt='check-icon' />
            <p className='text-lg font-medium text-typo-1'>Tiết kiệm chi phí</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
