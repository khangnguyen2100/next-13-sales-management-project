import { ReactNode } from 'react';

import AdminHeader from './AdminHeader';

type Props = {
  children: ReactNode;
};
function AdminLayout({ children }: Props) {
  return (
    <div className='admin-container relative mx-auto flex w-full flex-col'>
      <AdminHeader />
      <main className='mt-[20px]'>{children}</main>
    </div>
  );
}

export default AdminLayout;
