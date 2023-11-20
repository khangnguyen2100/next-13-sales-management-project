import { SignUpType } from '@/constants/types/auth';

const authAPI = {
  signUp: async (data: SignUpType) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    });
    const result = await res.json();
    return result;
  },
};
export default authAPI;
