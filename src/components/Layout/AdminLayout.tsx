import { ReactNode } from 'react';

import AdminHeader from '../common/admin/AdminHeader';

type Props = {
  children: ReactNode;
};
function AdminLayout({ children }: Props) {
  return (
    <div className='relative mx-auto flex w-full flex-col'>
      <AdminHeader />
      <main className='mt-[20px]'>{children}</main>
    </div>
  );
}

export default AdminLayout;