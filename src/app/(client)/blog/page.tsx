import { Metadata } from 'next';

import { BlogBanner, RecentNews } from '@/components/blog';
export const metadata: Metadata = {
  title: 'Bài viết - Beesmart',
};
function Blog() {
  return (
    <>
      <BlogBanner></BlogBanner>
      <RecentNews></RecentNews>
    </>
  );
}

export default Blog;
