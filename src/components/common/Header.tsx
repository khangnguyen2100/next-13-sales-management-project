import Link from 'next/link';

import ButtonLink from './ButtonLink';
import Logo from './Logo/Logo';

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
  return (
    <div className='fixed left-1/2 z-10 w-full translate-x-[-50%] bg-white shadow-md'>
      <div className='z-10 mx-auto flex w-full max-w-large items-center justify-between py-4 mdd:px-4 mdd:py-2'>
        {/* logo */}
        <Logo />
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
          {/* login button */}
          <ButtonLink href='/login' color='primary'>
            Đăng nhập
          </ButtonLink>
        </div>
        {/* nav */}
      </div>
    </div>
  );
};

export default Header;
