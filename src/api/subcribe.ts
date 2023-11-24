const choosePlanAPI = {
  subscribe: async (data: any) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/api/vnpay_payment',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
      },
    );
    const result = await res.json();
    return result;
  },
};
export default choosePlanAPI;
