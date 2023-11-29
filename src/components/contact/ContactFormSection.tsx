'use client';

import React, { ChangeEvent, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { SlPin } from 'react-icons/sl';

import ButtonLink from '@/components/common/ButtonLink';
import HeadingWithDot from '@/components/common/HeadingWithDot';
import { Box, TextField } from '@/components/lib/mui';

type FormValueProps = {
  ten: string;
  email: string;
  sdt: string;
  diaChi: string;
  moTa: string;
};
const ContactFormSection = () => {
  const initForm: FormValueProps = {
    ten: '',
    email: '',
    sdt: '',
    diaChi: '',
    moTa: '',
  };
  const [formValue, setFormValue] = useState<FormValueProps>(initForm);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const options = {
      method: 'POST',
      body: data,
    };
    setIsLoading(true);
    fetch('https://admin.beesmart.io.vn/api/lien-he', options)
      .then(response => {
        // Kiểm tra xem request có thành công hay không (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Chuyển đổi response thành JSON hoặc bất kỳ định dạng nào bạn mong muốn
        return response.json();
      })
      .then(data => {
        // Xử lý dữ liệu nhận được từ máy chủ
        console.log('Data received:', data);
        if (data.status === false)
          enqueueSnackbar('Gửi thông tin liên hệ thất bại', {
            variant: 'error',
          });
        if (data.status === true) {
          setIsLoading(prev => !prev);
          enqueueSnackbar('Gửi thông tin liên hệ thành công', {
            variant: 'success',
          });
        }
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error:', error);
      });
  };

  return (
    <div className='container mb-28'>
      <HeadingWithDot variant='secondary' color='black' align='center'>
        Nhập thông tin liên hệ tư vấn
      </HeadingWithDot>
      <h2 className='text-center text-[40px] text-typo-1 lgd:text-3xl mdd:text-3xl'>
        Đăng kí thông tin tư vấn tại đây!
      </h2>
      <Box
        component='form'
        onSubmit={handleSubmit}
        className='mt-10 grid grid-cols-2 gap-x-8 gap-y-6 bg-white px-12 lgd:px-6 mdd:px-0'
      >
        <TextField
          id='ten'
          name='ten'
          label='Tên'
          variant='outlined'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          required
          value={formValue.ten}
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
          id='sdt'
          name='sdt'
          label='Số điện thoại'
          variant='outlined'
          type='number'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          required
          value={formValue.sdt}
          onChange={handleChangeForm}
        />
        <TextField
          id='diaChi'
          name='diaChi'
          label='Địa chỉ'
          variant='outlined'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          required
          value={formValue.diaChi}
          onChange={handleChangeForm}
        />
        <TextField
          id='moTa'
          name='moTa'
          label='Mô tả về dịch vụ bạn cần tư vấn.'
          variant='outlined'
          type='text'
          rows={4}
          multiline
          className='col-span-2 w-full bg-[#F8F8F8]'
          value={formValue.moTa}
          onChange={handleChangeForm}
        />
        <ButtonLink
          loading={isLoading}
          type='submit'
          color='primary'
          className='transition-md col-span-2 mx-auto w-fit cursor-pointer px-[60px] opacity-50 hover:opacity-100'
        >
          Gửi
        </ButtonLink>
      </Box>
    </div>
  );
};

export default ContactFormSection;
