import { SignUpType } from '@/constants/types/auth';

const authAPI = {
  signUp: (data: SignUpType) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
export default authAPI;
