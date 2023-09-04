import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Twiter from 'public/icons/Twiter.svg';
import Fb from 'public/icons/Fb.svg';
import Insta from 'public/icons/Insta.svg';
import MemberImg1 from 'public/images/about_us/Team_member-1.png';
import MemberImg2 from 'public/images/about_us/Team_member-2.png';
import MemberImg3 from 'public/images/about_us/Team_member-3.png';
import MemberImg4 from 'public/images/about_us/Team_member-4.png';
import MemberImg5 from 'public/images/about_us/Team_member-5.png';
import MemberImg6 from 'public/images/about_us/Team_member-6.png';

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
    name: 'Phuc Old Man',
    position: 'Leader',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg1,
  },
  {
    name: 'Dat 09',
    position: 'Ăn hại 1',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg2,
  },
  {
    name: 'Tien Anh',
    position: 'Rô con',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg3,
  },
  {
    name: 'Quoc Viet',
    position: 'Handsome boy',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg4,
  },
  {
    name: 'Bao Khang',
    position: 'Longs Daddy',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg5,
  },
  {
    name: 'Hoang Long',
    position: 'An hai 2',
    links: [
      { icon: Fb, linkTo: '#!' },
      { icon: Insta, linkTo: '#!' },
      { icon: Twiter, linkTo: '#!' },
    ],
    img: MemberImg6,
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
              className='group relative col-span-4 mx-auto flex mdd:col-span-6 mobile:col-span-12'
              key={index}
            >
              <Image
                src={member.img}
                width={386}
                height={532}
                alt={member.name}
              ></Image>
              <div className='transition-sm absolute inset-0 bg-[#6B77E5] opacity-0 group-hover:opacity-70'></div>
              <div className='transition-sm absolute left-1/2 top-1/3 flex translate-x-[-50%] translate-y-[-50%] gap-x-3 opacity-0 group-hover:top-1/2 group-hover:opacity-100'>
                {member.links.map((link, index) => {
                  return (
                    <Link
                      href={link.linkTo}
                      key={index}
                      className='relative block h-[50px] w-[50px]'
                    >
                      <Image src={link.icon} fill alt=''></Image>
                    </Link>
                  );
                })}
              </div>
              <div className='absolute bottom-[10%] left-[10%] w-[80%] translate-y-[-10%] rounded-sm bg-white px-5 py-3 text-center'>
                <h3 className='text-xl'>{member.name}</h3>
                <p className='mt-3 text-base text-typo-2'>{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
