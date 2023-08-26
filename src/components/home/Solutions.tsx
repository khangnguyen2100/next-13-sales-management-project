import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Icon1 from 'public/icons/home-solution-icon-1.svg';
import Icon2 from 'public/icons/home-solution-icon-2.svg';
import Icon3 from 'public/icons/home-solution-icon-3.svg';
import Icon4 from 'public/icons/home-solution-icon-4.svg';
import Icon5 from 'public/icons/home-solution-icon-5.svg';

import HeadingWithDot from '../common/HeadingWithDot';

type SolutionItem = {
  title: string;
  href: string;
  icon: StaticImageData;
};
const solutionList: SolutionItem[] = [
  {
    title: 'Tư vấn Tài chính',
    href: '/',
    icon: Icon1,
  },
  {
    title: 'Quản lí Việc kinh doanh',
    href: '/',
    icon: Icon2,
  },
  {
    title: 'Consultants & program',
    href: '/',
    icon: Icon3,
  },
  {
    title: 'Company Management',
    href: '/',
    icon: Icon4,
  },
  {
    title: 'Financial & Insurance jobs',
    href: '/',
    icon: Icon5,
  },
];

const Solutions = () => {
  return (
    <div className='mx-auto my-24 w-full max-w-large px-4'>
      <HeadingWithDot variant='secondary' color='black' className='mb-4'>
        Chúng tôi là chuyên gia trong
      </HeadingWithDot>
      <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[40px] mdd:text-3xl mobile:text-2xl'>
        <span className='block'>Chúng tôi cung cấp giải pháp</span>
        <span className='block'> chuyên nghiệp cho doanh nghiệp của bạn.</span>
      </h2>
      {/* solution list */}
      <div className='grid grid-cols-3 gap-x-8 gap-y-7 lgd:grid-cols-2 smd:grid-cols-1 '>
        {solutionList.map((item, i) => {
          const { icon, title, href } = item;
          return (
            <div
              key={i}
              className='transition-md group col-span-1 flex min-h-[173px] items-center justify-between bg-section-5 p-[30px] hover:shadow-md mdd:p-5'
            >
              {/* content */}
              <div className='max-w-[170px]'>
                <h3 className='mb-7 text-2xl'>{title}</h3>
                <Link
                  className='text-lg font-semibold text-primary'
                  href={href}
                >
                  Read More
                </Link>
              </div>
              {/* icon */}
              <div className='flex-center transition-md h-[72px] w-[72px] shrink-0 rounded-full bg-secondary shadow-md group-hover:bg-primary'>
                <Image
                  src={icon}
                  alt={title}
                  width={42}
                  height={42}
                  className='object-cover'
                />
              </div>
            </div>
          );
        })}
        <div className='flex-center transition-md  col-span-1 min-h-[173px] bg-primary hover:shadow-md'>
          <Link href={'/services'}>
            <h3 className='text-2xl text-white'>More Services</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
