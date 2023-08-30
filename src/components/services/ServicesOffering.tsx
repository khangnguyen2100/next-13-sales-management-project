import Image, { StaticImageData } from 'next/image';

import Icon1 from 'public/icons/service-icon-1.svg';
import Icon2 from 'public/icons/service-icon-2.svg';
import Icon3 from 'public/icons/service-icon-3.svg';
import Icon4 from 'public/icons/service-icon-4.svg';

import HeadingWithDot from '../common/HeadingWithDot';
type OfferingItem = {
  heading: string;
  description: string;
  icon: StaticImageData;
};
const offeringList: OfferingItem[] = [
  {
    heading: 'Product development',
    description: 'level overviews proposition.',
    icon: Icon1,
  },
  {
    heading: 'UI/UX designing',
    description: 'level overviews proposition.',
    icon: Icon2,
  },
  {
    heading: 'Data analysis',
    description: 'level overviews proposition.',
    icon: Icon3,
  },
  {
    heading: 'Content management',
    description: 'level overviews proposition.',
    icon: Icon4,
  },
];
const ServicesOffering = () => {
  return (
    <div className='w-full bg-section-1 py-24'>
      <div className='mx-auto max-w-large px-4'>
        {/* header */}
        <div className='mb-10 flex items-center justify-between gap-y-8 mdd:flex-col'>
          <div className='flex flex-col items-start gap-y-3 mdd:w-full'>
            <HeadingWithDot
              color='white'
              variant='secondary'
              className='text-left'
            >
              What we’re offering
            </HeadingWithDot>
            <h2 className='text-3xl text-white'>
              <span className='block'>Services we’re providing </span>
              <span className='block'>to our customers</span>
            </h2>
          </div>
          <p className='shrink text-lg text-white md:max-w-[48%] mdd:w-full'>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            service for state of the art customer service.
          </p>
        </div>
        <div className='grid grid-cols-4 gap-7 lgd:grid-cols-3 mdd:grid-cols-2 smd:grid-cols-1'>
          {offeringList.map((item, i) => {
            const { heading, description, icon } = item;
            return (
              <div
                key={i}
                className='flex-center transition-md group col-span-1 min-h-[315px] flex-col gap-y-4 border border-[#636363] bg-transparent shadow-sm hover:border-primary hover:bg-primary'
              >
                <Image src={icon} width={60} height={60} alt={heading} />
                <div className='max-w-[171px] text-center text-white'>
                  <h3 className='mb-5 text-[25px] mdd:text-xl'>{heading}</h3>
                  <p className='text-lg'>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesOffering;
