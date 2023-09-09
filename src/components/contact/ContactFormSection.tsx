'use client';

import React, { ChangeEvent, useState } from 'react';

import ButtonLink from '@/components/common/ButtonLink';
import HeadingWithDot from '@/components/common/HeadingWithDot';
import { Box, TextField } from '@/components/lib/mui';

type FormValueProps = {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};
const ContactFormSection = () => {
  const initForm: FormValueProps = {
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
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
    console.log('data:', data);
  };

  return (
    <div className='container mb-28'>
      <HeadingWithDot variant='secondary' color='black' align='center'>
        Contact Us
      </HeadingWithDot>
      <h2 className='text-center text-[40px] text-typo-1 lgd:text-3xl mdd:text-3xl'>
        Request A Call Back !
      </h2>
      <Box
        component='form'
        onSubmit={handleSubmit}
        className='mt-10 grid grid-cols-2 gap-x-8 gap-y-6 bg-white px-12 lgd:px-6 mdd:px-0'
      >
        <TextField
          id='fullName'
          name='fullName'
          label='Tên'
          variant='outlined'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
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
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
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
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          required
          value={formValue.phoneNumber}
          onChange={handleChangeForm}
        />
        <TextField
          id='subject'
          name='subject'
          label='Tên'
          variant='outlined'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          required
          value={formValue.subject}
          onChange={handleChangeForm}
        />
        <TextField
          id='message'
          name='message'
          label='Mô tả về dịch vụ bạn cần tư vấn.'
          variant='outlined'
          type='text'
          rows={4}
          multiline
          className='col-span-2 w-full bg-[#F8F8F8]'
          value={formValue.message}
          onChange={handleChangeForm}
        />
        <ButtonLink
          type='submit'
          color='primary'
          className='col-span-2 mx-auto w-fit px-[60px]'
        >
          Submit
        </ButtonLink>
      </Box>
    </div>
  );
};

export default ContactFormSection;
