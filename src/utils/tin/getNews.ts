type Props = {
  page: number;
  pageSize?: number;
};
export async function getNews(page: number = 1, pageSize: number = 4) {
  console.log(page);
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tin?page=${page}&pageSize=${pageSize}`,
    {
      cache: 'no-store',
    },
  );
  const data = await res.json();
  return { maxPage: data.data.last_page, data: data?.data?.data };
}
