import { SignUpType } from '@/constants/types/auth';

const authAPI = {
  signUp: (data: SignUpType) => {
    console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },
};
export default authAPI;
