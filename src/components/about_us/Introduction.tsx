import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import IntroductionImg from 'public/t1con.jpg';
import VCheck from 'public/icons/v-check.svg';

const Introduction = () => {
  return (
    <div className='my-24 flex items-center gap-x-6 gap-y-16 lg:gap-x-[70px] mdd:flex-col'>
      {/* image side */}
      <div className='h-full bg-gray-100 md:w-1/2 xl:w-[40%]'>
        <div className='ml-auto mr-6 px-4 py-8 md:max-w-[456px] md:py-24  lg:mr-12'>
          <Image
            src={IntroductionImg}
            height={500}
            width={424}
            alt='intro'
            className='mx-auto'
          />
          <h3 className='mb-3 mt-5 text-3xl'>Phong cách làm việc</h3>
          <p className='mb-5 text-typo-3'>
            Tại BeeSmart, chúng tôi tự hào về một phong cách làm việc tích cực,
            sáng tạo và đồng đội. Đây không chỉ là nơi làm việc, mà còn là một
            cộng đồng năng động, nơi mỗi thành viên đóng góp vào sự thành công
            chung của chúng tôi.
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
          Sứ mệnh và tầm nhìn
        </h2>
        <p className='text-black'>
          Chúng tôi, đội ngũ BeeSmart, không chỉ là một đơn vị cung cấp giải
          pháp quản lý hàng hóa mà còn là đối tác đồng hành trên hành trình phát
          triển của doanh nghiệp bạn. Với sứ mệnh đem lại sự đơn giản và hiệu
          quả cho quản lý hàng hóa, chúng tôi tập trung vào việc kết hợp công
          nghệ tiên tiến và trải nghiệm người dùng tốt nhất.
        </p>
        <div className='mt-5 flex flex-col gap-y-3'>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={20} height={20} alt='check-icon' />
            <p className='text-sm font-medium text-typo-1'>
              Chúng tôi tập trung vào việc tạo ra giải pháp công nghệ mà mọi
              doanh nghiệp có thể dễ dàng tiếp cận và sử dụng.
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={20} height={20} alt='check-icon' />
            <p className='text-sm font-medium text-typo-1'>
              Sứ mệnh của chúng tôi là tận tâm tạo ra sản phẩm và dịch vụ chất
              lượng nhất để đảm bảo sự hài lòng của khách hàng.
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={20} height={20} alt='check-icon' />
            <p className='text-sm font-medium text-typo-1'>
              Chúng tôi hỗ trợ môi trường làm việc công bằng, hiệu quả và tạo cơ
              hội phát triển công bằng cho tất cả các thành viên trong tổ chức.
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={20} height={20} alt='check-icon' />
            <p className='text-sm font-medium text-typo-1'>
              Chúng tôi luôn đặt sự đổi mới ở trung tâm, mang đến các giải pháp
              sáng tạo để đáp ứng nhanh chóng các thách thức kinh doanh hiện
              đại.
            </p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image src={VCheck} width={20} height={20} alt='check-icon' />
            <p className='text-sm font-medium text-typo-1'>
              Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ và
              lắng nghe, tạo ra một trải nghiệm tốt nhất cho đối tác và người
              dùng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
