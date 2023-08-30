import Image from 'next/image';

import { CircularProgress } from 'components/Mui';
import starIcon from 'public/icons/star.svg';
import vCheckIcon from 'public/icons/v-check-secondary.svg';

import ButtonLink from '../common/ButtonLink';
import HeadingWithDot from '../common/HeadingWithDot';

type CircularItemProps = {
  heading: string;
  description: string;
  value: number;
};
const CircularItem = (props: CircularItemProps) => {
  const { heading, description, value } = props;
  return (
    <div className='col-span-1 flex w-full gap-3 bg-[#F4F4F4]  p-7'>
      <div className='flex-center relative h-[80px] w-[80px] shrink-0 rounded-full bg-white'>
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
          <h3 className='text-xl font-semibold text-typo-1'>{value}%</h3>
        </div>
      </div>
      <div className='text-typo-1'>
        <p>{description}</p>
        <h3 className='text-lg'>{heading}</h3>
      </div>
    </div>
  );
};
const ServicesAdvance = () => {
  return (
    <div className='flex-center container my-24 w-full gap-x-[72px] gap-y-10 lgd:flex-col'>
      {/* content */}
      <div className='text-typo-1'>
        {/* header */}
        <div className='lg:max-w-[572px]'>
          <HeadingWithDot color='black' variant='primary' align='start'>
            Tại sao lại chọn KioViet
          </HeadingWithDot>
          <h2 className='mb-6 mt-3 text-3xl font-bold mdd:text-2xl'>
            Chúng tôi cung cấp giải pháp để phát triển doanh nghiệp của bạn
          </h2>
          <p className='mt-2 text-lg text-typo-3'>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. thinking to further the overall proposition.
          </p>
        </div>

        {/* check list */}
        <div className='mt-9 grid grid-cols-2 gap-x-5 gap-y-6  mobile:grid-cols-1'>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='text-lg text-typo-1 '>
              <span className='font-bold '>2,800+ </span>
              KH đang hoạt động
            </p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='text-lg text-typo-1 '>Kênh hỗ trợ youtube</p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='text-lg text-typo-1 '>
              <span className='font-bold'>1,670 + </span>
              <span className='text-[#FFB342]'>5 </span>
              <Image
                src={starIcon}
                width={17}
                height={17}
                alt='star'
                className='inline-block'
              />
              {' đánh giá'}
            </p>
          </div>
          <div className='col-span-1 flex items-center gap-x-2'>
            <Image src={vCheckIcon} width={27} height={27} alt='v-check-icon' />
            <p className='text-lg text-typo-1 '>Kênh hỗ trợ youtube</p>
          </div>
        </div>
        <ButtonLink
          href='/contact'
          color='primary'
          type='button'
          className='mt-12'
        >
          Contact Us
        </ButtonLink>
      </div>
      {/* circular progress */}
      <div className='grid shrink-0 grid-cols-1 gap-8 lg:max-w-[520px]'>
        <CircularItem
          heading='Đã đánh giá & phản hồi'
          description='Khách hàng'
          value={95}
        />
        <CircularItem heading='Đã hoàn thành' description='Dự án' value={85} />
      </div>
    </div>
  );
};

export default ServicesAdvance;
