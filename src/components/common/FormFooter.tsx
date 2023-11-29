'use client';

import { useState } from 'react';

import { Input } from '../lib/joy';

import ButtonLink from './ButtonLink';
import { enqueueSnackbar } from 'notistack';

function FooterForm() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <form
      className='flex items-center'
      onSubmit={e => {
        e.preventDefault();
        e.preventDefault();

        const data = new FormData(e.currentTarget);
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
      }}
    >
      <Input
        type='email'
        required
        name='email'
        placeholder='Địa chỉ email của bạn'
        className='w-full flex-1 rounded-none border-none bg-white px-5 py-4 font-medium text-typo-1 outline-none placeholder-shown:text-typo-3 focus:outline-none'
        sx={{
          '&::before': {
            display: 'none',
          },
        }}
      />
      <ButtonLink
        color='primary'
        type='submit'
        loading={isLoading}
        className='h-[56px] w-[116px] rounded-l-none !p-[0] mdd:text-sm'
      >
        Đăng ký
      </ButtonLink>
    </form>
  );
}

export default FooterForm;
