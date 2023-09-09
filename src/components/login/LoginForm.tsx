'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import type { SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

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
    <form
      onSubmit={(event: React.FormEvent<SignInFormElement>) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const data = {
          email: formElements.email.value,
          password: formElements.password.value,
          persistent: formElements.persistent.checked,
        };
        alert(JSON.stringify(data, null, 2));
      }}
    >
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input type='email' name='email' />
      </FormControl>
      <FormControl required>
        <FormLabel>Mật khẩu</FormLabel>
        <Input type='password' name='password' />
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Checkbox size='sm' label='Lưu phiên đăng nhập' name='persistent' />
        <Link fontSize='sm' href='#replace-with-a-link' fontWeight='lg'>
          Quên mật khẩu?
        </Link>
      </Box>
      <Button type='submit' fullWidth>
        Đăng nhập
      </Button>
    </form>
  );
};

export default LoginForm;
