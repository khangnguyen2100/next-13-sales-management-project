'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';

import ButtonLink from '@/components/common/ButtonLink';
import HeadingWithDot from '@/components/common/HeadingWithDot';
import { Box, TextField } from '@/components/lib/mui';

type FormValueProps = {
  fullName: string;
  email: string;
  phoneNumber: string;
  bookingDate: string;
  bookingTime: string;
  note: string;
};
const SubscribeForm = () => {
  const initForm = {
    fullName: '',
    email: '',
    phoneNumber: '',
    bookingDate: '',
    bookingTime: '12:00',
    note: '',
  };
  const [formValue, setFormValue] = useState<FormValueProps>(initForm);

  const handleChangeForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      date: data.get('booking-date'),
      time: data.get('time'),
    });
  };

  useEffect(() => {
    // set default value for date
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate() + 1).toString().padStart(2, '0');
    const today = `${year}-${month}-${day}`;

    setFormValue(prev => ({
      ...prev,
      bookingDate: today,
    }));
  }, []);
  return (
    <div className='w-full md:max-w-[580px]'>
      <HeadingWithDot variant='secondary' color='white' align='start'>
        Đăng ký ngay để nhận ưu đãi
      </HeadingWithDot>
      <h2 className='text-[40px] text-white lgd:text-3xl mdd:text-3xl'>
        <span className='block'>10 ngày dùng thử</span>
        <span className='block'>MIỄN PHÍ</span>
      </h2>
      <Box
        component='form'
        onSubmit={handleSubmit}
        className='mt-6 grid grid-cols-2 gap-x-6 gap-y-[30px] bg-white p-14 mdd:px-7'
      >
        <TextField
          id='fullName'
          name='fullName'
          label='Tên'
          variant='outlined'
          className='col-span-2 w-full bg-[#F8F8F8]'
          required
          value={formValue.fullName}
          onChange={handleChangeForm}
        />
        <TextField
          id='email'
          name='email'
          label='Địa chỉ Email'
          variant='outlined'
          type='email'
          className='col-span-2 w-full bg-[#F8F8F8]'
          required
          value={formValue.email}
          onChange={handleChangeForm}
        />
        <TextField
          id='phoneNumber'
          name='phoneNumber'
          label='Số điện thoại'
          variant='outlined'
          type='tel'
          className='col-span-2 w-full bg-[#F8F8F8]'
          required
          value={formValue.phoneNumber}
          onChange={handleChangeForm}
        />

        <TextField
          id='bookingDate'
          name='bookingDate'
          label='Ngày hẹn'
          variant='outlined'
          type='date'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          required
          value={formValue.bookingDate}
          onChange={handleChangeForm}
        />
        <TextField
          id='bookingTime'
          name='bookingTime'
          type='time'
          label='Thời gian'
          variant='outlined'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          required
          value={formValue.bookingTime}
          onChange={handleChangeForm}
        />
        <TextField
          id='note'
          name='note'
          label='Mô tả về dịch vụ bạn cần tư vấn.'
          variant='outlined'
          type='text'
          rows={4}
          multiline
          className='col-span-2 w-full bg-[#F8F8F8]'
          value={formValue.note}
          onChange={handleChangeForm}
        />
        <ButtonLink type='submit' color='secondary' className='w-fit px-[60px]'>
          Gửi
        </ButtonLink>
      </Box>
    </div>
  );
};

export default SubscribeForm;
