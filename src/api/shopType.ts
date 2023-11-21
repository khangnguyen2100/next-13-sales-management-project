const authAPI = {
  getAll: () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/loai-cua-hang', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
export default authAPI;
