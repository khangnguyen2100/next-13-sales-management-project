import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import IntroductionImg from 'public/images/home/introduction.jpg';
import VCheck from 'public/icons/v-check.svg';

const Introduction = () => {
  return (
    <div className='mb-24 flex items-center gap-x-6 gap-y-16 lg:gap-x-[70px] mdd:flex-col'>
      {/* image side */}
      <div className='h-full bg-gray-100 md:w-1/2 xl:w-[40%]'>
        <div className='ml-auto mr-6 px-4 py-8 md:max-w-[456px] md:py-24  lg:mr-12'>
          <Image src={IntroductionImg} height={446} width={424} alt='intro' />
          <h3 className='mb-3 mt-5 text-3xl'>
            Chúng tôi luôn sẵn sàng đồng hành cùng nhà bán hàng
          </h3>
          <p className='mb-5 text-typo-3'>
            BeeSmart không chỉ là một nền tảng quản lý hàng hóa, mà còn là đối
            tác đồng hành đáng tin cậy, giúp doanh nghiệp của bạn vươn tới những
            đỉnh cao mới trong sự đổi mới kinh tế.
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
          Beesmart giúp bạn quản lí dễ dàng, bán hàng hiệu quả.
        </h2>
        <p className='text-black'>
          Bee Smart giúp bạn theo dõi tồn kho, cập nhật thông tin về sản phẩm và
          tạo danh sách hàng hóa một cách nhanh chóng. Bạn sẽ luôn biết được
          mình còn bao nhiêu hàng trong kho và khi nào cần phải đặt hàng mới.
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
              Linh hoạt cho nhiều ngành hàng
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
