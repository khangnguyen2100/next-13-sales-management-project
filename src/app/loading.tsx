import { CircularProgress } from '@/components/Mui';

export default function Loading() {
  return (
    <div className='w-full min-h-screen grid place-items-center'>
      <CircularProgress />
    </div>
  );
}
