import Image, { StaticImageData } from 'next/image';
import React, { Fragment } from 'react';
import Link from 'next/link';

import Logo from 'public/logo.png';
import PhoneIcon from 'public/icons/phone.svg';
import MailIcon from 'public/icons/mail.svg';
import LocationIcon from 'public/icons/location.svg';
import { Divider } from '@/components/lib/mui';

import { Input } from '../lib/joy';

import ButtonLink from './ButtonLink';
import FooterForm from './FormFooter';

export interface ContactItemProp {
  heading: string;
  description: string;
  icon: StaticImageData;
}
interface FooterLink {
  href: string;
  label: string;
}
interface FooterColumnLink {
  heading: string;
  links: FooterLink[];
}
const footerLinks: FooterColumnLink[] = [
  {
    heading: 'Doanh nghiệp',
    links: [
      {
        label: 'Về BeeSmart',
        href: '/about-us',
      },
      {
        label: 'Dịch vụ',
        href: '/services',
      },
      {
        label: 'Bài viết',
        href: '/blog',
      },
    ],
  },
  {
    heading: 'Hỗ trợ',
    links: [
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Liên hệ',
        href: '/contact',
      },
    ],
  },
];

const contacts: ContactItemProp[] = [
  {
    heading: 'Liên hệ',
    description: '0779750024',
    icon: PhoneIcon,
  },
  {
    heading: 'Email',
    description: 'beesmart301@gmail.com',
    icon: MailIcon,
  },
  {
    heading: 'Địa chỉ',
    description: 'CVPM Quang Trung',
    icon: LocationIcon,
  },
];

const ColLinks = ({ props }: { props: FooterColumnLink }) => {
  const { heading, links } = props;
  return (
    <div className='flex flex-col'>
      <div className='mb-10 flex items-center gap-x-[5px]'>
        <div className='h-4 w-4 bg-primary'></div>
        <h3 className='block  text-lg font-semibold text-typo-2'>{heading}</h3>
      </div>
      {/* links */}
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            className='mb-3 block  leading-6 text-white hover:text-typo-2'
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

const ContactItem = ({ props }: { props: ContactItemProp }) => {
  const { heading, description, icon } = props;
  return (
    <div className='flex w-full items-center gap-x-[10px]'>
      {/* icon */}
      <div className='flex h-[68px] w-[68px] items-center justify-center rounded-full bg-section-3 mdd:h-[50px] mdd:w-[50px]'>
        <Image src={icon} width={26} height={26} alt={heading} />
      </div>
      <div className='flex flex-col  text-white md:gap-y-1'>
        <h4 className='text-lg font-semibold'>{heading}</h4>
        <p className=''>{description}</p>
      </div>
      {/* content */}
    </div>
  );
};

const Footer = () => {
  return (
    <div className='w-full bg-section-1'>
      <div className='mx-auto my-24 max-w-large mdd:my-10 mdd:px-4'>
        {/* header */}
        <div className='flex justify-between md:items-center mdd:flex-col mdd:gap-6'>
          {/* logo */}
          <Image src={Logo} alt='beeSmart-logo' height={55} width={186} />
          {/* icons */}
          <div className='flex gap-x-14 md:items-center mdd:flex-col mdd:gap-4'>
            {contacts.map((item, i) => (
              <Fragment key={i}>
                <ContactItem props={item} />
              </Fragment>
            ))}
          </div>
        </div>
        <Divider className='!my-12 bg-[#6C6D72]' />

        <div className='flex items-start justify-between gap-y-10 mdd:flex-col'>
          {/* links */}
          <div className='flex w-full md:gap-x-16 mdd:justify-around mobile:justify-around'>
            {/* cols */}
            {footerLinks.map((col, i) => (
              <Fragment key={i}>
                <ColLinks props={col} />
              </Fragment>
            ))}
          </div>
          <div className='w-full bg-section-4 px-8  py-9 text-white mdd:px-4 mdd:py-5'>
            <h3 className='mb-3 text-xl font-semibold'>Đăng ký</h3>
            <p className='mb-3'>Tham gia danh sách gửi thư để nhận tin tức</p>
            <FooterForm></FooterForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
