'use client';
import { enqueueSnackbar } from 'notistack';
import { ChangeEvent, useEffect, useState } from 'react';

import { Box, TextField } from '@/components/lib/mui';

import ButtonLink from '../common/ButtonLink';
type CommentProps = {
  ngayDang: string;
  noiDung: string;
  email: string;
  hoTen: string;
  idTin: string;
};
async function getComments(idTin: string) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/binh-luan?idTin=${idTin}`,
    {
      cache: 'no-store',
    },
  );
  const data = await res.json();
  return data.data;
}
function CommentBlock({
  data,
  idTin,
}: {
  data: CommentProps[];
  idTin: string;
}) {
  const initForm: CommentProps = {
    hoTen: '',
    email: '',
    ngayDang: '',
    noiDung: '',
    idTin: idTin,
  };
  const [formValue, setFormValue] = useState<CommentProps>(initForm);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
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
    console.log(event.currentTarget);
    const data = new FormData(event.currentTarget);
    const options = {
      method: 'POST',
      body: data,
    };
    setIsLoading(true);
    fetch('https://admin.beesmart.io.vn/api/binh-luan', options)
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
          enqueueSnackbar('Thêm bình luận thất bại', {
            variant: 'error',
          });
        if (data.status === true) {
          setIsLoading(prev => !prev);
          enqueueSnackbar('Thêm bình luận thành công', {
            variant: 'success',
          });
        }
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    (async () => {
      const data = await getComments(idTin);
      console.log(data);
      setComments(data);
    })();
  }, [isLoading]);
  return (
    <>
      <div className='mt-8 rounded-xl bg-[#f9fafb] py-4 shadow-lg'>
        <div className='text-bold mb-3 border border-transparent border-b-slate-600 px-6 pt-5 text-xl'>
          Thêm bình luận
        </div>
        <Box
          component='form'
          onSubmit={handleSubmit}
          className='mt-10 grid grid-cols-2 gap-x-8 gap-y-6 bg-white px-12 lgd:px-6 mdd:px-0'
        >
          <TextField
            id='hoTen'
            name='hoTen'
            label='Họ và Tên'
            variant='outlined'
            className='col-span-1 w-full bg-[#F8F8F8] smd:col-span-2'
            required
            value={formValue.hoTen}
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
            id='noiDung'
            name='noiDung'
            label='Nội dung bình luận của bạn'
            variant='outlined'
            type='text'
            rows={4}
            multiline
            className='col-span-2 w-full bg-[#F8F8F8]'
            value={formValue.noiDung}
            onChange={handleChangeForm}
          />
          <TextField
            id='idTin'
            name='idTin'
            label='Nội dung bình luận của bạn'
            variant='outlined'
            type='text'
            className='col-span-2 hidden w-full bg-[#F8F8F8]'
            value={formValue.idTin}
          />
          <ButtonLink
            loading={isLoading}
            type='submit'
            color='primary'
            className='transition-md col-span-2 mx-auto w-fit cursor-pointer px-[30px] opacity-50 hover:opacity-100'
          >
            Gửi
          </ButtonLink>
        </Box>
        <div className='text-bold mb-3 border border-transparent border-b-slate-600 px-6 pt-5 text-xl'>
          Bình luận bài viết
        </div>
        <div className='max-h-[800px] min-h-[100px] overflow-y-scroll '>
          {comments.length == 0 ? (
            <></>
          ) : (
            comments.map((item: any, index) => {
              return (
                <div
                  className='mb-4 rounded-lg bg-[#fff] px-6 pb-4 text-black shadow-2xl'
                  key={index}
                >
                  <div className=''>
                    <h3 className='text-lg font-medium'>
                      {`${item.hoTen} - ${item.email}`}
                    </h3>
                    <p className='text-gray-600'>{`${item.ngayDang
                      .split(' ')[0]
                      .split('-')
                      .reverse()
                      .join('-')}`}</p>
                  </div>
                  <p className='mt-2'>{`${item.noiDung}`}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default CommentBlock;
