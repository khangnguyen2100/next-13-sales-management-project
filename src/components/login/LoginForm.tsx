'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import type { SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import ButtonLink from '@/components/common/ButtonLink';
import { Box, TextField } from 'components/Mui/index';

type FormValue = {
  email: string;
  password: string;
};

const formSchema = yup
  .object({
    email: yup
      .string()
      .email('Email không hợp lệ')
      .required('Vui lòng nhập email'),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(100, 'Mật khẩu không được vượt quá 100 ký tự'),
  })
  .required();

const LoginForm = () => {
  const initForm: FormValue = {
    email: '',
    password: '',
  };

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(formSchema),
    defaultValues: initForm,
  });
  const formValues = watch();

  const onSubmit = (data: FormValue) => {
    console.log('data:', data);
  };
  const handleChangeForm = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => {
    const { name, value } = event.target;
    setValue(name as keyof FormValue, value);
  };

  return (
    <div className='container mb-5'>
      <h2 className='text-center text-3xl text-typo-1'>Đăng Nhập</h2>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-4 grid max-w-[550px] w-full grid-cols-2 gap-x-4 gap-y-5 bg-white'
      >
        <TextField
          id='email'
          {...register('email', {
            required: true,
          })}
          label='Địa chỉ Email'
          variant='outlined'
          type='email'
          className='col-span-2 w-full bg-[#F8F8F8]'
          onChange={handleChangeForm}
          helperText={errors.email?.message}
          error={!!errors.email}
        />
        <TextField
          id='password'
          {...register('password', {
            required: true,
            minLength: 6,
            maxLength: 100,
          })}
          label='Mật khẩu'
          variant='outlined'
          type='password'
          className='col-span-2 w-full bg-[#F8F8F8]'
          onChange={handleChangeForm}
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        <ButtonLink
          type='submit'
          color='primary'
          className='col-span-1 ml-auto mt-4 w-fit'
        >
          Đăng nhập
        </ButtonLink>
      </Box>
    </div>
  );
};

export default LoginForm;
