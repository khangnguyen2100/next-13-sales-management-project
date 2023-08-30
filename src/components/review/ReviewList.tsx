import Image, { StaticImageData } from 'next/image';
import React, { Fragment } from 'react';

import reviewer1 from 'public/images/review/avatar-1.jpg';
import reviewer2 from 'public/images/review/avatar-2.jpg';
import { Rating } from 'components/Mui';

import HeadingWithDot from '../common/HeadingWithDot';
type ReviewItemProps = {
  reviewer: string;
  occupation: string;
  avatar: StaticImageData;
  content: string;
  rating: number;
};
const reviews: ReviewItemProps[] = [
  {
    reviewer: 'Lê Quang Khánh',
    content:
      '“ dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.',
    avatar: reviewer1,
    occupation: 'Designer',
    rating: 4.5,
  },
  {
    reviewer: 'Cincinnati',
    content:
      '“ Leverage agile frameworks to provide a robust synopsis for high level overviews ”',
    avatar: reviewer2,
    occupation: 'Designer',
    rating: 4,
  },
];

const ReviewItem = (props: ReviewItemProps) => {
  const { avatar, content, occupation, rating, reviewer } = props;
  return (
    <div className='flex w-full max-w-[411px] flex-col gap-y-8 bg-[#F6F6F6] px-9 py-[50px] shadow-md'>
      {/* reviewer info */}
      <div className='flex items-center gap-4'>
        <Image src={avatar} width={100} height={100} alt={reviewer} />
        <div className='flex-1'>
          <h3 className='text-xl text-typo-1'>{reviewer}</h3>
          <p className='text-typo-3'>{occupation}</p>
          <Rating name='read-only' value={rating} readOnly precision={0.1} />
        </div>
      </div>
      {/* content */}
      <p className='text-typo-3'>{content}</p>
    </div>
  );
};

const ReviewList = () => {
  return (
    <div className='container my-24 flex flex-col gap-9 lg:flex-row'>
      <div className='w-full lg:max-w-[324px]'>
        <HeadingWithDot color='black' variant='primary' align='start'>
          Đánh giá
        </HeadingWithDot>
        <h2 className='mb-6 mt-4 text-[40px] text-typo-1 lgd:text-3xl mdd:text-2xl'>
          Khách hàng của chúng tôi nói gì
        </h2>
        <p className='text-typo-2'>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.Iterative
        </p>
      </div>
      <div className='grid grid-cols-2 gap-9 smd:grid-cols-1 smd:place-items-center'>
        {reviews.map((item, i) => {
          return (
            <Fragment key={i}>
              <ReviewItem {...item} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewList;
