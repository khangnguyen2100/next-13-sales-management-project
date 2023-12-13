import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Icon1 from 'public/icons/home-solution-icon-1.svg';
import Icon2 from 'public/icons/home-solution-icon-2.svg';
import Icon3 from 'public/icons/home-solution-icon-3.svg';
import Icon4 from 'public/icons/home-solution-icon-4.svg';
import Icon5 from 'public/icons/home-solution-icon-5.svg';
import Icon6 from 'public/icons/home-solution-icon-6.svg';

import HeadingWithDot from '../common/HeadingWithDot';

type SolutionItem = {
  title: string;
  href: string;
  icon: ReactNode;
  content: string;
};
const solutionList: SolutionItem[] = [
  {
    title: 'Quản lý hàng hóa',
    href: '/',
    icon: <i className='fa-solid fa-box-circle-check text-4xl text-white'></i>,
    content: 'Bạn có thể quản lý các sản phẩm đang bán tại cửa hàng của mình',
  },
  {
    title: 'Quản lý hóa đơn',
    href: '/',
    icon: <i className='fa-solid fa-file-invoice text-4xl text-white'></i>,
    content: 'Bạn có thể kiểm tra lại các đơn hàng đã bán qua từng ngày',
  },
  {
    title: 'Quản lý doanh thu',
    href: '/',
    icon: (
      <i className='fa-solid fa-hand-holding-dollar text-4xl text-white'></i>
    ),
    content:
      'Hệ thống cung cấp biểu đồ doanh thu theo ngày/tháng giúp bạn theo dõi tiến độ kinh doanh của cửa hàng',
  },

  {
    title: 'Quản lý tồn kho',
    href: '/',
    icon: <i className='fa-duotone fa-boxes-stacked text-4xl text-white'></i>,
    content:
      'Beesmart giúp bạn theo dõi số lượng hàng hóa còn lại trong cửa hàng để kịp thời bổ sung',
  },
];

const Solutions = ({ full = false }: { full?: Boolean }) => {
  return (
    <div className='mx-auto my-24 w-full max-w-large px-4'>
      <HeadingWithDot variant='secondary' color='black' className='mb-4'>
        Chúng tôi sẽ giúp bạn
      </HeadingWithDot>
      <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[40px] mdd:text-3xl mobile:text-2xl'>
        <span className='block'>Giải quyết các vấn đề quản lý</span>
        <span className='block'>cho doanh nghiệp của bạn.</span>
      </h2>
      {/* solution list */}
      <div className='grid grid-cols-6 gap-x-8 gap-y-7 lgd:grid-cols-2 smd:grid-cols-1 '>
        {solutionList.map((item, i) => {
          const { icon, title, href, content } = item;
          return (
            <div
              key={i}
              className='transition-md group col-span-3 flex min-h-[173px] items-center justify-between bg-section-5 p-[30px]  mdd:p-5'
            >
              {/* content */}
              <div className='max-w-[70%]'>
                <h3 className='mb-7 text-2xl'>{title}</h3>
                <p>{content}</p>
              </div>
              {/* icon */}
              <div className='flex-center transition-md h-[72px] w-[72px] shrink-0 rounded-full bg-primary shadow-md'>
                {/* <Image
                  src={icon}
                  alt={title}
                  width={42}
                  height={42}
                  className='object-cover'
                /> */}
                {item.icon}
              </div>
            </div>
          );
        })}
        {/* {!full && (
          <div className='flex-center transition-md  col-span-1 min-h-[173px] bg-primary hover:shadow-md'>
            <Link href={'/services'}>
              <h3 className='text-2xl text-white'>More Services</h3>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Solutions;
