import Link from 'next/link';

import { RecentNewType } from '@/components/blog/RecentNews';
import { getNews } from '@/utils/tin/getNews';
async function getNew(slug: string) {
  // Fetch data from external API
  const res = await fetch(`https://admin.beesmart.io.vn/api/tin/${slug}`, {
    cache: 'no-store',
  });
  const data = await res.json();

  return data.data;
}
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blogItem: RecentNewType = await getNew(params.slug);
  // console.log(blogItem);
  const news = await getNews();
  return (
    <div className='mx-auto mb-24 mt-10 grid max-w-7xl grid-cols-12 flex-col gap-x-10 '>
      <div
        dangerouslySetInnerHTML={{ __html: blogItem.noiDung }}
        className='blogContainer col-span-8'
      ></div>
      <div className='col-span-4 flex h-fit flex-col gap-y-5 shadow-sm'>
        <h3 className='block text-center'>Bài viết liên quan</h3>
        <div className='flex flex-col gap-y-5'>
          {news?.map((item: RecentNewType, index: number) => {
            return (
              <h4
                key={index}
                className='border border-transparent border-b-slate-200 py-3'
              >
                <Link
                  href={`/blog/${item.slug}`}
                  className='text-sm text-slate-500 hover:text-[#6B77E5]'
                >
                  {item.tieuDe}
                </Link>
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}
