'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { formatDate } from '@/utils/formatDate';
import { getNews } from '@/utils/tin/getNews';
import Loading from '@/app/loading';

import HeadingWithDot from '../common/HeadingWithDot';
import ButtonLink from '../common/ButtonLink';
export type RecentNewType = {
  id: number;
  tieuDe: string;
  slug: string;
  urlHinh: string;
  noiDung: string;
  view: string;
  anHien: string;
  idDmTin: string;
  idUsers: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

function RecentNews() {
  // const blogData =  getNews();
  const [blogData, setBlogData] = useState<any>([]);
  const [currentPage, setCurretPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const handleLoadMore = () => {
    setIsLoading(true);
    setCurretPage(prev => prev + 1);
  };
  useEffect(() => {
    (async () => {
      const { data: blogs, maxPage } = await getNews(currentPage);
      console.log(maxPage);
      console.log(currentPage);
      setBlogData((prev: any) => [...prev, ...blogs]);
      setIsLoading(false);
      if (currentPage >= maxPage) setIsHidden(true);
    })();
  }, [currentPage]);
  if (blogData && blogData?.length > 0)
    return (
      <div className='mb-24 mt-10 flex flex-col mdd:px-4'>
        <HeadingWithDot variant='secondary' color='black' align='center'>
          Tin gần đây
        </HeadingWithDot>
        <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[36px] capitalize mdd:text-3xl mobile:text-2xl'>
          Có thể bạn chưa biết
        </h2>
        <div className='mx-auto grid max-w-large grid-cols-12 gap-x-9 gap-y-10 mdd:w-full mobile:max-w-[280px]'>
          {blogData.map((item: any, index: number) => {
            const { tieuDe, urlHinh, tomTat, created_at, view, slug } = item;
            return (
              <div
                className='col-span-6 flex flex-col gap-y-3 mdd:col-span-12 mobile:w-[288px]'
                key={index}
              >
                <div className='flex flex-col'>
                  <Link href={`/blog/${slug}`} className='h-[300px]'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${urlHinh}`}
                      alt={tieuDe}
                      className='mx-auto w-full shrink-0 object-cover shadow-xl mobile:w-[288px]'
                      width={500}
                      height={300}
                    ></Image>
                  </Link>
                  <div className='flex w-full'>
                    <ButtonLink
                      color='primary'
                      href='#!'
                      className=' w-full rounded-none border border-gray-500 mobile:px-4  mobile:text-sm'
                      title='Ngày tạo'
                    >
                      {formatDate(created_at)}
                    </ButtonLink>
                    <ButtonLink
                      color='secondary'
                      href='#!'
                      className='mobile w-full rounded-none border border-gray-500 mobile:px-4  mobile:text-sm'
                      title='Tác giả'
                    >
                      <i className='fa-regular fa-user-pen mr-2'></i>
                      Admin
                    </ButtonLink>
                    <ButtonLink
                      color='secondary'
                      href='#!'
                      className='w-full rounded-none border border-gray-500 mobile:px-4  mobile:text-sm'
                      title='Lượt xem'
                    >
                      <i className='fa-solid fa-eye mr-2'></i>
                      {view}
                    </ButtonLink>
                  </div>
                </div>
                <Link
                  href={`/blog/${slug}`}
                  className='transition-md text-black hover:text-[#6B77E5]'
                >
                  <h2 className=' w-full text-2xl font-semibold mdd:text-xl'>
                    {tieuDe}
                  </h2>
                </Link>
                <p className='mt-auto line-clamp-3 overflow-hidden text-ellipsis'>
                  {tomTat}
                </p>
                <ButtonLink
                  color='transparent'
                  href={`/blog/${slug}`}
                  className='transition-sm pl-0 !text-left hover:text-primary '
                >
                  Xem thêm
                </ButtonLink>
              </div>
            );
          })}
        </div>
        <ButtonLink
          color='secondary'
          className={clsx('mx-auto mt-5 max-w-[150px]', {
            hidden: isHidden,
          })}
          onClick={handleLoadMore}
          loading={isLoading}
        >
          Xem thêm
        </ButtonLink>
      </div>
    );
  return <Loading></Loading>;
}

export default RecentNews;
