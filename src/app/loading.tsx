import { CircularProgress } from '@/components/Mui';

export default function Loading() {
  return (
    <div className='grid min-h-screen w-full place-items-center'>
      <CircularProgress />
    </div>
  );
}
