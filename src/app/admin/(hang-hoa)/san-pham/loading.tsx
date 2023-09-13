import { Skeleton } from 'components/lib/joy';

export default function Loading() {
  return (
    <div className='flex w-full items-start gap-5'>
      <div className='w-full max-w-[234px] shrink-0 overflow-hidden'>
        <Skeleton level='h2' variant='text' width={'10vw'}></Skeleton>
        <div className='mt-3 flex flex-col gap-2'>
          <Skeleton
            variant='rectangular'
            width={'20vw'}
            height={'22vh'}
          ></Skeleton>
          <Skeleton
            variant='rectangular'
            width={'20vw'}
            height={'22vh'}
          ></Skeleton>
          <Skeleton
            variant='rectangular'
            width={'20vw'}
            height={'22vh'}
          ></Skeleton>
        </div>
      </div>
      <div className='container w-full'>
        <div className='flex justify-between'>
          <Skeleton level='h2' variant='text' width={'25vw'}></Skeleton>
          <Skeleton level='h2' variant='text' width={'20vw'}></Skeleton>
        </div>
        <Skeleton
          variant='rectangular'
          className='mt-3 h-full min-h-[66vh] w-full max-w-[75vw]'
        ></Skeleton>
      </div>
    </div>
  );
}
