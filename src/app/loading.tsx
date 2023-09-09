import { CircularProgress } from '@/components/lib/mui';

export default function Loading() {
  return (
    <div className='grid min-h-screen w-full place-items-center'>
      <CircularProgress />
    </div>
  );
}
