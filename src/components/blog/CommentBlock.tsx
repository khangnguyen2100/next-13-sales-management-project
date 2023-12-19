'use client';
function CommentBlock({ data }: { data: string[] }) {
  return (
    <div className='h-[500px] rounded-xl py-4 shadow-xl'>
      <div className='text-bold border border-transparent border-b-slate-600 px-6 pt-5 text-xl'>
        Bình luận bài viết
      </div>
    </div>
  );
}

export default CommentBlock;
