export async function getNews() {
  // Fetch data from external API
  const res = await fetch(`https://admin.beesmart.io.vn/api/tin`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.danhsachtin;
}
