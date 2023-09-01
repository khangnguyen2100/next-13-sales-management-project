import Image from 'next/image';

import ButtonLink from '@/components/common/ButtonLink';
import Banner from 'public/images/404/banner.jpg';
import ClientLayout from '@/components/Layout/ClientLayout';
export default function NotFound() {
  return (
    <ClientLayout>
      <div className='relative  min-h-[calc(100vh-92px)] w-full mdd:min-h-[calc(100vh-71px)]'>
        <Image src={Banner} fill alt='404 banner' className='object-cover' />
        <div className='absolute inset-0 h-full w-full bg-section-2/90 backdrop-blur-[9.5px]'></div>
        <div className='abs-center w-full max-w-[700px] px-4 text-center'>
          <h1 className='text-[140px] font-black leading-none text-white'>
            404
          </h1>
          <h2 className='text-5xl text-white lgd:text-4xl mdd:text-3xl'>
            Oops! Page not found!
          </h2>
          <p className='mt-3 text-white'>
            Leveling customer service for state of the art customer service
            innovate product for reliable supply engage web services
            cutting-edge deliverables.
          </p>
          <ButtonLink
            type='button'
            href='/'
            color='secondary'
            className='mt-10'
          >
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </ClientLayout>
  );
}
