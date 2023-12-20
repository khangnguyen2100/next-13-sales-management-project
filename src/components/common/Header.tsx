'use client';
import Link from 'next/link';
import { useState } from 'react';

import ButtonLink from './ButtonLink';
import Logo from './Logo/Logo';
import NavigationDrawer from './NavDrawer';

export interface NavLink {
  label: string;
  href: string;
}
export const navLinks: NavLink[] = [
  {
    label: 'Trang Chủ',
    href: '/',
  },
  {
    label: 'Về chúng tôi',
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
  {
    label: 'Liên hệ',
    href: '/contact',
  },
  {
    label: 'Đăng ký',
    href: '/sign-up',
  },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
      <div className='fixed left-1/2 z-10 w-full translate-x-[-50%] bg-white shadow-md mdd:hidden'>
        <div className='z-10 mx-auto flex w-full max-w-large items-center justify-between py-4 mdd:px-4 mdd:py-2'>
          {/* logo */}
          <Logo />
          <div className='flex items-center gap-x-10 mdd:hidden'>
            <ul className='flex items-center gap-x-6'>
              {navLinks.map((item, i) => {
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
            {/* login button */}
            <ButtonLink color='primary'>
              <Link
                href={`${process.env.NEXT_PUBLIC_HOST_URL}`}
                className='text-inherit'
                target='_blank'
              >
                Đăng nhập
              </Link>
            </ButtonLink>
          </div>
          {/* nav */}
        </div>
      </div>
      <div className='transition-md fixed left-1/2 z-10 w-full translate-x-[-50%] bg-white shadow-md mdu:hidden'>
        <div className='z-10 mx-auto flex w-full max-w-large items-center justify-around  mdd:px-0 mdd:py-2 mobile:px-0'>
          {/* logo */}
          <div className='p-4' onClick={handleClose}>
            <i className='fa-sharp fa-solid fa-bars text-2xl'></i>
          </div>
          <Logo />
          <div className='p-4'>
            <i className='fa-sharp fa-solid fa-magnifying-glass text-2xl'></i>
          </div>
        </div>
      </div>
      <NavigationDrawer
        navLinks={navLinks}
        isOpen={isOpen}
        handleClose={handleClose}
      ></NavigationDrawer>
    </>
  );
};

export default Header;
