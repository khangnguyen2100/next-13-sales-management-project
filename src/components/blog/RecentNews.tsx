import Image from 'next/image';

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

async function RecentNews() {
  const blogData = await getNews();
  if (blogData && blogData?.length > 0)
    return (
      <div className='mb-24 mt-10 flex flex-col mdd:px-4'>
        <HeadingWithDot variant='secondary' color='black' align='center'>
          Tin gần đây
        </HeadingWithDot>
        <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[36px] capitalize mdd:text-3xl mobile:text-2xl'>
          Có thể bạn chưa biết
        </h2>
        <div className='mx-auto grid max-w-large grid-cols-12 gap-x-9 gap-y-10 mdd:w-full'>
          {blogData.map((item: any, index: number) => {
            const { tieuDe, urlHinh, tomTat, created_at, view, slug } = item;
            return (
              <div
                className='col-span-6 flex flex-col gap-y-3 mdd:col-span-12 mobile:max-w-[288px]'
                key={index}
              >
                <div className='mobile:max-w-[288px]'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${urlHinh}`}
                    alt={tieuDe}
                    className='mx-auto w-full object-cover'
                    width={500}
                    height={300}
                  ></Image>
                  <div className='flex w-full'>
                    <ButtonLink
                      color='primary'
                      href='#!'
                      className='mobile w-full border border-gray-500 mobile:px-4 mobile:py-1 mobile:text-sm '
                    >
                      {formatDate(created_at)}
                    </ButtonLink>
                    <ButtonLink
                      color='secondary'
                      href='#!'
                      className='mobile w-full border border-gray-500 mobile:px-4 mobile:py-1 mobile:text-sm'
                    >
                      Admin
                    </ButtonLink>
                    <ButtonLink
                      color='secondary'
                      href='#!'
                      className='mobile w-full border border-gray-500 mobile:px-4 mobile:py-1 mobile:text-sm'
                    >
                      {view}
                    </ButtonLink>
                  </div>
                </div>
                <h2 className=' w-full  text-2xl font-semibold mdd:text-xl'>
                  {tieuDe}
                </h2>
                <p className='line-clamp-3 overflow-hidden text-ellipsis'>
                  {tomTat}
                </p>
                <ButtonLink
                  color='transparent'
                  href={`/blog/${slug}`}
                  className='transition-sm pl-0 !text-left hover:text-primary '
                >
                  Watch More
                </ButtonLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  return <Loading></Loading>;
}

export default RecentNews;
