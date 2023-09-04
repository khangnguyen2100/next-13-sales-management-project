import React from 'react';

import { Divider } from 'components/Mui';

import HeadingWithDot from '../common/HeadingWithDot';
import ButtonLink from '../common/ButtonLink';

const PricingOptionSection = () => {
  return (
    <div className='container my-24 flex flex-col gap-y-[92px]'>
      <div className='mx-auto max-w-[619px] text-center'>
        <HeadingWithDot
          color='black'
          variant='secondary'
          align='center'
          className='mb-4'
        >
          Simple Pricing Option
        </HeadingWithDot>
        <h2 className='text-[40px] text-typo-1 mdd:text-3xl'>
          Choose the Right Plan for Your and Your Team
        </h2>
      </div>
      <div className='grid grid-cols-3 place-items-start gap-8 lgd:grid-cols-2 smd:grid-cols-1'>
        {/* basic */}
        <div className='col-span-1 w-full bg-section-5 px-7 py-11 text-center text-typo-1 shadow-md lgd:px-4 mdd:py-8'>
          <h3 className='text-[32px] text-typo-1'>Basic</h3>
          <Divider className='!my-6' />
          <h3 className='text-[40px]'>
            $7.99<span className='text-2xl'>/ month</span>
          </h3>
          <div className='mt-6 bg-secondary px-8 py-2 text-[#208068] lg:mx-9'>
            Billed as $96 per year
          </div>
          <Divider className='!my-6' />
          <div className='text-center leading-[2.5] text-typo-3'>
            <p>Unlimited members</p>
            <p>
              <strong className='text-typo-1'>Unlimited</strong> feedback
            </p>
            <p>Weekly team Feedback Friday</p>
            <p>
              Custom Kudos{' '}
              <strong className='text-typo-1'>+9 illustration</strong>
            </p>
            <p>Team feedback history (30 items)</p>
            <p>Personal feedback</p>
          </div>
          <ButtonLink className='mt-8' color='primary' type='button'>
            Get Started
          </ButtonLink>
        </div>
        {/* advance */}
        <div className='group relative col-span-1 w-full'>
          <div className='transition-md flex-center absolute inset-x-0 top-0 z-[1] h-[50px] w-full bg-secondary text-center font-quicksand text-xl font-bold  text-white group-hover:-translate-y-full'>
            Most Popular
          </div>
          <div className='relative z-[2] w-full bg-primary px-7 py-11 text-center text-white shadow-md lgd:px-4 mdd:py-8'>
            <h3 className='text-[32px] text-white'>Advanced</h3>
            <Divider className='!my-6 bg-white' />
            <h3 className='text-[40px]'>
              $8.99<span className='text-2xl'>/ month</span>
            </h3>
            <div className='mt-6 bg-white px-8 py-2 text-primary lg:mx-9'>
              Billed as $119 per year
            </div>
            <Divider className='!my-6 bg-white' />
            <div className='text-center leading-[2.5] text-white'>
              <p>Unlimited members</p>
              <p>
                <strong className='text-bg-secondary'>Unlimited</strong>{' '}
                feedback
              </p>
              <p>Weekly team Feedback Friday</p>
              <p>
                Custom Kudos{' '}
                <strong className='text-bg-secondary'>+9 illustration</strong>
              </p>
              <p>Team feedback history (30 items)</p>
              <p>Personal feedback history (6 items)</p>
              <p>Slack integration</p>
            </div>
            <ButtonLink
              className='mt-8 !bg-white !text-primary'
              color='primary'
              type='button'
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
        {/* pro */}
        <div className='col-span-1 w-full bg-section-5 px-7 py-11 text-center text-typo-1 shadow-md lgd:px-4 mdd:py-8'>
          <h3 className='text-[32px] text-typo-1'>Pro</h3>
          <Divider className='!my-6' />
          <h3 className='text-[40px]'>
            $9.99<span className='text-2xl'>/ month</span>
          </h3>
          <div className='mt-6 bg-secondary px-8 py-2 text-[#208068] lg:mx-9'>
            Billed as $199 per year
          </div>
          <Divider className='!my-6' />
          <div className='text-center leading-[2.5] text-typo-3'>
            <p>Unlimited members</p>
            <p>
              <strong className='text-typo-1'>Unlimited</strong> feedback
            </p>
            <p>Weekly team Feedback Friday</p>
            <p>
              Custom Kudos{' '}
              <strong className='text-typo-1'>+9 illustration</strong>
            </p>
            <p>Team feedback history (30 items)</p>
            <p>Personal feedback history (6 items)</p>
            <p>Slack integration</p>
          </div>
          <ButtonLink className='mt-8' color='primary' type='button'>
            Get Started
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default PricingOptionSection;
