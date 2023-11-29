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
          Gói dịch vụ
        </HeadingWithDot>
        <h2 className='text-[40px] text-typo-1 mdd:text-3xl'>
          Chọn gói phù hợp với nhu cầu của bạn
        </h2>
      </div>
      <div className='grid grid-cols-3 place-items-start gap-8 lgd:grid-cols-2 smd:grid-cols-1'>
        {/* Basic */}
        <div className='col-span-1 w-full bg-section-5 px-7 py-11 text-center text-typo-1 shadow-md lgd:px-4 mdd:py-8'>
          <h3 className='text-[32px] text-typo-1'>Basic</h3>
          <Divider className='!my-6' />
          <h3 className='text-[40px]'>
            159.000 VNĐ<span className='text-2xl'>/ tháng</span>
          </h3>
          <div className='text-center leading-[2.5] text-typo-3'>
            <p>
              Quản lý <strong className='text-typo-1'>1 cửa hàng</strong>
            </p>
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
            Đăng ký
          </ButtonLink>
        </div>
        {/* Advance */}
        <div className='group relative col-span-1 w-full'>
          <div className='transition-md flex-center absolute inset-x-0 top-0 z-[1] h-[50px] w-full bg-secondary text-center font-quicksand text-xl font-bold  text-white group-hover:-translate-y-full'>
            Phổ biến nhất
          </div>
          <div className='relative z-[2] w-full bg-primary px-7 py-11 text-center text-white shadow-md lgd:px-4 mdd:py-8'>
            <h3 className='text-[32px] text-white'>Advanced</h3>
            <Divider className='!my-6 bg-white' />
            <h3 className='text-[40px]'>
              229.000 VNĐ<span className='text-2xl'>/ tháng</span>
            </h3>
            <div className='text-center leading-[2.5] text-typo-3'>
              <p>
                Quản lý <strong className='text-typo-1'>3 cửa hàng</strong>
              </p>
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
              Đăng ký
            </ButtonLink>
          </div>
        </div>
        {/* Premium */}
        <div className='col-span-1 w-full bg-section-5 px-7 py-11 text-center text-typo-1 shadow-md lgd:px-4 mdd:py-8'>
          <h3 className='text-[32px] text-typo-1'>Pro</h3>
          <Divider className='!my-6' />
          <h3 className='text-[40px]'>
            299.000 VNĐ<span className='text-2xl'>/ tháng</span>
          </h3>
          <div className='text-center leading-[2.5] text-typo-3'>
            <p>
              <strong className='text-typo-1'>
                Tạo cửa hàng không giới hạn
              </strong>
            </p>
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
            Đăng ký
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
                planType && handleSubscribe(planType);
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
