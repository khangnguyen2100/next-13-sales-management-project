import Image from 'next/image';
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineSavings,
  MdOutlineColorLens,
  MdOutlineLiveHelp,
  MdOutlineFeedback,
  MdOutlineMail,
  MdOutlineAccountCircle,
  MdDeliveryDining,
  MdOutlineShoppingBag,
  MdLanguage,
  MdSettings,
} from 'react-icons/md';
/* eslint-disable-next-line import/named */ 
import { IconType } from 'react-icons';
import Link from 'next/link';

import Logo from 'public/logo.png';
type NavbarLinkType = {
  title: string;
  linkTo: string;
};
const NavbarLinks: NavbarLinkType[] = [
  { title: 'Tổng quan', linkTo: '#!' },
  { title: 'Hàng hóa', linkTo: '#!' },
  { title: 'Giao dịch', linkTo: '#!' },
  { title: 'Đối tác', linkTo: '#!' },
  { title: 'Nhân viên', linkTo: '#!' },
  { title: 'Sổ quỹ', linkTo: '#!' },
  { title: 'Báo cáo', linkTo: '#!' },
];
type TopHeaderLinksType = {
  icon: IconType;
  title?: string;
  linkTo: string;
};
const TopHeaderLinks: TopHeaderLinksType[] = [
  { icon: MdOutlineShoppingBag, title: 'Bán online', linkTo: '#!' },
  { icon: MdDeliveryDining, title: 'Giao hàng', linkTo: '#!' },
  { icon: MdLanguage, title: 'Website', linkTo: '#!' },
  { icon: MdOutlineAccountBalanceWallet, title: 'Tài chính', linkTo: '#!' },
  { icon: MdOutlineSavings, title: 'Nguồn hàng giá tốt', linkTo: '#!' },
  { icon: MdOutlineColorLens, title: 'Chủ đề', linkTo: '#!' },
  { icon: MdOutlineLiveHelp, title: 'Hỗ trợ', linkTo: '#!' },
  { icon: MdOutlineFeedback, title: 'Góp ý', linkTo: '#!' },
  { icon: MdOutlineMail, linkTo: '#!' },
  { icon: MdSettings, linkTo: '#!' },
  { icon: MdOutlineAccountCircle, title: '0335702367', linkTo: '#!' },
];

function AdminHeader() {
  return (
    <>
      <div className='mx-auto flex w-full max-w-xl items-center justify-between px-4 py-5 xld:px-0'>
        <div>
          <Image src={Logo} alt='Beesmart' className='h-8 w-auto'></Image>
        </div>
        <div></div>
        <div className='flex gap-x-3'>
          {TopHeaderLinks.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-x-1'>
                <item.icon size={18}></item.icon>
                <Link href={item.linkTo} className='text-xs'>
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className='bg-[#0090DA] xld:px-0'>
        <div className='mx-auto flex max-w-xl'>
          {NavbarLinks.map((item, index) => {
            return (
              <Link
                href={item.linkTo}
                key={index}
                className='px-5 py-3 text-white hover:bg-[#0078b6]'
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
