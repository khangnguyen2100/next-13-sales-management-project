import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

import SignUpForm from '@/components/sign-up/SignUpForm';
import ImageSrc from 'public/images/auth/sign-up-banner.jpg';

export const metadata: Metadata = {
  title: 'Đăng ký - Beesmart',
};
function Page() {
  return (
    <div className={'relative flex min-h-screen w-full items-center'}>
      {/* background */}
      <div className='relative min-h-screen w-[46%] lgd:hidden'>
        <Image
          src={ImageSrc}
          alt='image'
          fill
          priority
          className='object-cover'
          placeholder='blur'
        />
        <div className='absolute left-6 top-8 z-10 cursor-pointer'>
          <Link href='/'>
            <FaArrowLeftLong className='text-white' color='#fff' size={24} />
          </Link>
        </div>
        <div className='absolute inset-y-0 left-0 h-full w-full bg-section-2/80 backdrop-blur-[3.5px]'>
          <h2 className='abs-center top-1/3 w-max text-center text-5xl leading-[1.5] text-white mdd:text-4xl'>
            <span className='block'>Quản lý dễ dàng</span>
            <span className='block'>Bán hàng đơn giản</span>
          </h2>
        </div>
      </div>
      {/* content */}
      <div className='w-[54%] lgd:w-full'>
        <SignUpForm />
      </div>
    </div>
  );
}

export default Page;
