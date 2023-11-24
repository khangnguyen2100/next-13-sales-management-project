import { RecentNewType } from '@/components/blog/RecentNews';

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getNew(params.slug);
  const blogItem: RecentNewType = data.data;
  return (
    <div className='mx-auto mb-24 mt-10 grid max-w-7xl grid-cols-12 flex-col gap-x-10'>
      <div
        dangerouslySetInnerHTML={{ __html: blogItem.noiDung }}
        className='blogContainer col-span-8'
      ></div>
      <div className='col-span-4 flex flex-col'></div>
    </div>
  );
}

 async function getNew(slug: string) {
  // Fetch data from external API
  const res = await fetch(`https://admin.beesmart.io.vn/api/tin/${slug}`);
  const data = await res.json();
  return data;
}
