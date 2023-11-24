'use client';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Stack,
} from '@mui/joy';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

import choosePlanAPI from '@/api/subcribe';
import { Divider } from '@/components/lib/mui';
import { randomString } from '@/utils/randomString';

import ButtonLink from '../common/ButtonLink';
import HeadingWithDot from '../common/HeadingWithDot';

type PlanType = 'Basic' | 'Advance' | 'Premium' | null;
const PricingOptionSection = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [planType, setPlanType] = useState<PlanType>();

  const handleSubscribe = async (planType: PlanType) => {
    const plan = planType === 'Basic' ? 1 : planType === 'Advance' ? 2 : 3;
    const total =
      planType === 'Basic' ? 159000 : planType === 'Advance' ? 229000 : 299000;
    const data = {
      MaDH: randomString('HD'),
      order_desc: `${email || 'null'} nâng cấp ${planType}`,
      order_type: plan,
      language: 'vn',
      total: total,
      bank_code: 'NCB',
    };
    try {
      const res = await choosePlanAPI.subscribe(data);
      console.log('res:', res);
      if (res.data) {
        // open new tab
        window.open(res.data, '_blank');
      } else {
        enqueueSnackbar('Đã có lỗi xảy ra', {
          variant: 'error',
        });
      }
    } catch (error) {
      console.log('error:', error);
    }
    console.log('planType:', planType);
  };

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
        {/* Basic */}
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
          <ButtonLink
            className='mt-8 cursor-pointer'
            color='primary'
            type='button'
            onClick={() => {
              setPlanType('Basic');
              setOpen(true);
            }}
          >
            Get Started
          </ButtonLink>
        </div>
        {/* Advance */}
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
              className='mt-8 cursor-pointer !bg-white !text-primary'
              color='primary'
              type='button'
              onClick={() => {
                setPlanType('Advance');
                setOpen(true);
              }}
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
        {/* Premium */}
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
          <ButtonLink
            className='mt-8 cursor-pointer'
            color='primary'
            type='button'
            onClick={() => {
              setPlanType('Premium');
              setOpen(true);
            }}
          >
            Get Started
          </ButtonLink>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className='min-w-[500px]'
      >
        <ModalDialog className='min-w-[500px]'>
          <h3 className='mb-2 text-xl font-bold'>
            Đăng ký thành viên gói{' '}
            {planType === 'Basic'
              ? 'Basic'
              : planType === 'Advance'
              ? 'Advance'
              : 'Pro'}
          </h3>
          <p className='mb-8'>Nhập Email tài khoản của bạn</p>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                autoFocus
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Link href='/sign-up' className='mb-2 mt-3 text-end text-typo-1'>
                Bạn chưa có tài khoản?
                <a className='text-sm text-blue-500 underline'> Đăng ký</a>
              </Link>
            </FormControl>
            <Button
              onClick={() => {
                // check is email valid
                const regex = new RegExp(
                  '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
                );
                if (!regex.test(email)) {
                  enqueueSnackbar('Email không hợp lệ', {
                    variant: 'error',
                  });
                  return;
                }
                setOpen(false);
                handleSubscribe(planType);
              }}
            >
              Xác nhận
            </Button>
          </Stack>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default PricingOptionSection;
