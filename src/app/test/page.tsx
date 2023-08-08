'use client';
import { useStore } from 'src/store/useStore';

export default function Page() {
  const { count, increment, decrement, reset } = useStore(state => state);
  return (
    <div>
      <h1 className='text-2xl'>{count}</h1>
      <div className='flex items-center gap-x-4'>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
