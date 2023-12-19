import Link from 'next/link';

import { RecentNewType } from '@/components/blog/RecentNews';
import { getAllNews } from '@/utils/tin/getAllNews';
import CommentBlock from '@/components/blog/CommentBlock';

async function getNew(slug: string) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tin/${slug}`,
    {
      cache: 'no-store',
    },
  );
  const data = await res.json();
  return { data: data.data, comments: data.binhluan };
}
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { data: blogItem, comments } = await getNew(params.slug);
  const { data: news } = await getAllNews();
  return (
    <div className='mx-auto mb-24 mt-10 grid max-w-7xl grid-cols-12 flex-col gap-x-10 '>
      <div className='col-span-8 flex flex-col gap-y-2'>
        <h1 className='text-4xl'>{blogItem.tieuDe}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: blogItem.noiDung }}
          className='blogContainer'
        ></div>
        <CommentBlock data={comments} />
      </div>
      <div className='col-span-4 mt-5 flex h-fit flex-col gap-y-5 shadow-sm'>
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
