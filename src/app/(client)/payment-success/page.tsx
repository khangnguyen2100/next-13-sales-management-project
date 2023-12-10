import { Metadata } from 'next';
import Image from 'next/image';

import ButtonLink from '@/components/common/ButtonLink';

export const metadata: Metadata = {
  title: 'Thanh toán thành công - Beesmart',
};

export default function Home() {
  return (
    <div className='relative  min-h-[calc(100vh-92px)] w-full mdd:min-h-[calc(100vh-71px)]'>
      <Image
        src={
          'https://images.pexels.com/photos/4552990/pexels-photo-4552990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        fill
        alt='404 banner'
        className='object-cover'
      />
      <div className='absolute inset-0 h-full w-full bg-section-2/90 backdrop-blur-[4.5px]'></div>
      <div className='abs-center w-full max-w-[700px] px-4 text-center'>
        <h2 className='text-5xl text-white lgd:text-4xl mdd:text-3xl'>
          Thanh toán thành công
        </h2>
        <p className='mt-2 text-lg text-white'>
          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Bạn có thể truy cập vào
          tài khoản của mình để xem chi tiết.
        </p>
        <ButtonLink
          type='button'
          href={process.env.NEXT_PUBLIC_HOST_URL || '/'}
          color='primary'
          className='mt-6'
        >
          Đăng nhập
        </ButtonLink>
      </div>
    </div>
  );
}
