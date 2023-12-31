import Image, { StaticImageData } from 'next/image';

import Twiter from 'public/icons/Twiter.svg';
import Fb from 'public/icons/Fb.svg';
import Insta from 'public/icons/Insta.svg';
import MemberImg1 from 'public/images/about_us/unclePhuc.jpg';
import MemberImg2 from 'public/images/about_us/datAnHai.jpg';
import MemberImg3 from 'public/images/about_us/roCon.jpg';
import MemberImg4 from 'public/images/about_us/moidayboiz.jpg';
import MemberImg5 from 'public/images/about_us/longsdaddy.jpg';
import MemberImg6 from 'public/images/about_us/doquocviet.jpg';

import HeadingWithDot from '../common/HeadingWithDot';
type MemberLink = {
  icon: StaticImageData;
  linkTo: string;
};
type TeamMemberType = {
  name: string;
  position: string;
  links: MemberLink[];
  img: StaticImageData;
};
const TeamMember: TeamMemberType[] = [
  {
    name: 'Thiên Phúc',
    position: 'Leader',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg1,
  },
  {
    name: 'Phát Đạt',
    position: 'Back-end Team',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg2,
  },
  {
    name: 'Tiến Anh',
    position: 'Back-end Team',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg3,
  },
  {
    name: 'Quốc Việt',
    position: 'Back-end Team',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg6,
  },
  {
    name: 'Bảo Khang',
    position: 'Front End Team',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg5,
  },
  {
    name: 'Hoàng Long',
    position: 'Front End Team',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg4,
  },
];
function OurTeam() {
  return (
    <div className='mx-auto mb-24 flex max-w-large flex-col items-center justify-center gap-y-4 '>
      <HeadingWithDot variant='secondary' color='black' className='mb-4'>
        Thành viên
      </HeadingWithDot>
      <h2 className='mx-auto mb-10 max-w-[815px] text-center text-[36px] capitalize mdd:px-4 mdd:text-3xl mobile:text-2xl'>
        Thành viên của đội chúng tôi
      </h2>
      <div className='grid w-full grid-cols-12 gap-8 mdd:px-4 mobile:gap-x-0'>
        {TeamMember.map((member, index) => {
          return (
            <div
              className='group relative col-span-4 mx-auto flex w-full mdd:col-span-6 mobile:col-span-12'
              key={index}
            >
              <Image
                src={member.img}
                width={386}
                height={432}
                alt={member.name}
                className='w-full object-cover'
              ></Image>
              <div className='absolute bottom-[10%] left-[10%] w-[80%] translate-y-[-10%] rounded-sm bg-white px-5 py-3 text-center opacity-80'>
                <h3 className='text-xl'>{member.name}</h3>
                <p className='mt-3 text-base text-typo-1'>{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
