import { ReactNode } from 'react';

import AdminHeader from '../admin/AdminHeader';
import AdminSideBar from '../admin/AdminSideBar';

type Props = {
  children: ReactNode;
};
function AdminLayout({ children }: Props) {
  return (
    <div className='relative mx-auto flex w-full flex-col'>
      <AdminHeader />
      <AdminSideBar />
      <main className='mt-[92px] mdd:mt-[71px]'>{children}</main>
    </div>
  );
}

export default AdminLayout;
