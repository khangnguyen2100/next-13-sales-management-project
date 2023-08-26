import Image from 'next/image';

import { Divider } from 'components/Mui/index';
import VCheckSecondary from 'public/icons/v-check-secondary.svg';

import HeadingWithDot from '../../common/HeadingWithDot';

import SubscribeForm from './SubscribeForm';

type ContentProps = {
  title: string;
  description: string;
};
const leftContentList: ContentProps[] = [
  {
    title: 'Lên kế hoạch',
    description:
      'Leverage agile frameworks to provide synopsis for high level overviews.',
  },
  {
    title: 'Tổng hợp thông tin',
    description:
      'Leverage agile frameworks to provide synopsis for high level overviews.',
  },
  {
    title: 'Đánh giá',
    description:
      'Leverage agile frameworks to provide synopsis for high level overviews.',
  },
];
const LeftSide = () => {
  return (
    <div className='w-full md:max-w-[552px]'>
      <HeadingWithDot
        color='white'
        variant='secondary'
        className='mb-4 justify-start'
      >
        Quy trình làm việc
      </HeadingWithDot>
      <h2 className='text-[40px] text-white lgd:text-3xl mdd:text-3xl'>
        <span className='block'>Để doanh nghiệp của bạn</span>
        <span className='block'>Có một bước tiến mới</span>
      </h2>
      <div className='md: mt-10 flex max-w-[450px] flex-col gap-y-5'>
        {leftContentList.map((item, i) => {
          const { description, title } = item;
          return (
            <div className='flex items-start gap-4' key={i}>
              <Image
                src={VCheckSecondary}
                width={27}
                height={27}
                alt='icon'
                className='translate-y-[8px]'
              />
              <div className='block flex-1 text-white'>
                <h3 className='text-[22px]'>{title}</h3>
                <p>{description}</p>
                <Divider className='mt-5 bg-white' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Subscribe = () => {
  return (
    <div className='my-24 w-full bg-primary'>
      <div className='mx-auto flex max-w-large items-start gap-x-6 gap-y-16 px-4 py-24 lg:gap-x-12 mdd:flex-col mdd:items-center'>
        <LeftSide />
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Subscribe;
