export async function getAllNews() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tin`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return { data: data?.data?.data };
}
