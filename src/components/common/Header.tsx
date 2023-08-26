import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from 'public/logo.png';

import ButtonLink from './ButtonLink';

interface NavLink {
  label: string;
  href: string;
}
const navLins: NavLink[] = [
  {
    label: 'Trang Chủ',
    href: '/',
  },
  {
    label: 'Về chúng tôi',
    href: '/about-us',
  },
  {
    label: 'Bài viết',
    href: '/blog',
  },
  {
    label: 'Đăng nhập',
    href: '/login',
  },
];
const Header = () => {
  return (
    <div className='fixed left-1/2 z-10 w-full translate-x-[-50%] bg-white shadow-md'>
      <div className='z-10 mx-auto flex w-full max-w-large items-center justify-between py-4 mdd:px-4 mdd:py-2'>
        {/* logo */}
        <Link href={'/'}>
          <Image src={Logo} alt='beeSmart-logo' height={55} width={186} />
        </Link>
        <div className='flex items-center gap-x-10 mdd:hidden'>
          <ul className='flex items-center gap-x-6'>
            {navLins.map((item, i) => {
              return (
                <Link
                  href={item.href}
                  key={i}
                  className=' font-medium text-typo-1 transition-all hover:text-primary'
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
          <ButtonLink color='primary'>Tư vấn miễn phí</ButtonLink>
        </div>
        {/* nav */}
      </div>
    </div>
  );
};

export default Header;
