'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import type { SelectChangeEvent } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import authAPI from '@/api/auth';
import ButtonLink from '@/components/common/ButtonLink';
import { Box, MenuItem, Select, TextField } from '@/components/lib/mui';
import { SignUpType } from '@/constants/types/auth';
import { shopTypes } from '@/mocks/shopType';
import district_json from 'mocks/quan_huyen.json';
import province_json from 'mocks/tinh_tp.json';

type FormValue = {
  fullName: string;
  email: string;
  phoneNumber: string;
  province: string;
  district: string;
  shopName: string;
  password: string;
  repeatPassword: string;
  addressDetail: string;
  shopType: string;
};

const districtJson = Object.values(district_json);
const provinceData = Object.values(province_json);

const formSchema = yup
  .object({
    fullName: yup
      .string()
      .required('Vui lòng nhập họ tên')
      .min(5, 'Họ tên phải có ít nhất 5 ký tự')
      .max(100, 'Họ tên không được vượt quá 100 ký tự'),
    email: yup
      .string()
      .email('Email không hợp lệ')
      .required('Vui lòng nhập email'),
    phoneNumber: yup
      .string()
      .required('Vui lòng nhập số điện thoại')
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ'),
    province: yup.string().required('Vui lòng chọn tỉnh/thành phố'),
    district: yup.string().required('Vui lòng chọn quận/huyện'),
    shopName: yup
      .string()
      .required('Vui lòng nhập tên cửa hàng')
      .min(6, 'Tên cửa hàng phải có ít nhất 6 ký tự')
      .max(100, 'Tên cửa hàng không được vượt quá 100 ký tự'),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(100, 'Mật khẩu không được vượt quá 100 ký tự'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Mật khẩu không trùng khớp')
      .required('Vui lòng nhập lại mật khẩu')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .max(100, 'Mật khẩu không được vượt quá 100 ký tự'),
    addressDetail: yup.string().required('Vui lòng nhập địa chỉ chi tiết'),
    shopType: yup.string().required('Vui lòng chọn loại cửa hàng'),
  })
  .required();

const SignUpForm = () => {
  const initForm: FormValue = {
    fullName: '',
    email: '',
    phoneNumber: '',
    district: '760', // quan 1 - HCM
    province: '79', // ho chi minh
    shopName: '',
    password: '',
    repeatPassword: '',
    addressDetail: '',
    shopType: '9',
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
  const [districtData, setDistrictData] = useState(districtJson);
  const formValues = watch();

  const onSubmit = async (data: FormValue) => {
    const provinceName = provinceData.find(item => item.code === data.province)
      ?.name_with_type;
    const districtName =
      districtData.find(item => item.code === data.district)?.name_with_type ||
      '';
    const addressDetail = `${data.addressDetail}, ${districtName}, ${provinceName}`;
    const transformData: SignUpType = {
      HoTen: data.fullName,
      email: data.email,
      sdt: data.phoneNumber,
      tenCh: data.shopName,
      password: data.password,
      idLoaiCh: data.shopType,
      diaChi: addressDetail,
      DiaChi: addressDetail,
      quan: districtName,
    };
    console.log('transformData:', transformData);
    try {
      const res = await authAPI.signUp(transformData);
      if (res.status === 200) {
        enqueueSnackbar('Đăng ký thành công', { variant: 'success' });
        // navigate to beesmart-admin-stage.vercel.app
        window.location.href = 'https://beesmart-admin-stage.vercel.app';
        // navigate to login page
      } else {
        enqueueSnackbar('Đăng ký thất bại', { variant: 'error' });
      }
      console.log('res:', res);
    } catch (error) {
      console.log('error:', error);
    }
  };
  const handleChangeForm = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
  ) => {
    const { name, value } = event.target;
    setValue(name as keyof FormValue, value);
  };

  // get district data when province change
  useEffect(() => {
    if (formValues.province) {
      const districtFilter = districtJson.filter(
        item => item.parent_code === formValues.province,
      );
      setDistrictData(districtFilter);

      // reset district code when change province
      if (!districtFilter.some(item => item.code === formValues.district)) {
        setValue('district', '');
      }
    }
  }, [formValues.province]);

  return (
    <div className='container mb-5'>
      <h2 className='text-center text-[40px] text-typo-1 lgd:text-3xl mdd:text-3xl'>
        Đăng ký tài khoản
      </h2>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-4 grid max-w-[550px] grid-cols-2 gap-x-4 gap-y-2 bg-white'
      >
        <TextField
          id='fullName'
          {...register('fullName', {
            required: true,
            maxLength: 100,
            minLength: 5,
          })}
          label='Họ và Tên'
          variant='outlined'
          className='col-span-2 w-full bg-[#F8F8F8] smd:col-span-2'
          onChange={handleChangeForm}
          helperText={errors.fullName?.message}
          error={!!errors.fullName}
        />
        <TextField
          id='email'
          {...register('email', {
            required: true,
          })}
          label='Địa chỉ Email'
          variant='outlined'
          type='email'
          className='col-span-2 w-full bg-[#F8F8F8] smd:col-span-2'
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
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          onChange={handleChangeForm}
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        <TextField
          id='repeatPassword'
          {...register('repeatPassword', {
            required: true,
            minLength: 6,
            maxLength: 100,
          })}
          label='Nhập lại mật khẩu'
          variant='outlined'
          type='password'
          className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
          onChange={handleChangeForm}
          helperText={errors.repeatPassword?.message}
          error={!!errors.repeatPassword}
        />
        <TextField
          id='phoneNumber'
          {...register('phoneNumber', {
            required: true,
          })}
          label='Số điện thoại'
          variant='outlined'
          type='tel'
          className='col-span-2 w-full bg-[#F8F8F8] smd:col-span-2'
          onChange={handleChangeForm}
          helperText={errors.phoneNumber?.message}
          error={!!errors.phoneNumber}
        />
        <TextField
          id='shopName'
          {...register('shopName', {
            required: true,
            minLength: 6,
            maxLength: 100,
          })}
          label='Tên cửa hàng của bạn'
          variant='outlined'
          type='text'
          className='col-span-2 w-full bg-[#F8F8F8] smd:col-span-2'
          onChange={handleChangeForm}
          helperText={errors.shopName?.message}
          error={!!errors.shopName}
        />
        <div className='col-span-2 w-full'>
          <Select
            label='Loại cửa hàng'
            {...register('shopType', {
              required: true,
            })}
            onChange={handleChangeForm}
            className='w-full bg-[#F8F8F8]'
            value={formValues.shopType}
            defaultValue={initForm.shopType}
            error={!!errors.shopType}
          >
            {shopTypes.map((item, i) => (
              <MenuItem key={i} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <p className='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'>
            {errors.shopType?.message}
          </p>
        </div>
        <div className='col-span-1 w-full smd:col-span-2'>
          <Select
            label='Tỉnh/Thành phố'
            {...register('province', {
              required: true,
            })}
            onChange={handleChangeForm}
            className='w-full bg-[#F8F8F8]'
            value={formValues.province}
            defaultValue={initForm.province}
            error={!!errors.province}
          >
            {provinceData.map((item, i) => (
              <MenuItem key={i} value={item.code}>
                {item.name_with_type}
              </MenuItem>
            ))}
          </Select>
          <p className='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'>
            {errors.province?.message}
          </p>
        </div>
        <div className='col-span-1 w-full smd:col-span-2'>
          <Select
            label='Quận/Huyện'
            {...register('district', {
              required: true,
            })}
            onChange={handleChangeForm}
            className='w-full bg-[#F8F8F8]'
            value={formValues.district}
            defaultValue={initForm.district}
            error={!!errors.district}
          >
            {districtData.map((item, i) => (
              <MenuItem key={i} value={item.code}>
                {item.name_with_type}
              </MenuItem>
            ))}
          </Select>
          <p className='MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root'>
            {errors.district?.message}
          </p>
        </div>
        <TextField
          id='addressDetail'
          {...register('addressDetail', {
            required: true,
            minLength: 6,
            maxLength: 100,
          })}
          label='Số nhà, tên đường, phường/xã'
          variant='outlined'
          type='text'
          className='col-span-2 w-full bg-[#F8F8F8] smd:col-span-2'
          onChange={handleChangeForm}
          helperText={errors.addressDetail?.message}
          error={!!errors.addressDetail}
        />
        <ButtonLink
          type='submit'
          color='primary'
          className='col-span-2 mx-auto mt-4 w-fit cursor-pointer'
        >
          Đăng ký
        </ButtonLink>
      </Box>
    </div>
  );
};

export default SignUpForm;
