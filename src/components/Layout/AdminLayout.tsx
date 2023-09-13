import { ReactNode } from 'react';

import AdminHeader from '../admin/AdminHeader';
import AdminSideBar from '../admin/AdminSideBar';

type Props = {
  children: ReactNode;
};
function AdminLayout({ children }: Props) {
  return (
    <div className='admin-container relative mx-auto flex w-full flex-col'>
      <AdminHeader />
      {/* <AdminSideBar /> */}
      <main className='my-[50px] w-full'>{children}</main>
    </div>
  );
}

export default AdminLayout;
