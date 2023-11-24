import { RecentNewType } from '@/components/blog/RecentNews';

export async function getNew(slug: string) {
  // Fetch data from external API
  const res = await fetch(`https://admin.beesmart.io.vn/api/tin/${slug}`);
  const data = await res.json();
  return data;
}
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const data = await getNew(params.slug);
    const blogItem: RecentNewType = data.tintuc;
    return <div>{blogItem.noiDung}</div>;
  } catch (error) {}
}
