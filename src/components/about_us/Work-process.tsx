import Image, { StaticImageData } from 'next/image';

import WorkProcessIcon1 from 'public/icons/WorkProcessIcon-1.svg';
import WorkProcessIcon2 from 'public/icons/WorkProcessIcon-2.svg';
import WorkProcessIcon3 from 'public/icons/WorkProcessIcon-3.svg';

import HeadingWithDot from '../common/HeadingWithDot';
import ButtonLink from '../common/ButtonLink';

type WorkProcessCard = {
  title: string;
  content: string;
  href: string;
  icon: StaticImageData;
};
const WorkProcessCardList: WorkProcessCard[] = [
  {
    title: 'Make Appointment',
    content:
      'Leverage agile frameworks providesynopsishigh level overviews proposition.',
    href: '#!',
    icon: WorkProcessIcon1,
  },
  {
    title: 'Consultation',
    content:
      'Leverage agile frameworks providesynopsishigh level overviews value proposition. ',
    href: '#!',
    icon: WorkProcessIcon2,
  },
  {
    title: 'Enjoy the Service',
    content:
      'Leverage agile frameworks providesynopsishigh level overviews value proposition. ',
    href: '#!',
    icon: WorkProcessIcon3,
  },
];
function WorkProcess() {
  return (
    <div className='mx-auto mb-24 flex max-w-large flex-col items-center justify-center gap-y-4 '>
      <HeadingWithDot variant='secondary' color='black' className='mb-4'>
        Quá trình làm việc
      </HeadingWithDot>
      <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[36px] capitalize mdd:px-4 mdd:text-3xl mobile:text-2xl'>
        Cách làm việc của chúng tôi
      </h2>
      <div className='grid max-w-full grid-cols-12 gap-x-7 mdd:gap-y-14 '>
        {WorkProcessCardList.map((item, index) => {
          const { title, content, href, icon } = item;
          return (
            <div
              className='relative col-span-4 flex flex-col gap-y-5 bg-gray-100 px-10 py-14 text-center mdd:col-span-12 mdd:px-8 mdd:py-12 mobile:px-4 mobile:py-8'
              key={index}
            >
              {/*Icons*/}
              <div className='flex-center absolute left-[50%] top-[-10%] h-[72px] w-[72px] translate-x-[-50%] translate-y-[-10%]'>
                <Image src={icon} alt={title} fill className='object-cover' />
              </div>
              {/* Title */}
              <h3 className='text-2xl font-semibold'>{title}</h3>
              <p className='flex-1 text-lg'>{content}</p>
              {/* Button */}
              <ButtonLink color='secondary' href={href}>
                Xem thêm
              </ButtonLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkProcess;
