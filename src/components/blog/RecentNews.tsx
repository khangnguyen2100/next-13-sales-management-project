import Image, { StaticImageData } from 'next/image';

import RecentNewImage1 from 'public/images/blog/Recent_blog-1.jpg';
import RecentNewImage2 from 'public/images/blog/Recent_blog-2.jpg';
import RecentNewImage3 from 'public/images/blog/Recent_blog-3.jpg';
import RecentNewImage4 from 'public/images/blog/Recent_blog-4.jpg';

import HeadingWithDot from '../common/HeadingWithDot';
import ButtonLink from '../common/ButtonLink';
type RecentNewType = {
  title: string;
  author: string;
  type: string;
  datePosted: string;
  content: string;
  linkTo: string;
  image: StaticImageData;
};
const RecentNewsData: RecentNewType[] = [
  {
    title: 'A Business Consulting That Can Produce',
    author: 'Miranda Doe',
    type: 'Business',
    datePosted: 'April 13/ 2021',
    content:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.',
    linkTo: '#!',
    image: RecentNewImage1,
  },
  {
    title: 'Popular Email Marketing Techniques 2022',
    author: 'Miranda Doe',
    type: 'Business',
    datePosted: 'April 13/ 2021',
    content:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.',
    linkTo: '#!',
    image: RecentNewImage2,
  },
  {
    title: 'What are backlinks and Why They are Important',
    author: 'Miranda Doe',
    type: 'Business',
    datePosted: 'April 13/ 2021',
    content:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.',
    linkTo: '#!',
    image: RecentNewImage3,
  },
  {
    title: 'Importance of Keyword Research in a Blog',
    author: 'Miranda Doe',
    type: 'Business',
    datePosted: 'April 13/ 2021',
    content:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.',
    linkTo: '#!',
    image: RecentNewImage4,
  },
];
function RecentNews() {
  return (
    <div className='my-24 flex flex-col mdd:px-4'>
      <HeadingWithDot variant='secondary' color='black' align='center'>
        Our Recent News
      </HeadingWithDot>
      <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[36px] capitalize mdd:text-3xl mobile:text-2xl'>
        Featured News And Insights
      </h2>
      <div className='mx-auto grid max-w-large grid-cols-12 gap-x-9 gap-y-10 mdd:w-full'>
        {RecentNewsData.map((newData, index) => {
          const { image, title, datePosted, author, type, content } = newData;
          return (
            <div
              className='col-span-6 flex flex-col gap-y-3 mdd:col-span-12 mobile:max-w-[288px]'
              key={index}
            >
              <div className='mobile:max-w-[288px]'>
                <Image
                  src={image}
                  alt={title}
                  className='mx-auto w-full'
                ></Image>
                <div className='flex w-full'>
                  <ButtonLink
                    color='primary'
                    href='#!'
                    className='mobile w-full border border-gray-500 mobile:px-4 mobile:py-1 mobile:text-sm '
                  >
                    {datePosted}
                  </ButtonLink>
                  <ButtonLink
                    color='secondary'
                    href='#!'
                    className='mobile w-full border border-gray-500 mobile:px-4 mobile:py-1 mobile:text-sm'
                  >
                    {author}
                  </ButtonLink>
                  <ButtonLink
                    color='secondary'
                    href='#!'
                    className='mobile w-full border border-gray-500 mobile:px-4 mobile:py-1 mobile:text-sm'
                  >
                    {type}
                  </ButtonLink>
                </div>
              </div>
              <h3 className='w-full text-2xl font-semibold mdd:text-xl'>
                {title}
              </h3>
              <p className='w-full text-base text-typo-3 mdd:text-sm'>
                {content}
              </p>
              <ButtonLink
                color='transparent'
                href='#!'
                className='transition-sm pl-0 !text-left hover:text-primary '
              >
                Watch More
              </ButtonLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentNews;
