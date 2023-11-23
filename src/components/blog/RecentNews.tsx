import Image, { StaticImageData } from 'next/image';

import RecentNewImage1 from 'public/images/blog/Recent_blog-1.jpg';
import RecentNewImage2 from 'public/images/blog/Recent_blog-2.jpg';
import RecentNewImage3 from 'public/images/blog/Recent_blog-3.jpg';
import RecentNewImage4 from 'public/images/blog/Recent_blog-4.jpg';

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

// export const getServerSideProps = async () => {
//   console.log('running');

//   const data = await fetch(`https://admin.beesmart.io.vn/api/tin`);
//   return { props: { data } };
// };
export async function getNews() {
  // Fetch data from external API
  const res = await fetch(`https://admin.beesmart.io.vn/api/tin`);
  const data = await res.json();
  return data;
}

async function RecentNews() {
  const blogData = await getNews();
  const recentNewBlog: RecentNewType[] = blogData.danhsachtin;
  return (
    <div className='mb-24 mt-10 flex flex-col mdd:px-4'>
      <HeadingWithDot variant='secondary' color='black' align='center'>
        Tin gần đây
      </HeadingWithDot>
      <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[36px] capitalize mdd:text-3xl mobile:text-2xl'>
        Featured News And Insights
      </h2>
      <div className='mx-auto grid max-w-large grid-cols-12 gap-x-9 gap-y-10 mdd:w-full'>
        {recentNewBlog.map((item: any, index: number) => {
          const { tieuDe, urlHinh, tomTat, created_at, view, slug } = item;
          return (
            <div
              className='col-span-6 flex flex-col gap-y-3 mdd:col-span-12 mobile:max-w-[288px]'
              key={index}
            >
              <div className='mobile:max-w-[288px]'>
                <Image
                  src={`https://admin.beesmart.io.vn/${urlHinh}`}
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
                    {created_at}
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
}

export default RecentNews;
